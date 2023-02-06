import React from "react";
import Anil from "./anil";
import Kumar from "./kumar";
import { Raju, Rakesh, Ramu, Vijay } from "./raju";
import  {Raki}  from "./raki";


export default function anpp() {
  return (
    <div>
      <h1>Hello From Main Component </h1>
      <h3>Hello From Div Component</h3>
      <Anil/>
      <Kumar/>
      <Raju/>
      <Rakesh/>
      <Ramu/>
      <Vijay/>
      <Raki/>
      
    </div>
  )
}