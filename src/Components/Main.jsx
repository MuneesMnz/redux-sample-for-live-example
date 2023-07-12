import React from 'react'
import WarningComponent from './WarningComponent'
import UserInput from './UserInput'

const Main = () => {
  return (
    <div className='flex-[3] p-5 '>
      <WarningComponent />
      <UserInput/>
    </div>
  )
}

export default Main
