const Thing = React.createClass({
  render: function() {
    return <h1>This works!</h1>;
  }
});

ReactDOM.render(<Thing />, document.getElementById('app'));