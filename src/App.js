import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navigation from "./component/navbar";
import Token from './component/token';
import Adhar from './component/adhar';


function App() {
  return (
    <>

      <BrowserRouter basename="adharapi">
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Adhar />} />
          <Route path='/token' element={<Token />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;