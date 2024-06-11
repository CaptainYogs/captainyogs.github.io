import { Outlet } from 'react-router';

import Navbar from './Navbar.jsx';

export default function RootLayout() {
  return (
    <div className="flex lg:h-screen h-max">
      <Navbar />
      <div className='w-11/12 bg-[#232323]'>
        <Outlet />
      </div>
    </div>
  )
}