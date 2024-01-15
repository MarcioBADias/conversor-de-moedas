import { useEffect, useState } from "react"

const App = () => {
  const [amout, setAmout] = useState(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('BRL')
  const [exchange, setExchange] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    if (exchange === null) {
      return
    }

    document.title = `${exchange.ask} ${to}`
    return () => document.title = 'Conversor de moedas'
  }, [exchange, to])

  useEffect(() => {
    if (to === from || amout === 0) {
      setExchange(null)
      return
    }

    const id = setTimeout(() => {
      setExchange(null)
      setLoading('Carregando...')
      fetch(`https://economia.awesomeapi.com.br/last/${from}-${to}`)
        .then(res => res.json())
        .then(data => setExchange(data.USDBRL))
        .catch(console.log)
    }, 500)

    return () => clearInterval(id)
  }, [amout, from, to])

  const handleChangeFrom = e => setFrom(e.target.value)
  const handleChangeTo = e => setTo(e.target.value)
  const handleChangeAmout = e => setAmout(prev => prev === '' ? 0 : +e.target.value)
  console.log(exchange)
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

      {loading && <h2>{loading}</h2>}
      {exchange && <h2>{`${exchange.ask} ${to}`}</h2>}
    </>
  )
}

export { App }
