import './OutputBox.css';

function OutputBox(props) {

    const {
        convertedAmount,
        toCurrency,
    } = props;

    return (
        <div>
            <div className={'output-box'}>
                <span className={'output-text'}>{ convertedAmount } { toCurrency }</span>
            </div>
        </div>
    )
}

export default OutputBox
