export default function Receipt({receipt, isPaid}) {
    const keys = Object.keys(receipt.order)

    return (
        <div className="receipt">
            {receipt.paid !== isPaid ? null : <>
                <h1 className="receipt-header">
                    {receipt.person}
                </h1>
                <ul>
                    {keys.map((key, index) => {
                        return <li className="order-prop" key={index}><span className="order-category">{key}</span> {receipt.order[key]}</li>
                    })}
                </ul>
            </>}
        </div>
    )
}