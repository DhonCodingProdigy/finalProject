import { Link, Outlet } from 'react-router-dom'

const Header =()=> {

    return(
        <header className='header'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-9'>
                        <h1 className='heading text-center'>DhØn's ExØtic Watches</h1>
                    </div>
                    <div className='col-md-4'>
                        <nav className='nav justify-content-between' id='topNav'>
                            <Link to='/' className='home-link text-capitalize' data-replace="home">home</Link>
                            <Link to='/login' className='login-link text-capitalize' data-replace="login">login</Link>
                            <Link to='/watches' className='watch-link text-capitalize' data-replace="watches">watches</Link>
                            <Outlet />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header