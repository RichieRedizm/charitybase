import React, { Fragment } from 'react'

const Finances = ({ finances }) => {
  let totalIncome = 0
  let totalSpending = 0
  finances.map(finance => {
    totalIncome += finance.income
    totalSpending += finance.spending
  })

  return (
    <Fragment>
      <div>
        <strong className='label-light'>Latest Income: </strong>£
        {finances[0].income}
      </div>
      <div>
        <strong className='label-light'>Latest Spending: </strong>£
        {finances[0].spending}
      </div>
      <div>
        <strong className='label-light'>Total Income: </strong>£{totalIncome}
      </div>
      <div>
        <strong className='label-light'>Total Spending: </strong>£
        {totalSpending}
      </div>
    </Fragment>
  )
}

export default Finances
