// Form.js
import React, {useState} from 'react'

import handleAmoWebhook from '../utils/handleAmoWebHook'
import handleCapi from '../utils/handleCapi'

import './styles/form.scss'

import {InputMask} from '@react-input/mask'

function Form({answers, fbc, browserName}) {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')


    const handleFormSubmit = (e) => {
        e.preventDefault()

        //Валидация формы
        if (phoneNumber.length !== 18) {
            setError('Пожалуйста, введите номер телефона полностью')
            console.log(phoneNumber.length)
            return
        }

        let updatedName = name;

        if (updatedName.length === 0) {
            updatedName = 'Нет имени';
        }


        //Отправка данных
        handleAmoWebhook(updatedName, phoneNumber, answers)
        if (fbc) {
            handleCapi(updatedName, phoneNumber, fbc, browserName)
        }

        //Очистка формы
        setPhoneNumber('')
        setName('')
        setError('')
        setIsSubmitted(true)

        // Редирект на страницу благодарности
        // setTimeout(() => {
        //     window.location.href = "/thank-you";
        // }, 1500); // 1.5 сек задержки перед редиректом
    }

    return (
        <form onSubmit={handleFormSubmit}
              className={`form-container ${isSubmitted ? 'form-container--submitted' : ''}`}>
            <div className="submited-overlay">
                <div className="submited-overlay__text">Мы получили вашу заявку и скоро свяжемся!</div>
                <div className="button-back-to-form" onClick={() => setIsSubmitted(false)}>
                    Я хочу отправить форму заново
                </div>
            </div>
            <h3>Свяжемся с вами в ближайшее время!</h3>
            <br/>
            <InputMask
                mask="+7 (___) ___-__-__"
                replacement={{_: /\d/}}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+7 (777) 777-55-11"
                value={phoneNumber}
                required
            />
            {error && <div className="error-message">{error}</div>}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя"/>
            <button type="submit">Отправить</button>

            <div className="tp-s form-link">
                Отправляя эту форму, вы соглашаетесь с нашей <br/> <a href="https://saras.kz/privacy-policy">политикой
                конфиденциальности</a>
            </div>

            <br/>

            <div className="tp-s form-link">
                Мы используем файлы cookie для улучшения работы сайта, анализа статистики и рекламных целей. Отправляя
                эту форму, вы соглашаетесь на
                использование cookie.
            </div>
        </form>
    )
}

export default Form
