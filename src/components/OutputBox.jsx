function OutputBox(props) {

    const outputBoxStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '25px',
        overflow: 'scroll',
    };

    const outputTextStyles = {
        fontSize: '3rem',
    }

    const {
        convertedAmount,
        toCurrency,
    } = props;

    return (
        <div style={outputBoxStyles}>
            <span style={outputTextStyles}>{ convertedAmount } { toCurrency }</span>
        </div>
    )
}

export default OutputBox;
