import React from 'react'
import StudentStyles from '../styles/studentStyles'
import SideMenuStudent from '../components/SideMenuStudent'
import StudentProfileScreen from '../components/StudentProfileScreen'

const StudentProfile = () => {
  return (
    <>
      <StudentStyles />
      <SideMenuStudent />
      <StudentProfileScreen />
    </>
  )
}

export default StudentProfile