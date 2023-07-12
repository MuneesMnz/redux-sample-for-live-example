
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Rightbar from './Components/Rightbar';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("munees")
  return (
   <Provider store={store} >
    <Navbar name={name} />
    <div className='flex'>
      <Sidebar />
      <Main/>
      <Rightbar/>
    </div>
   </Provider>
  );
}

export default App;
