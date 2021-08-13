import style from './navbar.module.css'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className={style.wrapper}>
      <ul className={style.flex}>
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/detail">
            <a> Detail</a>
          </Link>
        </li>
        <li> 
          <Link href="/about">
            <a> About</a>
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
