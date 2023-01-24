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
import ResetPassword from './components/ResetPassword/ResetPassword';
import Footer from './components/Footer/Footer';
import { Box } from '@chakra-ui/react';

function App() {
  const [showPage, setShowPage] = useState(0);
  const showPages = () => {
    if (showPage >= 7) {
      setShowPage(0)
    } else {
      setShowPage(showPage + 1);
    }
  }
  return (
    <Box h="100vh">
      {showPage !== 0 && showPage !== 2 && showPage !== 7 && <Header />}
      {showPage === 4 && <AIGeneration generation={true} />}
      {showPage === 3 && <AIGeneration generation={false} />}
      {showPage === 1 && <TableListing />}
      {showPage === 7 && <ResetPassword />}
      {showPage === 0 && <Account />}
      {showPage === 6 && <Upgrade />}
      {showPage === 5 && <Login />}
      {showPage === 2 && <Signup />}
      <button onClick={showPages}>Next</button>
      {showPage !== 0 && showPage !== 2 && showPage !== 7 && <Footer />}
    </Box>
  )
}

export default App;
