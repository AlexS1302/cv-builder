//import { useState } from 'react'
import './styles/App.css';
import Header from './components/Header';
import CVForm from './components/CVForm';
import Preview from './components/Preview';

function App() {

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <CVForm />
        <Preview />
      </main>
    </div>
  );
}

export default App;
