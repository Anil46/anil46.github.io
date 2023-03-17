import React, { useState } from "react"

export const Teja = () => {
    const [myName, setmyName] = useState("Anil")
    return <div>
        <button onClick={()=>{setmyName("Anil Kumar")}}>Change Name</button>
        <h2>Hello From {myName} Component</h2>
    </div>
}