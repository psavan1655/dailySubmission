import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()

  const [user, setUser] = useState({
    Email: '',
    Password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const userInfo = {
    email: 'herry@gmail.com',
    password: '123456'
  }

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
    setError({})
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (!user.Email || !user.Password) {
      if (!user.Email) {
        setError({ ...error, email: 'Email Field is Required' })
      } else if (!user.Password) {
        setError({ ...error, password: 'Password Field is Required' })
      }
    } else if (
      user.Email === userInfo.email &&
      user.Password === userInfo.password
    ) {
      if (
        user.Email === userInfo.email &&
        user.Password === userInfo.password
      ) {
        window.alert('Authentication Successful')
        window.localStorage.setItem('loginInfo', JSON.stringify(userInfo))
        history.push('/')
      }
    } else {
      window.alert('Wrong UserName or Password')
      setError({ email: 'Invalid Email **', password: 'Invalid Password **' })
    }
  }

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <div className='container-fluid fullform'>
          {/* eslint multiline-ternary: ["error", "never"] */}
          <div className='row form'>
            <div className='col-lg-4 col-md-3' />
            <div className='col-lg-4 col-md-6 form-border'>
              <h1 className='text-center'>Login Here</h1>
              <hr />

              <div>
                <label className='form-label'>Email :</label>
                <input
                  type='text'
                  className='form-input'
                  name='Email'
                  value={user.Email}
                  placeholder='  Enter Email'
                  onChange={handleChange}
                />
                {error.email ? (
                  <div style={{ color: 'red', fontSize: '11px' }}>
                    {error.email}
                  </div>
                ) : (
                  ''
                )}
              </div>

              <div>
                <label className='form-label'>Password :</label>
                <input
                  type='password'
                  className='form-input'
                  name='Password'
                  value={user.Password}
                  placeholder='  Enter Password'
                  onChange={handleChange}
                />
                {error.password ? (
                  <div style={{ color: 'red', fontSize: '11px' }}>
                    {error.password}
                  </div>
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
    </>
  )
}

export default LoginPage
