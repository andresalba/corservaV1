import './App.css'
import Step1 from './Pages/Step1' 
import { Route, Routes } from 'react-router-dom'
import Step2 from './Pages/Step2'
import Step3 from './Pages/Step3'
import Step4 from './Pages/Step4'
import Step5 from './Pages/Step5'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Step1 />}/>
        <Route path="step2" element={<Step2/>}/>
        <Route path="step3" element={<Step3/>}/>
        <Route path="step4" element={<Step4/>}/>
        <Route path="step5" element={<Step5/>}/>
      </Routes>
    </>
  )
}

export default App
