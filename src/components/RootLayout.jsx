import { Outlet } from 'react-router';

import Navbar from './Navbar.jsx';

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      {/* <hr className='mx-4'></hr> */}
      <div className='font-[Montserrat]'>
        <Outlet />
      </div>
    </div>
  )
}