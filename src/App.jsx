import Banner from "./components/Banner"
import Navber from "./components/Navber"
import TicektandTask from "./components/TicektandTask"
import Card from "./components/Card"
import { Suspense } from "react"
import TaskStatus from "./components/TaskStatus"

const fetchCard=async()=>{
  const res=await fetch('../public/tickets.json')
    return res.json()
  
}

const cardPromis=fetchCard();

function App() {
 

  return (
    <>
  <Navber></Navber>
  <div className="bg-[#F5F5F5] ">

  <div className="max-w-[1400px] mx-auto">

    <Banner></Banner>

   <TicektandTask></TicektandTask>

  <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
    <Card cardPromis={cardPromis}></Card>
  </Suspense>
  
  </div>
  </div>
    </>
  )
}

export default App
