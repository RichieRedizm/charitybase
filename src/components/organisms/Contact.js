import React, { Fragment } from 'react'
import Address from './Address'

const Contact = ({ contact }) => {
  const { email, address, postcode } = contact
  console.log('address', address)
  return (
    <Fragment>
      {email && (
        <div>
          <strong className='label-dark'>Email: </strong>
          {email}
        </div>
      )}
      {address.length > 0 && <Address address={address} postcode={postcode} />}
    </Fragment>
  )
}

export default Contact
