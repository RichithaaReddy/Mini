import React from 'react'

const Profile = () => {
  return (
    <div className='min-h-screen'>
        <div className='flex flex-row justify-center'>
         <div className='w-1/2'>
            <input type='file'/>
            <h1>Richitha Reddy</h1>
            <h2>CVR COLLEGE</h2>
            <h2>Btech 3rd Year</h2>
         </div>
         <div className='w-1/2'>
           <p>Edit profile</p>
           <p>User Id: </p>
           <p>email:</p>
           <p>Phone:</p>
         </div>
        </div>
        
    </div>
  )
}

export default Profile