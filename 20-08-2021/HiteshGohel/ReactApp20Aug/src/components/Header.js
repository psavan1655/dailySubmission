import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav
      className='navbar navbar-dark bg-primary'
      style={{ backgroundColor: '#232324' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{ flexGrow: 1 }}
          onClick={() => {
            window.localStorage.removeItem('loginInfo')
            window.alert('Logout completed')
          }}
        >
          <Link to='/'>
            <img
              src='https://previews.123rf.com/images/martialred/martialred1806/martialred180600033/105980434-hospital-sign-with-the-letter-h-icon-flat-vector-icon-for-apps-and-websites.jpg'
              width='50px'
              alt='logo'
              style={{ margin: '1rem' }}
            />
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          <h4 style={{ marginRight: '25px' }}>
            <Link className='link-class' to='/'>
              Home
            </Link>
          </h4>
          <h4 style={{ marginRight: '25px' }}>
            <Link className='link-class' to='/login'>
              {window.localStorage.getItem('loginInfo')
                ? 'Create New'
                : 'Login'}
            </Link>
          </h4>
          <h4 style={{ marginRight: '25px' }}>
            <Link className='link-class' to='/contact-us'>
              Contact Us
            </Link>
          </h4>
        </div>
      </div>
    </nav>
  )
}

export default Header
