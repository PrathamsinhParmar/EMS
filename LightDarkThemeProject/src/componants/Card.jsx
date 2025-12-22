import React, { useContext } from 'react'
import { Star } from 'lucide-react'
import {ThemeContextYet} from './ThemeContext'

const Card = () => {

  const [theme, setTheme] = useContext(ThemeContextYet)


  return (

    <div className='mt-40 ml-115'>

      <div className='flex text-white text-xs pb-3  w-80 justify-end'>
        <button className='capitalize bg-blue-900 px-3 py-1 rounded active:bg-blue-800 '
          onClick={()=>{
            if(theme == 'Light'){
              setTheme('Dark')
            }
            else{
              setTheme('Light')
            }
          }}
        >toggle theme : {theme}</button>
      </div>
      <div className='card' id={theme} >
        <div className=''>
          <img className='h-auto w-full rounded-xl' src="https://tse1.mm.bing.net/th/id/OIP.YYKwEXbexTvAY4wmDf3x_gHaFj?pid=Api&P=0&h=180" alt="Hitesh Image" />
        </div>
        <h3 className='capitalize font-bold text-2xl mt-3'>crash course : handling webhooks in one video</h3>
        <div className='flex mt-2'>
          <li className='list-none text-amber-300 mr-1'><Star /></li>
          <li className='list-none text-amber-300  mr-1'><Star /></li>
          <li className='list-none text-amber-300  mr-1'><Star /></li>
          <li className='list-none text-amber-300  mr-1'><Star /></li>
          <li className='list-none text-amber-300  mr-1'><Star /></li>
          <span className='ml-4 bg-blue-300  px-3 rounded font-medium'>4.0</span>
        </div>
        <div className='flex mt-7 justify-between mb-1'>
          <h1 className='text-3xl font-bold'>$500</h1>
          <button className='capitalize bg-blue-500 rounded px-2 text-xs font-medium active:bg-blue-800'>add to cart</button>
        </div>
      </div>
    </div>


  )
}

export default Card
