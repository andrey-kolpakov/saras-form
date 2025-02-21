import React, {useState, useEffect} from 'react'

import Form from './components/Form'

import './App.scss'
import './progressbar.scss'
import './questions.scss'
import './options.scss'
import './form.scss'

import {quizSteps} from './data/quizSteps'

function App() {
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers] = useState([])

    const handleOptionClick = (option) => {
        const updatedAnswers = [...answers]
        updatedAnswers[currentStep] = option.text
        setAnswers(updatedAnswers)
    }

    const handleNextClick = () => {
        if (!answers[currentStep]) {
            return
        }
        setCurrentStep(currentStep + 1)
    }

    const [userAgent, setUserAgent] = useState('')
    useEffect(() => {
        setUserAgent(navigator.userAgent)
    }, [])
    // console.log(userAgent)

    const customURL = window.location.href
    const params = new URLSearchParams(customURL.split('?')[1])
    const fbclid = params.get('fbclid')
    // const fbAds = params.get('fb')

    return (

        <div className="App">

            <Form
                answers={answers}
                setCurrentStep={setCurrentStep}
                setAnswers={setAnswers}
                fbc={fbclid ? fbclid : ''}
                browserName={userAgent}
            />


        </div>

    )
}

export default App
