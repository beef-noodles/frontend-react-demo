import { NavLink } from 'react-router'

import { Welcome } from '../welcome/welcome'

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <>
      <Welcome />
      <ul className="nav">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/concerts">All Concerts</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </>
  )
}
