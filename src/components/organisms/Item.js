import React from 'react'

const Grants = ({ grants }) => {
  if (grants === null) {
    return (
      <div>
        <strong className='label-dark'>No Grant</strong>
      </div>
    )
  }
  let totalAmount = 0
  grants.map(grant => (totalAmount += grant.amountAwarded))
  return (
    <div>
      <strong className='label-dark'>Total Grant: </strong>£
      {Math.round(totalAmount)}
    </div>
  )
}

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

const Item = ({ charity: { names, grants, finances } }) => {
  return (
    <div className='card grid-item'>
      <div>
        <h4>{names[0].value}</h4>
      </div>
      <div>
        <strong className='label-dark'>Finances:</strong>
        <Finances finances={finances} />
      </div>
      <Grants grants={grants} />
    </div>
  )
}

export default Item
