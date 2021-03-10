import { TextField, Select, MenuItem } from '@material-ui/core';

function InputBox(props) {
    const {
        currencyData,
        convert,
        handleCurrencyChange,
        amount,
        setAmount
    } = props;

    const inputBoxStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        width: '100%',
        overflow: 'scroll',
    };

    const arrowStyles = {
        marginTop: '15px',
        fontSize: '1.5rem',
    };

    const selectStyles = {
        marginTop: '15px',
    };

    return (
        <div>
            <div style={inputBoxStyles}>
                <TextField id="filled-basic"
                           label="BYN"
                           color="primary"
                           size="medium"
                           type="text"
                           value={amount}
                           onChange={ e => {
                               setAmount(+e.target.value)
                               convert(+e.target.value)
                           } }
                />
                <span style={arrowStyles}>→</span>
                <Select
                    style={selectStyles}
                    defaultValue={'USD'}
                    onChange={ e => {
                            handleCurrencyChange(e.target.value)
                        }
                    }
                >
                    {currencyData && currencyData.length !== 0 ?
                        currencyData.map(curr => (
                            <MenuItem
                                key={curr.code}
                                value={curr.code}
                            >{curr.code}
                            </MenuItem>
                        ))
                        :
                        null
                    }
                </Select>
            </div>
        </div>
    )
}

export default InputBox;
