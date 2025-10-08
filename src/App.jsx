import Banner from "./components/Banner"
import Navber from "./components/Navber"
import TicektandTask from "./components/TicektandTask"
import Card from "./components/Card"
import { Suspense, useState } from "react"
import TaskStatus from "./components/TaskStatus"
 
  import { ToastContainer } from 'react-toastify';

const fetchCard=async()=>{
  const res=await fetch('../public/tickets.json')
    return res.json()
  
}

const cardPromis=fetchCard();



function App() {

  const [selectedCard,setselectedCard]=useState([]);

console.log(selectedCard);

const [inProgress,setinProgress]=useState(0);
 

  return (
    <>
  <Navber></Navber>
  <div className="bg-[#F5F5F5] ">

  <div className="max-w-[1400px] mx-auto">

    <Banner inProgress={inProgress} selectedCard={selectedCard} ></Banner>

   <TicektandTask></TicektandTask>

  <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
  <Card cardPromis={cardPromis} selectedCard={selectedCard} setselectedCard={setselectedCard} setinProgress={setinProgress}></Card>
  </Suspense>
  
  </div>
  </div>
<ToastContainer/>
  
    </>
  )
}

export default App
