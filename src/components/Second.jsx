import React, { useState } from 'react'

const Second = () => {
    let myName = "Oluwafemi"
    let mySchool = "SQI"
    let number = 9
   
    const [first, setfirst] = useState(second);
    // const [allStudents, setallStudents] = useState([])
    const [variableName, setvariableName] = useState([])
    
    const increment = () => {
        setfirst(first+1);
        console.log(first);
    }

    let allStudents = [
        {name:"Shola", school:"Lautech"},
        {name:"Mike", school:"OOU"},
        {name:"Elijah", school:"SQI"}
    ]

  return (
    <>
        {number==9?<div>even number</div>:<div>Odd number</div>}
        <button onClick={increment}>increase</button>
        <div>{first}</div>

        {/* <input type="text" onChange={(e)=>setname(e.target.value)} /> */}
        {/* <button onClick={change}>change</button> */}

        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>School</td>
                </tr>
            </thead>
        {
            allStudents.map((item,index)=>(
                <>
                    <tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.school}</td>
                        </tr>
                    </tbody>
                </>
            ))
        }
        </table>

    </>

  )
}

export default Second