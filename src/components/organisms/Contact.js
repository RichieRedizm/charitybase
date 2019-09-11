import React, { Fragment } from 'react'
import Address from './Address'

const Contact = ({ contact }) => {
  const { email, address, postcode } = contact
  return (
    <Fragment>
      {email && (
        <div>
          <strong className='label-dark'>Email: </strong>
          {email}
        </div>
      )}
      <Address address={address} postcode={postcode} />
    </Fragment>
  )
}

export default Contact
