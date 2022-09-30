import React from 'react';

import { useEffect } from 'react';
import { httpRegisterNewUser, httpAddNewTaskToUsertest } from './httpActions';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {

  let count = 0
  let timeout;

  useEffect(() => {
    async function buildTestData() {
      if(count === 0) {
        await httpRegisterNewUser('Brian', 'Houts', 'bhouts@mail.com', 'bhouts', '12345678?');
        await httpRegisterNewUser('Tucker', 'Houts', 'tuck@mail.com', 'thouts', '11345678?');
        await httpRegisterNewUser('Buddy', 'Houts', 'buddy@mail.com', 'buddyhouts', '22345678?');  
    }
  }
    

    
    buildTestData()
    // timeout = setTimeout(buildDataForOne(), 3000);
    // timeout = setTimeout(buildDataForTwo(), 3000);
    // timeout = setTimeout(buildDataForThree(), 3000);
    count = 1;
  },[])

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

// async function buildDataForOne() {
//   if(count === 0) {
//     await httpAddNewTaskToUsertest(1, 'Get some work done test 1 for user 1');
//     await httpAddNewTaskToUsertest(1, 'Get some work done test 2 for user 1');
//     await httpAddNewTaskToUsertest(1, 'Get some work done test 3 for user 1');
//     await httpAddNewTaskToUsertest(1, 'Get some work done test 4 for user 1');
//     await httpAddNewTaskToUsertest(1, 'Get some work done test 5 for user 1');
//     await httpAddNewTaskToUsertest(1, 'Get some work done test 6 for user 1');
//   }
// }
// async function buildDataForTwo() {
//   if(count === 0) {
//     await httpAddNewTaskToUsertest(2, 'Get some work done test 1 for user 2');
//     await httpAddNewTaskToUsertest(2, 'Get some work done test 2 for user 2');
//     await httpAddNewTaskToUsertest(2, 'Get some work done test 3 for user 2');
//     await httpAddNewTaskToUsertest(2, 'Get some work done test 4 for user 2');
//     await httpAddNewTaskToUsertest(2, 'Get some work done test 5 for user 2');
//     await httpAddNewTaskToUsertest(2, 'Get some work done test 6 for user 2');
//   }
// }
// async function buildDataForThree() {
//   if(count === 0) {
//     await httpAddNewTaskToUsertest(3, 'Get some work done test 1 for user 3');
//     await httpAddNewTaskToUsertest(3, 'Get some work done test 2 for user 3');
//     await httpAddNewTaskToUsertest(3, 'Get some work done test 3 for user 3');
//     await httpAddNewTaskToUsertest(3, 'Get some work done test 4 for user 3');
//     await httpAddNewTaskToUsertest(3, 'Get some work done test 5 for user 3');
//     await httpAddNewTaskToUsertest(3, 'Get some work done test 6 for user 3');
//   }
// }