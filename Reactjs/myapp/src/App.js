import React from "react"
import './index.css'
import { ClassRoom } from "./classroom"
import { User, USer } from "./User"
import Ak from "./Ak"
import Anil from "./Anil"
import Bond from "./Bond"
import Kumar from "./Kumar"
import ParentComponent from "./RefsComponent/ParentComponent"
import ComponentsContainer from "./Pure components/ComponentsContainer"
import ClickCounter from "./HigherOrederComponent/ClickCounter"
import HoverConter from "./HigherOrederComponent/HoverCounter"




 export default function app(){
  return(
    <div>
      {/* <h2>Hello From MyApp Component</h2> */}
      {/* <Anil/>
      <Kumar/>
      <Bond/>
      <Ak/>
      <ClassRoom/> */}
      {/* <User/> */}
      {/* <ParentComponent/> */}
      {/* <ComponentsContainer/> */}
      <ClickCounter/>
      <hr/>
      <HoverConter/>
    </div>
  )
}