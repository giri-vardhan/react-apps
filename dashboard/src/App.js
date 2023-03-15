import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { API, Endpoint, StatusCodes} from './pages/APIs';
import Accordion from './components/Accordion';
import Layout from './pages/Layout';
import Home from './pages/Home';


function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" exact component={<Layout />}>
          <Route index exact component={<Home />} />
          
          <Route path='overview' exact component={<Overview/>} />
          <Route path='apis' exact component={<API/>} >
            <Route path='endpoint' exact component={<Endpoint/>} />
            <Route path='statuscodes' exact component={<StatusCodes/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
    <Accordion>
      <p>this is collapsible</p>
    </Accordion>
  </>
  );
}

export default App;
