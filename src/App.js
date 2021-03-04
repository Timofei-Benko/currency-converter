import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { Button } from '@material-ui/core';
import './App.css';
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

const URL = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

function App() {

    let [currencyData, setCurrencyData] = useState([]);
    let [toCurrency, setToCurrency] = useState('USD');
    let [amount, setAmount] = useState(0);
    let [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {

        if (localStorage.getItem('currency')) {
            const currentDate = new Date(Date.now())

            if (moment().isBefore(currentDate, 'day') === false) {
                return
            }
        }

        fetch(URL)
            .then(response => response.json())
            .then(data => localStorage.setItem('currency', JSON.stringify(data)))
    }, []);

    function filterData() {
        let data
        if (JSON.parse(localStorage.getItem('currency'))) {
            data = JSON.parse(localStorage.getItem('currency'))
        } else {
            return
        }

        let filteredData = []

        data.forEach((curr) => {
            if (curr.Cur_Abbreviation === 'USD'
                ||
                curr.Cur_Abbreviation === 'EUR'
                ||
                curr.Cur_Abbreviation === 'RUB') {
                let { Cur_Abbreviation, Cur_OfficialRate, Cur_Scale } = curr

                filteredData.push(
                    {
                        code: Cur_Abbreviation,
                        rate: Cur_OfficialRate,
                        scale: Cur_Scale,
                    }
                )
            }
        })
        console.log(filteredData)
        return filteredData
    }

    useEffect(() => {
        setCurrencyData(filterData())
    }, [])

    const handleCurrencyChange = e => {
        setToCurrency(e.target.value)
        setConvertedAmount(0)
    }

    const handleAmountChange = e => setAmount(+e.target.value)

    function convert() {
        let curr = currencyData.find(curr => curr.code === toCurrency)
        const convertedAmount = (amount * curr.rate * curr.scale).toFixed(2)
        setConvertedAmount(+convertedAmount)
    }

    return (
        <div className="wrap">
            <h1>Currency Converter</h1>
            <div className="App">
                <InputBox
                    class={'upper'}
                    currencyData={ currencyData }
                    handleCurrencyChange={ handleCurrencyChange }
                    handleAmountChange={ e => handleAmountChange(e) }
                />

                <Button
                    className="btn"
                    variant="contained"
                    onClick={ convert }
                >Convert
                </Button>

                <OutputBox
                    convertedAmount={ convertedAmount }
                    toCurrency={ toCurrency }
                />
            </div>
        </div>
    );
}

export default App;
