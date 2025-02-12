import { useState } from 'react'
import './App.css'
import Receipt from './Receipt.jsx'
import data from './data.js'

function App() {
  const [receipts, setReceipts] = useState(data)

  return (
    <div className="receipt-list">
      {/* <h1>Yo!</h1> */}
      {receipts.map((receipt, index) => {
        return <Receipt key={index} receipt={receipt} />
      })}
    </div>
  )
}

export default App
