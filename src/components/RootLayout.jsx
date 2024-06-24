import { Outlet } from 'react-router';

import Navbar from './Navbar.jsx';

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className='font-[Montserrat]'>
        <Outlet />
      </div>
    </div>
  )
}