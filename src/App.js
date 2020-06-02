import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Loader from './component/Loader'
import Tab  from'./pages/CountryTabs'
import NorthCyprus  from'./pages/northcyprus'
import SouthCyprus  from'./pages/southcyprus'
import NotFound  from'./pages/NotFound'
import WorldTab  from './pages/WorldTab'
import Tabs  from './pages/GlobalTabs'
import Test  from './pages/test'
import Updates from './pages/Updates'
import Help  from './pages/Help'
import About  from './pages/About'
import SampleMap from './pages/SampleMap'

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<Loader/>}> */}
    <Switch>
         <Route path="/" exact  component={Tab}/>
         <Route path="/northcyprus" exact  component={NorthCyprus}/>
         <Route path="/southcyprus" exact  component={SouthCyprus}/>
         <Route path="/test" exact  component={Test}/>
         <Route path="/analytics" exact component={Tabs}/>
         <Route path="/world" exact  component={WorldTab}/>
         <Route path="/help" exact  component={Help}/>
         <Route path="/about" exact  component={About}/>
         <Route path="/updates" exact component={Updates}/>
         <Route path="*" component={NotFound}/>
     </Switch>
     {/* </Suspense> */}
 </Router>
  );
}

export default App;
