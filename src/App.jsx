import { GlobaStyle } from "./globalStyle";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register";
import { Routes,Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";
function App() {
return(
  <>
  <Header/>

  <GlobaStyle />
  <Routes>
    <Route path="/" element={  <Home/>}/>
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </>
)

}

export default App
// const token = false;
// if (token) {
//   return <>
//     <Home />
//     <GlobaStyle />
//   </>
// }
// return <>
// <Register/>
// <Login/>
//   <GlobaStyle />
// </>