import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

const Card = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchDataFromApi().then((res) => setData(res))
    },[])

  return (
    <div>
        {
            data?.data?.results?.map((user, index) => (
                
                    <div key={index} className='flex gap-4 md:gap-8 bg-gradient-to-r shadow-xl from-[#e0c3fc] to-[#8ec5fc] p-6 rounded-md'>
                        <img className='shadow-xl' src={user.picture.large} alt="" />
                        <div>
                            <span className='mr-1 text-lg font-semibold'>{user.name.first}</span>
                            <span className='text-lg font-semibold'>{user.name.last}</span>
                            <p className='font-medium opacity-80 text-base'>{user.gender}</p>
                            <p className='font-medium opacity-80 text-base'>{user.phone}</p>
                        </div>
                    </div>
                
            ))
        }
    </div>
  )
}

export default Card