import React from 'react'

const Finances = ({ finances }) => {
  return finances.map((item, index) => (
    <div key={`finance-${index}`}>
      <div>
        <strong className='label-light'>Income: </strong>£{item.income}
      </div>
      <div>
        <strong className='label-light'>Spending: </strong>£{item.spending}
      </div>
    </div>
  ))
}

export default Finances
