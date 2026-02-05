import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
  
  if (!user) return <div>please login</div>

    return (
      <div>
        <h2 className='bg-gray-500 text-3xl font-bold'>Profile</h2>
        <p>Username: {user.username}</p>
      </div>
    )
}

export default Profile