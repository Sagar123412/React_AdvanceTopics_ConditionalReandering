import React from 'react'
import Person from './Person'

const persons = [
    {
        id:1,
        name: "Sagar",
        age:22,
        skills: "React"
    },
    {
        id:2,
        name:"John", 
        age:23,
        skills: "Angular"
    },
    {
        id:3,
        name:"Cody",
        age:24,
        skills: "Node.js"
    },
]

const personsList = persons.map(person => <Person key = {person.id} person = {person} /> )

function NameList() {
    return (
        <div>
            {personsList}
        </div>
    )
}

export default NameList
