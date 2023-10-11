import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionList: [],
    value: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({value: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, value} = this.state

    const newTransaction = {
      id: v4(),
      name: title,
      money: amount,
      type: value,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      value: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteHistory = id => {
    const {transactionList} = this.state

    const filterList = transactionList.map(each => each.id !== id)

    this.setState({transactionList: filterList})
  }

  getTotalIncome = () => {
    const {transactionList} = this.state

    let income = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  getTotalExpenses = () => {
    const {transactionList} = this.state

    let expenses = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amount
      }
    })
    return expenses
  }

  getTotalBalance = () => {
    const {transactionList} = this.state

    let incomeAmount = 0
    let expensesAmount = 0
    let balanceAmount = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expensesAmount += each.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {title, amount, transactionList} = this.state
    const totalBalance = this.getTotalBalance()
    const totalIncome = this.getTotalIncome()
    const totalExpenses = this.getTotalExpenses()
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-head-container">
            <h1 className="name-heading">Hi Richard!</h1>
            <p className="description">
              Welcome back to <span className="span">money manager</span>
            </p>
          </div>
          <MoneyDetails
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />

          <div className="transaction-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onAddTransaction}>
              <label htmlFor="title" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                className="input-box"
                id="title"
                placeholder="TITLE"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label-text">
                AMOUNT
              </label>
              <input
                type="text"
                className="input-box"
                id="amount"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type">TYPE</label>
              <select
                className="input-box"
                value="type"
                onChange={this.onChangeOption}
              >
                {transactionTypeOptions.map(each => (
                  <option className="option" value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>

            <div className="history-container">
              <h1 className="transaction-heading">history</h1>
              <div className="history-details-container">
                <ul className="ul-container">
                  <li className="table-header">
                    <p className="details-heading">Title</p>
                    <p className="details-heading">Amount</p>
                    <p className="details-heading">Type</p>
                  </li>

                  {transactionList.map(each => (
                    <TransactionItem
                      historyDetails={each}
                      key={each.id}
                      onDeleteHistory={this.onDeleteHistory}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
