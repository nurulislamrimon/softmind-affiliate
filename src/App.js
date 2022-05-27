import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Utilities/Header/Header';
import Footer from './Utilities/Footer/Footer';
import Distribution from './Pages/Distribution/Distribution';
import User from './Pages/User/User';
import SetTitle from './Utilities/SetTItle/SetTitle';
import Payments from './Pages/Payments/Payments';
import Expenses from './Pages/Expenses/Expenses';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='/Home' element={
          <Home></Home>}></Route>
        <Route path='/payments' element={
          <Payments></Payments>}></Route>
        <Route path='/expenses' element={
          <Expenses></Expenses>}></Route>
        <Route path='/distribution' element={
          <Distribution></Distribution>}></Route>
        <Route path='/user/:id' element={
          <User></User>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
