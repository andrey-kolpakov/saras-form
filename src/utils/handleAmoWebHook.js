import axios from 'axios'

export default function handleAmoWebhook(name, phone, text) {
    const payload = {
        name: name,
        phone: phone,
        comments: text,
    }

    // console.log(payload)

    axios
        .post('https://saras-amo.netlify.app/.netlify/functions/check', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log('Успешная отправка данных на вебхук:', response.data)

        })
        .catch((error) => {
            console.error('Ошибка при отправке данных на вебхук:', error)
        })
}
