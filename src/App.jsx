import { useState } from 'react'
import './styles/App.css';
import Header from './components/Header';
import CVForm from './components/CVForm';
import Preview from './components/Preview';
import { PDFViewer } from '@react-pdf/renderer';

function App() {

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phoneNumber: '',
    location: '',
  });
  
  const handleChange = (e, setSection) => {
    const { name, value } = e.target;
    setSection((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <CVForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        handleChange={handleChange}
        />
        <div>
          <PDFViewer style={{ width: '100%', height: '100%' }}>
            <Preview />
          </PDFViewer>
        </div>
      </main>
    </div>
  );
}

export default App;
