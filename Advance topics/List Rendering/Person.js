import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I am { person.name} and I'm { person.age} years old, I am a {person.skills} developer</h1>
        </div>
    )
}

export default Person
