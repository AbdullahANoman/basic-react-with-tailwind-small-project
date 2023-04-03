import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavShow from './Components/NavShow/NavShow'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import LoadCard from './Components/LoadCard/LoadCard'

function App() {
  const [count, setCount] = useState(0)
  const [open,setOpen] = useState(false)
  const links = [
    {
      name: 'Home',
      link : '/home',
      id : 1
    },
    {
      name: 'About Us',
      link : '/about',
      id : 2
    },
    {
      name: 'Contact',
      link : '/contact',
      id : 3
    },
    {
      name: 'Login',
      link : '/login',
      id : 4
    },
  ]
  console.log(open)
  return (
    <>
    <div className='p-5'>
      <div onClick={()=>setOpen(!open)} className='duration-500 md:hidden' >
      {
        open === false ?
         <Bars3Icon className="h-6 w-6 text-blue-500" />
          :
          <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon> 
      }
      </div>
      <div>
      {
         <ul className={`md:flex absolute md:static p-8  bg-red-400 md:p-4 duration-100   ${open ? 'top-12' : '-top-40' }`}>
        {
          links.map(link=>(<NavShow link={link} key={link.id}></NavShow>))
        }
                 </ul>  
      }
      </div>
    </div>
    <LoadCard></LoadCard>
    </>
  )
}

export default App
