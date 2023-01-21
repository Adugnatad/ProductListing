import logo from './logo.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import Signup from './pages/Signup.page';
import Login from './pages/Login.page';
import Header from './components/Header/Header';
import AIGeneration from './components/AIGeneration/AIGeneration';
import TableListing from './components/TableListing/TableListing';

function App() {
  // return <Signup />
  // return <Login />
  return (
    <>
      <Header />
      <AIGeneration generation={false} />
      {/* <TableListing /> */}
    </>
  )
}

export default App;
