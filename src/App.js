import Navbar from './Navbar';
import Report from './Report';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import ReportDetails from './ReportDetails';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Report />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/reports/:id">
              <ReportDetails />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
