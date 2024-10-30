import './App.scss';

import "./assets/fonts/Quicksand-Regular.ttf";

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
