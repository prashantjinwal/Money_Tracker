// import { useState } from 'react'
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

  // const [SelectedNav, SetSelectedNav] = useState({
  //   selectedID: undefined,

  // })


  return (
  <BrowserRouter>
  <main className='h-screen flex '>
    <SideBar/>
    <main className='flex flex-col w-full'>
    <Navbar/>
      <Routes>
        <Route path="/OverView" element={<OverView/>} />
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
