import { useState } from 'react'
import './App.css'
import Receipt from './Receipt.jsx'
import data from './data.js'

function App() {
  const [receipts, setReceipts] = useState(data)
  const [paidOrUnpaid, setPaidOrUnpaid] = useState(false)

  function handleCheck(e) {
    console.log(e.target.checked)
    setPaidOrUnpaid(e.target.checked)
  }

  function undoPayment(e) {
    const newReceipts = [...receipts]

    for (const receipt of new Receipts) {
      receipt.paid = false;
    }
    
    setReceipts(newReceipts)
  }

  return (
    <div className="receipt-list">
      {/* <h1>Yo!</h1> */}
      {receipts.map((receipt, index) => {
        return <Receipt key={index} receipt={receipt} isPaid= {paidOrUnpaid}/>
      })}
      <label htmlFor="paidCheckbox">Paid</label>
      <input name="Paid" type="checkbox" id="paidCheckbox" onClick={handleCheck}></input>
      <button id="undoPayment">Everyone's Unpaid!</button>
    </div>
  )
}

export default App
