// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props

  return (
    <div className="money-container">
      <div className="card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="text-container">
          <p className="amount">Your Balance</p>
          <p className="money">{totalBalance}</p>
        </div>
      </div>
      <div className="card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="text-container">
          <p className="amount">Your Income</p>
          <p className="money">{totalIncome}</p>
        </div>
      </div>
      <div className="card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="image"
          alt="expenses"
        />
        <div className="text-container">
          <p className="amount">Your Expenses</p>
          <p className="money">{totalExpenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
