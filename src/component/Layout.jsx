import { Outlet } from 'react-router-dom'
 

const Layout = () => {
  return (
    <div className="app">
   <Header/>
      <main>
        <Outlet />
      </main>
    <Footer/>
    </div>
  )
}

export default Layout