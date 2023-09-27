import React from 'react'

function User(props) {
  console.log(props)
  return (
    <div>
      <h1>fullName {props.fullName}</h1>

    </div>
  )
}

export default User