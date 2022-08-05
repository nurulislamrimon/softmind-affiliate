import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Statement from './Pages/Statement/Statement';
import Payments from './Pages/Payments/Payments';
import Expenses from './Pages/Expenses/Expenses';
import Deposit from './Pages/Deposit/Deposit';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import ReqAuth from './Utilities/ReqAuth';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<ReqAuth><Home /></ReqAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/deposit' element={<ReqAuth><Deposit /></ReqAuth>}></Route>
        <Route path='/statement' element={<ReqAuth><Statement /></ReqAuth>}></Route>
        <Route path='/payments' element={<ReqAuth><Payments /></ReqAuth>}></Route>
        <Route path='/expenses' element={<ReqAuth><Expenses /></ReqAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
