import { useState } from "react"

const App = () => {
  const [amout, setAmout] = useState(1)

  const changeAmout = e => setAmout(prev => prev === '' ? 0 : +e.target.value)

  return (
    <>
      <input value={amout} type="number" autoFocus onChange={changeAmout} />

      <div className="selects">
        <select>
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <select>
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
