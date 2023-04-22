import React from "react"
import Anil from "./Anil"
import Anil2 from "./Anil2"
import Kumar from "./Kumar"
import LifeCycleComp from "./LifeCycles/LifeCycleComp"
import LifeCycleCompB from "./LifeCycles/LifeCycleCompB"
import Sai from "./Sai"

export default function app(){
  return(
    <div>
       {/* <h2>Hello world from app component</h2>
       <Anil/>
       <Kumar/>
       <Sai/>
       <Anil2/> */}
       {/* <LifeCycleComp/> */}
       <LifeCycleCompB/>
    </div>
  )
}