import { Routes, Route } from "react-router-dom";

// Pages

import Home from "../src/pages/Home";
import SignIn from "../src/pages/SignInPage";
import SignUp from "../src/pages/SignUpPage";

// Components
import Container from "./Components/Container";


const App = () => {
  return (
    <Container>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
    </Routes>
    </Container>
  
   
  );
};

export default App;
