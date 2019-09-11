import React, { useState, useContext } from 'react'
import CharityBaseContext from '../../context/charityBase/charityBaseContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const charityBaseContext = useContext(CharityBaseContext)
  const { searchCharities, charities } = charityBaseContext
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
      <form onSubmit={onSubmit} className='form'>
        <input
          type='number'
          name='income_from'
          placeholder='from...'
          value={incomeFrom}
          onChange={onChangeFrom}
        />
        <input
          type='text'
          name='income_to'
          placeholder='to...'
          value={incomeTo}
          onChange={onChangeTo}
        />
        <input type='submit' value='Search' className='btn btn-dark' />
      </form>
      {/* {charities.length > 0 && (
        <button className='btn btn-white btn-block' onClick={clearUsers}>
          Clear
        </button>
      )} */}
    </div>
  )
}

export default Search
