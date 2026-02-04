import React, { useEffect } from 'react'

function Github() {
    const [data, setData] = React.useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/ritesh7081')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error('Github API Error:', err))
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github Picture" width={300} />
    </div>
  )
}

export default Github