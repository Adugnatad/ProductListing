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
  const [showPage, setShowPage] = useState(0);
  const showPages = () => {
    if (showPage >= 6) {
      setShowPage(0)
    } else {
      setShowPage(showPage + 1);
    }
  }
  return (
    <>
      {showPage !== 0 && showPage !== 5 && <Header />}
      {showPage === 3 && <AIGeneration generation={true} />}
      {showPage === 4 && <AIGeneration generation={false} />}
      {showPage === 2 && <TableListing />}
      {showPage === 1 && <Account />}
      {showPage === 6 && <Upgrade />}
      {showPage === 0 && <Login />}
      {showPage === 5 && <Signup />}
      <button onClick={showPages}>Next</button>
    </>
  )
}

export default App;
