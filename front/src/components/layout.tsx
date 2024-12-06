import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout