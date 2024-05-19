import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div className="absolute top-0 left-0 flex items-center p-3 md:px-12 bg-neutral-800 w-full">
      <Link>
        <h3 className="font-mono text-amber-500 text-2xl">MyTodo</h3>
      </Link>
      <nav>
        <div className='absolute top-4 right-12 flex justify-center text-white'>
          <Link to="/login">
            <p className='pl-7'>Login</p>
          </Link>
          <Link to="/signup">
            <p className='pl-7'>Signup</p>

          </Link>
        </div>
      </nav>
    </div>
  )
}
