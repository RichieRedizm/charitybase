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
  const grantsAwarded = grants.map((grant, index) => {
    totalAmount += grant.amountAwarded
    return (
      <div key={`grant-item-${index}`}>
        <strong className='label-light'>
          {grant.fundingOrganization[0].name}:{' '}
        </strong>
        £{grant.amountAwarded}
      </div>
    )
  })
  return (
    <div>
      <strong className='label-dark'>Grants Awarded: </strong>
      {grantsAwarded}
      <strong className='label-dark'>Total Grant: </strong>£
      {Math.round(totalAmount)}
    </div>
  )
}

export default Grants
