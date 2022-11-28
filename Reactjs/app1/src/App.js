import React from "react"
import Anil from "./Anil"
import Anil2 from "./Anil2"
import Kumar from "./Kumar"
import Sai from "./Sai"

export default function app(){
  return(
    <div>
       <h2>Hello world from app component</h2>
       <Anil/>
       <Kumar/>
       <Sai/>
       <Anil2/>
    </div>
  )
}