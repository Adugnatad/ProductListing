import logo from './logo.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import Signup from './pages/Signup.page';
import Login from './pages/Login.page';
import Header from './components/Header/Header';
import AIGeneration from './components/AIGeneration/AIGeneration';
import TableListing from './components/TableListing/TableListing';
import Account from './components/Account/Account';
import Upgrade from './components/Ugrade/Upgrade';
import { useState } from 'react';

function App() {
  // return <Signup />
  // return <Login />
  const [showPage, setShowPage] = useState(0);
  const showPages = () => {
    if (showPage >= 4) {
      setShowPage(0)
    } else {
      setShowPage(showPage + 1);
    }
  }
  return (
    <>
      <Header />
      {/* <AIGeneration generation={false} /> */}
      {showPage === 0 && <TableListing />}
      {showPage === 1 && <Account />}
      {showPage === 2 && <Upgrade />}
      {showPage === 3 && <Login />}
      {showPage === 4 && <Signup />}
      <button onClick={showPages}>Next</button>
    </>
  )
}

export default App;
