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
                           label="Amount to convert"
                           color="primary"
                           size="medium"
                           type="text"
                           onChange={ handleAmountChange }
                />
                <Select
                    className="select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={'USD'}
                    onChange={ handleCurrencyChange }
                >
                    {
                        currencyData.map(curr => (
                            <MenuItem key={curr.code} value={curr.code}>{curr.code}</MenuItem>
                        ))
                    }
                </Select>
            </div>
        </div>
    )
}

export default InputBox
