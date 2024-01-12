import { useEffect, useState } from "react"

const App = () => {
  const [amout, setAmout] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('BRL')
  const [exchange, setExchange] = useState(null)

  useEffect(() => {
    fetch(`https://economia.awesomeapi.com.br/last/${from}-${to}`)
      .then(res => res.json())
      .then(data => setExchange(data))
      .catch(console.log)
  }, [exchange])

  const handleChangeFrom = e => setFrom(e.target.value)
  const handleChangeTo = e => setTo(e.target.value)
  const handleChangeAmout = e => setAmout(prev => prev === '' ? 0 : +e.target.value)

  return (
    <>
      <input value={amout} type="number" autoFocus onChange={handleChangeAmout} />

      <div className="selects">
        <select value={from} onChange={handleChangeFrom}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <select value={to} onChange={handleChangeTo}>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <h2>4.87 BRL</h2>
    </>
  )
}

export { App }
