// @ts-nocheck
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Home from './HomePage'

const Register = () => {
  const history = useHistory()
  const [forms, setForms] = useState([])
  const [formFields, setFormFields] = useState({
    fname: '',
    lname: '',
    intro: '',
    gender: '',
    hobbies: [],
    country: '',
    state: '',
    pincode: '',
    email: '',
    contact: '',
    profilePic: {}
  })

  const [error, setError] = useState({
    fname: '',
    lname: '',
    intro: '',
    gender: '',
    hobbies: '',
    country: '',
    state: '',
    pincode: '',
    email: '',
    contact: '',
    profilePic: ''
  })

  const [textAreaValue, setTextAreaValue] = useState('')
  const [btnOff, setBtnOff] = useState(true)

  const validation = (name, value) => {
    if (value === '') {
      setError({
        [name]: `${name} is required and cannot be empty`
      })
    } else {
      setError({ [name]: '' })
    }
  }

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    validation(name, value)
    setFormFields({ ...formFields, [name]: value })

    if (name === 'profilePic') {
      if (e.target.files) {
        const fileArray = Array.from(e.target.files).map(file =>
          URL.createObjectURL(file)
        )
        console.log('fileArray :', fileArray)
        setFormFields({ ...formFields, profilePic: fileArray })
      }
      // let picture = e.target.files[0]
      // console.log('File :', e.target.files)
      // let file_size = e.target.files[0].size
      // console.log('Size:', file_size)
      // if (file_size > 5120000) {
      //   setError({ profilePic: 'File size should be less then 5Mb **' })
      // } else {
      //   setError({ profilePic: '' })
      //   setFormFields({ ...formFields, profilePic: picture })
      // }
    }
  }

  const handleBlur = data => {
    const name = data.target.name
    const value = data.target.value

    if (name === 'email') {
      // eslint-disable-next-line
      let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      const email = value
      if (!email.match(mailFormat)) {
        setError({ email: 'Please enter valid email **' })
      }
    }

    if (name === 'contact') {
      const num = value.length
      if (num < 10) {
        setError({ contact: 'Number should be 10 digits **' })
      }
    }
  }

  //   const getLocalItems = () => {
  //     let list = localStorage.getItem('recode')
  //     if (list) {
  //       return JSON.parse(list)
  //     } else {
  //       return []
  //     }
  //   }

  const handleSubmit = data => {
    data.preventDefault()
    if (
      !formFields.fname ||
      !formFields.lname ||
      !formFields.intro ||
      !formFields.gender ||
      !formFields.hobbies ||
      formFields.hobbies.length < 1 ||
      !formFields.country ||
      !formFields.state ||
      !formFields.pincode ||
      !formFields.email ||
      !formFields.contact ||
      formFields.contact.length < 10 ||
      !formFields.profilePic
    ) {
      if (!formFields.fname) {
        setError({
          fname: 'This Field is Required **'
        })
      } else if (!formFields.lname) {
        setError({
          lname: 'This Field is Required **'
        })
      } else if (!formFields.intro) {
        setError({
          intro: 'This Field is Required **'
        })
      } else if (!formFields.gender) {
        setError({
          gender: 'This Field is Required **'
        })
      } else if (!formFields.hobbies || formFields.hobbies.length < 1) {
        setError({
          hobbies: 'This Field is Required **'
        })
      } else if (!formFields.country) {
        setError({
          country: 'This Field is Required **'
        })
      } else if (!formFields.state) {
        setError({
          state: 'This Field is Required **'
        })
      } else if (!formFields.pincode) {
        setError({
          pincode: 'This Field is Required **'
        })
      } else if (!formFields.email) {
        setError({
          email: 'This Field is Required **'
        })
      } else if (!formFields.contact) {
        setError({
          contact: 'This Field is Required **'
        })
      } else if (formFields.contact.length < 10) {
        setError({
          contact: 'Contact Number should be at least 10 Characters **'
        })
      } else if (!formFields.profilePic) {
        setError({ profilePic: 'This Field is Required **' })
      }
    } else {
      const updatedForm = {
        ...formFields,
        id: new Date().getTime().toString()
      }
      setForms([...forms, updatedForm])
      window.localStorage.setItem('Forms', JSON.stringify(forms))
      document.getElementById('myForm').reset()
      //   document.getElementById('pdf').style.display = 'block'
      setFormFields({ hobbies: [], profilePic: {} })
      history.push({ pathname: '/info', state: formFields })
    }
  }

  //   const generatePDF = () => {
  //     alert('Okay')
  //   }

  console.log('FormFields :', formFields)
  console.log('Forms :', forms)
  window.localStorage.setItem('Forms', JSON.stringify(forms))

  return (
    <>
      <div className='container register-container'>
        <form id='myForm' className='form-container' onSubmit={handleSubmit}>
          <div className='form-row'>
            {/* first Name */}
            <div className='form-group col-md-6'>
              <label htmlFor='inputEmail4'>First Name :</label>
              <input
                type='text'
                className='form-control'
                placeholder='First Name'
                name='fname'
                onChange={e => handleChange(e)}
              />
              <div className='error-text'>{error.fname}</div>
            </div>

            {/* Last Name */}
            <div className='form-group col-md-6'>
              <label htmlFor='inputEmail4'>Last Name :</label>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                name='lname'
                onChange={e => handleChange(e)}
              />
              <div className='error-text'>{error.lname}</div>
            </div>

            {/* introduction */}
            <div className='form-group col-md-12'>
              <label htmlFor='inputAddress'>Introduction :</label>
              <textarea
                className='form-control is-invalid'
                id='validationTextarea'
                placeholder='Introduction'
                name='intro'
                onChange={e => handleChange(e)}
                onBlur={e => {
                  if (
                    e.target.value.length <= 100 &&
                    e.target.value.length > 0
                  ) {
                    setTextAreaValue(
                      'Introduction should be greater than 100 **'
                    )
                  } else {
                    setTextAreaValue('')
                  }
                }}
              />
              <div className='error-text'>{error.intro}</div>
              {textAreaValue && (
                <span style={{ fontSize: '11px', color: 'red' }}>
                  {textAreaValue}
                </span>
              )}
            </div>

            {/* Radio Buttons */}
            <div
              className='radio-container form-group col-md-6'
              name='gender'
              onChange={e => handleChange(e)}
            >
              <div className='form-check'>
                <label
                  className='form-check-label radio-label'
                  htmlFor='inlineRadio1'
                >
                  Male :
                </label>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  value='male'
                />
              </div>
              <div className='form-check'>
                <label
                  className='form-check-label radio-label'
                  htmlFor='inlineRadio2'
                >
                  Female :
                </label>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  value='female'
                />
              </div>
              <div className='form-check'>
                <label
                  className='form-check-label radio-label'
                  htmlFor='inlineRadio3'
                >
                  Other :
                </label>
                <input
                  className='form-check-input'
                  type='radio'
                  name='gender'
                  value='other'
                />
              </div>
              <div className='error-text'>{error.gender}</div>
            </div>

            {/* Multi-select Dropdown */}
            <div className='form-group col-md-6'>
              <div className='dropdown cq-dropdown' data-name='statuses'>
                <button
                  className='btn-block form-control dropdown-toggle'
                  type='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='true'
                >
                  Hobbies
                  <span className='caret' />
                </button>

                <ul
                  className='dropdown-menu w-100'
                  aria-labelledby='btndropdown'
                  name='hobbies'
                  // onChange={(e) => handleChange(e)}
                  onClick={e => {
                    console.log('e.target.checked :', e.target.checked)
                    let value
                    if (e.target.checked) {
                      console.log('Checked value :', e.target.value)
                      value = e.target.value
                      formFields.hobbies.push(value)
                    } else if (e.target.checked === false) {
                      console.log('Checked value :', e.target.value)
                      value = e.target.value
                      formFields.hobbies.pop(value)
                    }
                  }}
                >
                  <li>
                    <label className='radio-btn checkbox-text'>
                      <input type='checkbox' name='hobbies' value='Singing' />
                      Singing
                    </label>
                  </li>

                  <li>
                    <label className='radio-btn checkbox-text'>
                      <input type='checkbox' name='hobbies' value='Reading' />
                      Reading
                    </label>
                  </li>

                  <li>
                    <label className='radio-btn checkbox-text'>
                      <input type='checkbox' name='hobbies' value='Dancing' />
                      Dancing
                    </label>
                  </li>
                </ul>
              </div>

              <div className='error-text'>{error.hobbies}</div>
            </div>

            {/* email */}
            <div className='form-group col-md-6'>
              <label htmlFor='inputEmail4'>Email :</label>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                name='email'
                onChange={e => handleChange(e)}
                onBlur={e => handleBlur(e)}
              />
              <div className='error-text'>{error.email}</div>
            </div>

            {/* contact */}
            <div className='form-group col-md-6'>
              <label htmlFor='inputPassword4'>Contact :</label>
              <input
                type='text'
                className='form-control'
                placeholder='Contact Number'
                name='contact'
                maxLength='10'
                onChange={e => handleChange(e)}
                onBlur={e => handleBlur(e)}
              />
              <div className='error-text'>{error.contact}</div>
            </div>
          </div>

          {/* country */}
          <div className='form-row'>
            <div className='form-group col-md-5'>
              <label htmlFor='inputCountry'>Country :</label>
              <select
                className='form-control'
                name='country'
                onChange={e => {
                  handleChange(e)
                  setBtnOff(false)
                }}
              >
                <option value=''>Choose Country...</option>
                <option value='India'>India</option>
                <option value='USA'>USA</option>
              </select>
              <div className='error-text'>{error.country}</div>
            </div>

            {/* States */}
            <div className='form-group col-md-5'>
              <label htmlFor='inputState'>State :</label>
              <select
                className='form-control'
                name='state'
                onChange={e => handleChange(e)}
                disabled={btnOff}
              >
                <option value=''>Choose State...</option>
                <option
                  value={
                    formFields.country === 'India' ? 'Gujarat' : 'California'
                  }
                >
                  {formFields.country === 'India' ? 'Gujarat' : 'California'}
                </option>
                <option
                  value={formFields.country === 'India' ? 'Goa' : 'NewYork'}
                >
                  {formFields.country === 'India' ? 'Goa' : 'NewYork'}
                </option>
              </select>
              <div className='error-text'>{error.state}</div>
            </div>

            {/* pincode */}
            <div className='form-group col-md-2'>
              <label htmlFor='inputZip'>Pincode :</label>
              <input
                type='text'
                className='form-control'
                id='inputZip'
                name='pincode'
                maxLength='6'
                placeholder='pin'
                onChange={e => handleChange(e)}
              />
              <div className='error-text'>{error.pincode}</div>
            </div>
          </div>

          {/* profilePic */}
          <div className='form-group col-md-12'>
            <div className='input-group mb-3'>
              <div className='custom-file'>
                <label htmlFor='profile' className='custom-file-label'>
                  Profile Picture :
                </label>
                <input
                  type='file'
                  multiple
                  accept='image/png, image/jpg, image/jpeg'
                  className='form-control custom-file-input'
                  id='inputGroupFile01'
                  name='profilePic'
                  onChange={e => {
                    handleChange(e)
                  }}
                />
              </div>
            </div>
            <div className='error-text'>{error.profilePic}</div>
          </div>

          {/* submit btn */}
          <div className='form-group col-md-12'>
            <button type='submit' className='btn btn-success btn-block'>
              Submit
            </button>
          </div>

          <div style={{ display: 'none' }}>
            <Home formData={forms} />
          </div>
        </form>
      </div>

      {/* {forms.length ? (
        <>
          <div className="displayData-container">
            {forms.map((item) => {
              const { profilePic, id, hobbies } = item
              return (
                <div key={id}>
                  <table className="table table-bordered table-hover display-table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Profile Picture :</td>
                        <td>
                          {profilePic.map((pics, i) => (
                            <img
                              src={pics}
                              key={i}
                              alt="okay"
                              height="75"
                              width="75"
                              style={{ borderRadius: '50%', marginLeft: '5px' }}
                            />
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>First Name:</td>
                        <td>
                          <span className="showText">{item.fname}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Last Name :</td>
                        <td>
                          <span className="showText">{item.lname}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Intro :</td>
                        <td>
                          <span className="showText">{item.intro}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Gender :</td>
                        <td>
                          <span className="showText">{item.gender}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Hobbies :</td>
                        <td>
                          {hobbies.map((hobbie, i) => (
                            <span
                              key={i}
                              className="showText"
                              style={{ marginRight: '5px' }}
                            >
                              {hobbie},
                            </span>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>State :</td>
                        <td>
                          <span className="showText">{item.state}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>Country :</td>
                        <td>
                          <span className="showText">{item.country}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>Pincode :</td>
                        <td>
                          <span className="showText">{item.pincode}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>Email :</td>
                        <td>
                          <span className="showText">{item.email}</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td>Contact :</td>
                        <td>
                          <span className="showText">{item.contact}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        ''
      )} */}

      {/* <div className="text-center pdf-btn-div" id="pdf">
        <button type="button" className="btn btn-success" onClick={generatePDF}>
          Convert to PDF
        </button>
      </div> */}
    </>
  )
}

export default Register
