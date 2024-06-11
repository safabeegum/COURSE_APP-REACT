
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/view' element={<View/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
