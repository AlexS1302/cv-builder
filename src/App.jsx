//import { useState } from 'react'
import './styles/App.css';
import Header from './components/Header';
import CVForm from './components/CVForm';
import Preview from './components/Preview';

function App() {

  return (
    <div className='App'>
      <Header />
      <CVForm />
      <Preview />
    </div>
  );
}

export default App;
