import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <table
        className="table table-bordered"
        style={{ margin: '0 2rem', width: '95%' }}
      >
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
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const Example = () => {
  const ComponentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => ComponentRef.current,
  })
  return (
    <>
      <ComponentToPrint ref={ComponentRef} />
      <button
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '5px 25px',
        }}
        onClick={() => {
          handlePrint()
          alert('Okay')
        }}
      >
        Print
      </button>
    </>
  )
}

export default Example
