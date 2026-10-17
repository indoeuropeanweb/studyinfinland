import React from 'react'
import Sidebar from '../components/Sidebar';


const menuItems = [
  {
    name: "State",
    href: "/finland/state"
  },
  {
    heading: "Nature and Climate",
    href: "/finland/nature-and-climate"
  },
  {
    heading: "Economy",
    href: "/finland/economy"
  },
  {
    heading: "Culture",
    href: "/finland/culture"
  },
  {
    heading: "Life-style and Character",
    href: "/finland/life-style-and-character"
  },
  {
    heading: "Language",
    href: "/finland/language"
  }
];

const StudyLayout = ({children}) => {

  return (
    <section className='grid grid-cols-5'>
        <div className='hidden lg:block lg:col-span-1'>
           <Sidebar menuItems={menuItems}/>
        </div>
        <div className='col-span-5 lg:col-span-4'>
           {children}
        </div>
    </section>
  )
}

export default StudyLayout