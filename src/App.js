import "./App.css";
import Signup from "./pages/Signup.page";
import Login from "./pages/Login.page";
import Header from "./components/Header/Header";
import AIGeneration from "./components/AIGeneration/AIGeneration";
import TableListing from "./components/TableListing/TableListing";
import Account from "./components/Account/Account";
import Upgrade from "./components/Ugrade/Upgrade";
import { useState } from "react";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Footer from "./components/Footer/Footer";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showPage, setShowPage] = useState(0);
  const showPages = () => {
    if (showPage >= 7) {
      setShowPage(0);
    } else {
      setShowPage(showPage + 1);
    }
  };
  return (
    // <Box minH="100vh" display="flex" flexDirection="column" >
    //   {showPage !== 0 && showPage !== 2 && showPage !== 7 && <Header />}
    //   {showPage === 4 && <AIGeneration generation={true} />}
    //   {showPage === 3 && <AIGeneration generation={false} />}
    //   {showPage === 1 && <TableListing />}
    //   {showPage === 7 && <ResetPassword />}
    //   {showPage === 5 && <Account />}
    //   {showPage === 6 && <Upgrade />}
    //   {showPage === 0 && <Login />}
    //   {showPage === 2 && <Signup />}
    //   <button onClick={showPages}>Next</button>
    //   {showPage !== 0 && showPage !== 2 && <Footer />}
    // </Box>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/listing" element={<TableListing />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/generate" element={<ResetPassword />} />
        <Route path="/reset" element={<AIGeneration generation={true} />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
