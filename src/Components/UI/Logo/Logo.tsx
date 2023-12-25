import { Link } from 'react-router-dom'
import logo from '../../../assets/3503403.png'
import './Logo.scss'
export const Logo = () => {
  return (
        <Link to={'/'} className='logo_wrap'>
            <img src={logo} alt='logo-pollution'
            className='logo_img'></img>
            <p className='logo_text'>Збережи</p>
        </Link>
    )
}
