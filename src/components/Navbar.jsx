import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <aside className="w-fit h-screen px-1 py-8 bg-[#111111] text-stone-50">
      <li className="list-none text-center px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800 hover:outline hover:outline-2 hover:outline-cyan-300"><Link to="/">Home</Link></li>
      <li className="list-none text-center px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800 hover:outline hover:outline-2 hover:outline-cyan-300"><Link to="/projects">Projects</Link></li>
      <li className="list-none text-center px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800 hover:outline hover:outline-2 hover:outline-cyan-300"><Link to="/contact">Contact</Link></li>
      <li className="list-none text-center px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800 hover:outline hover:outline-2 hover:outline-cyan-300"><Link to="https://drive.google.com/drive/folders/1m1ydZS4t9GOkjkcqSP8I3sJyhh8dtF2J?usp=sharing" target='_blank'>Resume</Link></li>
    </aside>
  )
}