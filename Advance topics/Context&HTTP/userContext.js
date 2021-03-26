import React from 'react'


//Macking React Context using three steps.....

//Create context
//Create Context provider
//Create Context Consumer

const UserContext = React.createContext('Sagar')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext


