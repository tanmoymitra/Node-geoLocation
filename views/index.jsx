var React = require('react');
var Layout = require('./layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>This is a simple example of React with Express, how to get the browser's Geo Location</p>
        <table class="tg">
          <tbody>
          <tr>
            <td class="tg-yw4l"><strong>Public IP</strong></td>
            <td class="tg-yw4l">{this.props.ip}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">Country</td>
            <td class="tg-yw4l">{this.props.country}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">Country Code</td>
            <td class="tg-yw4l">{this.props.countryCode}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">Latitude</td>
            <td class="tg-yw4l">{this.props.lat}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">Longitude</td>
            <td class="tg-yw4l">{this.props.lng}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">State</td>
            <td class="tg-yw4l">{this.props.state}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">City</td>
            <td class="tg-yw4l">{this.props.city}</td>
          </tr>
          <tr>
            <td class="tg-yw4l">Zip Code</td>
            <td class="tg-yw4l">{this.props.zip}</td>
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