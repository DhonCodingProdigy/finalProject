import { Link, Outlet } from 'react-router-dom'

const Header =()=> {

    return(
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='heading'>Dhon's Exotic Watches</h1>
                    </div>
                    <div className='col-md-4'>
                        <nav className='nav justify-content-between' id='topNav'>
                            <Link to='/'>home </Link>
                            <Link to='/login'>login</Link>
                            <Link to='/watches'>watches</Link>
                            <Outlet />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header