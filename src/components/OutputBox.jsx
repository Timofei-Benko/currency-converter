import './OutputBox.css';

function OutputBox(props) {

    const {
        convertedAmount,
    } = props;

    return (
        <div>
            <div className={'output-box'}>
                <span className={'output-text'}>{ convertedAmount }</span>
            </div>
        </div>
    )
}

export default OutputBox
