export default function Receipt({receipt}) {
    const keys = Object.keys(receipt.order)

    return (
        <div className="receipt">
            {receipt.paid ? null : <>
                <h1 className="receipt-header">
                    {receipt.person}
                </h1>
                <ul>
                    {keys.map((key, index) => {
                        return <li className="order-prop"><span className="order-category">{key}</span> {receipt.order[key]}</li>
                    })}
                </ul>
            </>}
        </div>
    )
}