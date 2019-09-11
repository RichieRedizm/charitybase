import React, { useState, useContext } from 'react'
import CharityBaseContext from '../../context/charityBase/charityBaseContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const charityBaseContext = useContext(CharityBaseContext)
  const { searchCharities } = charityBaseContext
  const alertContext = useContext(AlertContext)
  const [incomeFrom, setIncomeFrom] = useState('')
  const [incomeTo, setincomeTo] = useState('')

  const onChangeFrom = e => setIncomeFrom(e.target.value)
  const onChangeTo = e => setincomeTo(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    if (incomeTo === '' || incomeFrom === '') {
      alertContext.setAlert('Please add a value for each input field!', 'light')
    } else {
      searchCharities(incomeFrom, incomeTo)
      setIncomeFrom('')
      setincomeTo('')
    }
  }

  return (
    <div>
      <strong>Search charities by their income</strong>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='number'
          name='income_from'
          placeholder='Income from...'
          value={incomeFrom}
          onChange={onChangeFrom}
        />
        <input
          type='text'
          name='income_to'
          placeholder='Income to...'
          value={incomeTo}
          onChange={onChangeTo}
        />
        <input type='submit' value='Search' className='btn btn-dark' />
      </form>
    </div>
  )
}

export default Search
