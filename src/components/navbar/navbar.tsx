import classes from './navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16H28" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 8H28" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 24H28" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            Navbar
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.9999 21L16.6499 16.65" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </nav>
    )
}

export default Navbar;