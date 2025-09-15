import React from 'react'
import { Routes, Route } from "react-router-dom";
import Topbar from '../topbar/Topbar'
// import Sidebar from '../sidebar/Sidebar'
import LabCardsComponent from '../labcardscomponent/LabCardsComponent'
import FullPanel from '../panel/FullPanel';
import BookSlot from '../bookslot/BookSlot';
import LabConfirmAppointment from '../labconfirmAppointment/LabConfirmAppointment';

function LabSection() {
  return (
   
    
    //         <Sidebar />
    <div>
    
            <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <Routes>
                    <Route path='/' element={<LabCardsComponent/>}/>
                    <Route path="panel" element={<FullPanel />} />
                    <Route path='bookslot' element={<BookSlot/>}/>
                    <Route path='confirm-bookslot' element={<LabConfirmAppointment/>}/>
                </Routes>
            </main>
    </div>
  )
}

export default LabSection