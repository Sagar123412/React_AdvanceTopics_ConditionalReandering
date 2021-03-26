import React from 'react'

const names = ['sagar', 'john', 'cody', 'joe', 'joe'];
const listOfNames = names.map((name, index) => <h1 key = {index}> {index} {name} </h1>)

function IndexAsKey() {
    return (
        <div>
            {listOfNames}
        </div>
    )
}

export default IndexAsKey
