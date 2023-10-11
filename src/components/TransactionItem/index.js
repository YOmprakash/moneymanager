// Write your code here

import './index.css'

const TransactionItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, name, money, type} = historyDetails

  const deleteHistory = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="list-item">
      <p className="history">{name}</p>
      <p className="history">{money}</p>
      <p className="history">{type}</p>
      <button className="delete-button" type="button" onClick={deleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
