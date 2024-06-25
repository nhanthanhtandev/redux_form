import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DemoUseState from './hooks/DemoUseState'
import DemoForm from './form/DemoForm'
import AddStudentForm from './form/AddStudentForm'
import StudentList from './form/StudentList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='container my-10'>
        {/* <DemoUseState message="Hello"></DemoUseState> */}
        {/* <DemoForm></DemoForm> */}
        <h1 className='text-center my-10'></h1>
        <div>
          <AddStudentForm />
          <StudentList />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

