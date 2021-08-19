const React = require('react')
class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    })
  }
  render() {
    return (
      <>
        <div>
          <input type="file" onChange={this.handleChange} />
          <img alt="" src={this.state.file} />
        </div>

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
      </>
    )
  }
}
export default Upload
