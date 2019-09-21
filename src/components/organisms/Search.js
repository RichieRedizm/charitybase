import React, { useState } from 'react'
import Alert from '../atoms/Alert'
import isEmpty from 'lodash/isEmpty'

const Search = ({ searchCharities }) => {
  const [alert, setAlert] = useState({})
  const [charityName, setCharityName] = useState('')
  const [incomeFrom, setIncomeFrom] = useState('')
  const [incomeTo, setincomeTo] = useState('')

  const onChangeName = e => setCharityName(e.target.value)
  const onChangeFrom = e => setIncomeFrom(e.target.value)
  const onChangeTo = e => setincomeTo(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    if (incomeTo === '' || incomeFrom === '') {
      if (charityName === '') {
        setAlert({
          msg:
            'Please enter either a charity or values for income to and from to search!',
          type: 'red'
        })
      } else {
        queryAPI(charityName, -1, 100)
      }
    } else {
      queryAPI('all', incomeFrom, incomeTo)
    }
  }

  const queryAPI = (charityName, incomeFrom, incomeTo) => {
    setAlert({})
    searchCharities(charityName, incomeFrom, incomeTo)
    setCharityName('')
    setIncomeFrom('')
    setincomeTo('')
  }

  return (
    <div>
      <strong>Search charities by their income</strong>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='charity_name'
          placeholder='Charity...'
          value={charityName}
          onChange={onChangeName}
        />
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
      {!isEmpty(alert) && <Alert alert={alert} />}
    </div>
  )
}

export default Search
