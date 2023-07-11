//rrfc
//rafce 

import React from 'react'

const Header = () => {
  const firstName = 'Kenneth';
  const lastName = 'Dimalibot';
 
  const greetings = () => {
    let d = new Date();
    let hours = d.getHours();

    if (hours > 4 && hours < 12) {
        return <p>Good Morning Pogi! {firstName} {lastName}</p> 
    } else if (hours >= 12 && hours <=18) {
      return <p>Good Afternoon Pogi! {firstName} {lastName}</p> 
    }else if (hours >= 18 && hours <24) {
      return <p>"Good Evening Pogi! {firstName} {lastName}</p> 
    }else {
      return <p>"Good Day Pogi! {firstName} {lastName}</p> 
    }
}
  
  return (
    <div>
      {greetings()}
    </div>
  )
}

export default Header

