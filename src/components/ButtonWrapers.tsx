"use client";
import Button from './Button'

export function ScheduleAnAppointment() {
      function handleclick(){
    console.log("clicked"); 
  }
  return (
    <Button click={handleclick} text="SCHEDULE AN APPOINTMENT" type={1}/>
  )
}
