var React = require('react');
var Layout = require('./layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>This is a simple example of React with Express, how to get the browser's Geo Location</p>
        <table>
          <tbody>
          <tr>
            <td>Public IP</td>
            <td>{this.props.ip}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{this.props.country}</td>
          </tr>
          <tr>
            <td>Country Code</td>
            <td>{this.props.countryCode}</td>
          </tr>
          <tr>
            <td>Latitude</td>
            <td>{this.props.lat}</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{this.props.lng}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{this.props.state}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{this.props.city}</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td>{this.props.zip}</td>
          </tr>
          </tbody>
        </table>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: React.PropTypes.string
};

module.exports = Index;