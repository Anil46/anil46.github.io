import React from "react"
import './index.css'
import { ClassRoom } from "./classroom"
import { User, USer } from "./User"
import Ak from "./Ak"
import Anil from "./Anil"
import Bond from "./Bond"
import Kumar from "./Kumar"



 export default function app(){
  return(
    <div>
      <h2>Hello from app component</h2>
      <Anil/>
      <Kumar/>
      <Bond/>
      <Ak/>
      <ClassRoom/>
      <User/>
      
      
    </div>
  )
}