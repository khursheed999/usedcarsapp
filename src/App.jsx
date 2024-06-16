import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Layout from './Components/UI/Layout';
import Sell from './Pages/Sell';
import Buy from './Pages/Buy';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.css';
import LogOut from './Pages/LogOut';
import Protected from './Components/Protected';
import ContextStore, { Store } from './DataStore/ContextStore';
import DownloadData from './Components/DownloadData';
import DownloadImges from './Components/DownloadImges';
import UploadData from './Components/UploadData';
import UploadImges from './Components/UploadImges';


function App() {
  return (
    <Store>
      <div className='app'>


        <Router>
          <Layout />
          <div className='container'>
            <Routes>
              <Route path='/Login' element={<Login />} />
              <Route path='/' element={<Protected Component={Home} />} />
              <Route path='/Sell' element={<Protected Component={Sell} />} />
              <Route path='/Buy' element={<Protected Component={Buy} />} />
              <Route path='/LogOut' element={<LogOut />} />
            </Routes>
          </div>
        </Router>
      </div>

      <UploadImges />
      <UploadData />
      <DownloadData />
      <DownloadImges />


    </Store>
  )
}

export default App
