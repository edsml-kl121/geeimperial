import { Outlet } from 'react-router-dom'
import Aside from '../Aside'
// import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Aside />
      <Outlet />
    </div>
  )
}

export default Layout
