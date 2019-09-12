import React from 'react'

const Address = ({ address, postcode }) => {
  return (
    <div className='address-wrap'>
      <strong className='label-dark'>Address:</strong>
      <br />
      {address.map((item, index) => (
        <div key={`address-${index}`}>{item},</div>
      ))}
      <div>{postcode}</div>
    </div>
  )
}

export default Address
