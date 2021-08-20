import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ContactUs = () => {
  const history = useHistory()
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    description: ''
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    description: ''
  })
  const handleChange = data => {
    const name = data.target.name
    const value = data.target.value
    setContactData({ ...contactData, [name]: value })
    setError({})
  }
  const handleSubmit = data => {
    data.preventDefault()
    if (!contactData.name || !contactData.email || !contactData.description) {
      if (!contactData.name) {
        setError({ ...error, name: 'Name Fields is Required **' })
      } else if (!contactData.email) {
        setError({ ...error, email: 'Email Fields is Required **' })
      } else if (!contactData.description) {
        setError({ ...error, description: 'Description Fields is Required **' })
      }
    } else {
      setContactData({ ...contactData })
      console.log('ContactUs :', contactData)
      history.push({ pathname: '/', state: contactData })
    }
  }

  return (
    <div>
      {/* eslint multiline-ternary: ["error", "never"] */}
      <form onSubmit={handleSubmit}>
        <div className='container-fluid fullform'>
          <div className='row form'>
            <div className='col-lg-4 col-md-3' />
            <div className='col-lg-4 col-md-6 form-border'>
              <h1 className='text-center'>Contact Us</h1>
              <hr />

              <div>
                <label className='form-label'>Name :</label>
                <input
                  type='text'
                  className='form-input'
                  name='name'
                  placeholder='  Enter Name'
                  onChange={e => handleChange(e)}
                />
                {error.name ? (
                  <div className='contact-error'>{error.name}</div>
                ) : (
                  ''
                )}
              </div>

              <div>
                <label className='form-label'>Email :</label>
                <input
                  type='email'
                  className='form-input'
                  name='email'
                  placeholder='  Enter Email'
                  onChange={e => handleChange(e)}
                />
                {error.email ? (
                  <div className='contact-error'>{error.email}</div>
                ) : (
                  ''
                )}
              </div>

              <div>
                <label className='form-label'>Description :</label>
                <textarea
                  className='form-control'
                  placeholder='Enter Description'
                  name='description'
                  aria-label='With textarea'
                  onChange={e => handleChange(e)}
                  style={{ textAlign: 'inherit' }}
                />
                {error.description ? (
                  <div className='contact-error'>{error.description}</div>
                ) : (
                  ''
                )}
              </div>

              <button className='btn btn-success submit-btn'>Submit</button>
              <h6 className='text-center'>
                Don't have an account?{' '}
                <a style={{ color: 'lightgreen' }} href='./Register'>
                  Sign Up
                </a>
              </h6>
            </div>
            <div className='col-lg-4 col-md-3' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
