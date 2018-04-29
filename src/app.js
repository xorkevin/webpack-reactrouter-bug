import {h, Component} from 'preact';
import {Switch, Route, Redirect, Link, withRouter} from 'react-router-dom';

const Hello = () => {
  return <div>Hello</div>;
};

const World = () => {
  return <div>World</div>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Hello</Link>
        <Link to="/world">World</Link>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route path="/world" component={World} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
