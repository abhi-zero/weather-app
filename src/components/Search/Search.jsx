import React from 'react'
import { useForm } from 'react-hook-form'

export default function Search({ setSearch, searchData,isLoading, error, setSelectedLocation}) {

    const {register,handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data){
      setSearch(data.Search)
    }
    
  return (
    <div>
       <div>
         <form onSubmit={handleSubmit(onSubmit)} 
         className='flex justify-between gap-5 px-5 sm:w-[450px] md:w-[600px]'>
          <input 
          className='bg-neutral-800 px-6 py-3 rounded-xl w-full text-neutral-200 text-xl'
          type="text" placeholder='Enter city name' {...register('search',{required : 'We need a value here'})}
          onChange={(e)=> setSearch(e.target.value)}/>
          <button type='submit'
          className='bg-blue-700 hover:bg-blue-500 px-9 py-3 rounded-xl text-neutral-50 transition-all duration-300 ease-in-out cursor-pointer'
          >
            Search
          </button>
        </form>
          <p className='text-red-600 text-sm text-center'>{errors.search && errors.search.message}</p>
       </div >
        {error ? 
        (<h2>error.status</h2>) 
        : 
        isLoading 
        ? 
        (<h2>Loading...</h2>) 
        : 
        searchData?.results ?
       ( <div className='z-50 bg-neutral-800 shadow-neutral-950 shadow-xl mt-3 p-2 rounded-2xl md:w-[450px] text-neutral-100'>
          <ul>
          {searchData?.results?.map((loc) => (
          <li key={`${loc.longitude}-${loc.latitude}`}
          onClick={()=> {
            setSelectedLocation ({
              latitude : loc.latitude,
              longitude : loc.longitude
            })
            setSearch('')
          }}
          className='flex justify-between items-center-safe hover:bg-neutral-600 my-1 px-4 py-2 rounded-[7px] cursor-pointer'
          >
            <h2>{loc.name}, {loc.country} </h2>
            <p><span>{loc.latitude}</span> - <span>{loc.longitude}</span></p>
          </li>
        )) }
          </ul>
          
          </div>):''}
    </div>
  )
}
