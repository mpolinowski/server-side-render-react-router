import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const languages = [{
    name: 'All',
    param: 'all'
  }, {
    name: 'JavaScript',
    param: 'javascript',
  }, {
    name: 'Go',
    param: 'golang',
  }, {
    name: 'TypeScript',
    param: 'typescript',
  }, {
    name: 'Rust',
    param: 'rust',
  }, {
    name: 'Julia',
    param: 'julia',
  }]

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/popular/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}