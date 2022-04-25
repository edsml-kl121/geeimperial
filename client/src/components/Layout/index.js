import { Outlet } from 'react-router-dom'
import Aside from '../Aside'
// import './index.scss'

const Layout = (props) => {
  return (
    <div className="App">
      {/* {console.log(props.logout)} */}
      <Aside props={props.logout}/>
      <Outlet />
    </div>
  )
}

export default Layout
