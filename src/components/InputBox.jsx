import './InputBox.css';
import { TextField, Select, MenuItem } from '@material-ui/core';

function InputBox(props) {
    const {
        currencyData,
        handleAmountChange,
        handleCurrencyChange,
    } = props;

    return (
        <div>
            <div className={'input-box'}>
                <TextField id="filled-basic"
                           label="BYN"
                           color="primary"
                           size="medium"
                           type="text"
                           onChange={ handleAmountChange }
                />
                <span className={ 'to' }>→</span>
                <Select
                    className={ 'select' }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={'USD'}
                    onChange={ handleCurrencyChange }
                >
                    {currencyData && currencyData.length !== 0 ?
                        currencyData.map(curr => (
                            <MenuItem key={curr.code} value={curr.code}>{curr.code}</MenuItem>
                        ))
                        :
                        null
                    }
                </Select>
            </div>
        </div>
    )
}

export default InputBox
