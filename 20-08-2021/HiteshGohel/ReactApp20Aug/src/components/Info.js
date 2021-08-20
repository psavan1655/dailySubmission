// @ts-nocheck
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React from 'react'
// import { useHistory } from 'react-router-dom'

const Info = props => {
  //   useEffect(() => {
  //     console.log('ok1')
  //     const checkPropValue = () => {
  //       if (props.location.value === undefined) {
  //         history.push('/')
  //       }
  //     }
  //     checkPropValue()
  //   })

  const {
    contact,
    country,
    email,
    fname,
    gender,
    hobbies,
    intro,
    lname,
    pincode,
    profilePic,
    state
  } = props.location.state

  const generatePDF = () => {
    const input = document.getElementById('tableToPrint')
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF()
      pdf.addImage(imgData, 'JPEG', 10, 20)
      pdf.save('userInfo.pdf')
    })
  }

  console.log('Prop Data of Info Comp :', props)
  return (
    <>
      <div
        style={{ margin: '2rem', display: 'flex', justifyContent: 'center' }}
      >
        <table
          id='tableToPrint'
          className='table table-bordered table-hover display-table'
          style={{ padding: '1rem' }}
        >
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Profile Picture :</td>
              <td>
                {profilePic.map((pics, i) => (
                  <img
                    src={pics}
                    key={i}
                    alt='okay'
                    height='75'
                    width='75'
                    style={{ borderRadius: '50%', marginLeft: '5px' }}
                  />
                ))}
              </td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>First Name:</td>
              <td>
                <span className='showText'>{fname}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Last Name :</td>
              <td>
                <span className='showText'>{lname}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>Intro :</td>
              <td>
                <span className='showText'>{intro}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>5</th>
              <td>Gender :</td>
              <td>
                <span className='showText'>{gender}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>6</th>
              <td>Hobbies :</td>
              <td>
                {/* <span className="showText">{hobbies}</span> */}
                {hobbies.map((hobbie, i) => (
                  <span
                    key={i}
                    className='showText'
                    style={{ marginRight: '5px' }}
                  >
                    {hobbie},
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <th scope='row'>7</th>
              <td>State :</td>
              <td>
                <span className='showText'>{state}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>8</th>
              <td>Country :</td>
              <td>
                <span className='showText'>{country}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>9</th>
              <td>Pincode :</td>
              <td>
                <span className='showText'>{pincode}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>10</th>
              <td>Email :</td>
              <td>
                <span className='showText'>{email}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>11</th>
              <td>Contact :</td>
              <td>
                <span className='showText'>{contact}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='text-center' id='pdf'>
        <button type='button' className='btn btn-success' onClick={generatePDF}>
          Convert to PDF
        </button>
      </div>
    </>
  )
}

export default Info
