import { useState } from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OverView from './Pages/OverView'
import Transactions from './Pages/Transactions'
import Scheduledtransactions from './Pages/Scheduled-transactions'
import Accounts from './Pages/Accounts'
import Budgets from './Pages/Budgets'
import Charts from './Pages/Charts'
import Calendar from './Pages/Calendar'
import Creditcards from './Pages/Creditcards'
import Debts from './Pages/Debts'
import Navbar from './Components/NavBar'


function App() {

  const [selectedTitle, setselectedTitle] = useState(
    {
      selectedID:"OverView",
    }
  )
  const[ btnSlate, setbtnSlate] = useState(true);
  
  function handleSelect(text){
    setselectedTitle((prev)=>{
      return{
        ...prev,
        selectedID:text,
      }
    })
  
  }

  function handleBtn(){
    if (btnSlate === true) {
      setbtnSlate(false)
    }else{
      setbtnSlate(true)
    }
    
  }
  
  return (
    
  <BrowserRouter>
  <main className='h-screen flex'>
    {btnSlate ? <nav className='lg:w-1/5 h-screen bg-[#323031] w-9/12 lg:static fixed z-50 overflow-y-auto'> <SideBar onbtnClick={handleBtn} onselect={handleSelect} selectedBarBtn={selectedTitle.selectedID} />  </nav>: undefined}
    <main className='flex flex-col w-full'>
    <Navbar Header={selectedTitle} onbtnClick={handleBtn} />
      <Routes>
        <Route path="/" element={<OverView/>} />
        <Route path="/Transactions" element={<Transactions/>} />
        <Route path="/Scheduledtransactions" element={<Scheduledtransactions />} />
        <Route path="/Accounts" element={<Accounts/>} />
        <Route path="/Budgets" element={<Budgets/>} />
        <Route path="/Charts" element={<Charts/>} />
        <Route path="/Calendar" element={<Calendar/>} />
        <Route path="/Debts" element={<Debts/>} />
        <Route path="/Creditcards" element={<Creditcards/>} />
      </Routes>
      </main>
  </main>
  </BrowserRouter>
  )
}

export default App
