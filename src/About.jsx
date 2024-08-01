import React from 'react'

export default function About() {

    const employee= [
    {
        firstName : "div",
        lastName : "patel"
    },
    {
        firstName : "A",
        lastName : "b"
    }

]
  return (
    <table>
{

employee.map(function(v){

    return (<tr><td>{v.firstName}</td><td>{v.lastName}</td></tr>);
})



}


    </table>
  )
}
