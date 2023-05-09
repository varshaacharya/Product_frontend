import React from 'react';
import Loginpage from './Loginpage';
import { Routes,Route } from 'react-router-dom'; 
import Dashboard from './Components/Dashboard';
import Table1 from './Components/Table';
import Dailog from './Components/Dailog';
// import Checklist from './Checklist';

const MainRoutes = () => {
    return (
        <div className="App">
        <Routes> 
          <Route path='/Login' element={<Loginpage/>}/>
             {/* <Route element={<ProtectedRoutes />}> */}
          <Route path='/Dashboard' element={<Dashboard/>} /> 
          {/* </Route> */}
        </Routes>
        {/* <Checklist/> */}
        </div>
    );
}

export default MainRoutes;