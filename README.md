# Desafio 05 (Bateria de desafios 08)

Implemente uma aplicação de conversão de moedas.

Use qualquer API de conversão de moedas que te traga o câmbio de USD para BRL, EUR para USD, etc.

Você pode implementar essa aplicação à partir da marcação CSS e JSX abaixo.

Lembre-se: estilização não é o foco em nenhum desafio desta bateria.

Há um screenshot da aplicação na pasta img.

Também não se preocupe em adicionar mais options nos selects ou qualquer outro aspecto da aplicação que possa desviar a atenção dos efeitos colaterais. O foco deste desafio é o gerenciamento dos efeitos colaterais.

O h2 deve ser renderizado apenas quando o câmbio for obtido.

Evite que um request seja feito a cada caractere inserido no input.

O title padrão da aba deve ser "Conversor de moedas".

Exiba no title da aba o câmbio e a moeda. No exemplo abaixo, houve uma conversão de 1 USD para real brasileiro.

4.87 BRL

Quando o valor do input for limpado, volte a exibir o title padrão da aba.

```css
.selects {
  display: flex;
  gap: 5px;
}

select {
  display: block;
  margin: 10px 0;
}
```

```jsx
const App = () => (
  <>
    <input type="number" autoFocus />

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
);
```
