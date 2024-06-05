import { Outlet } from 'react-router';

import Navbar from './Navbar.jsx';

export default function RootLayout() {
  return (
    <div className="flex">
      <Navbar />
      <div className='w-full bg-[#232323]'>
        <Outlet />
      </div>
    </div>
  )
}