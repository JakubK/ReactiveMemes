import classes from './sideNav.module.scss';
import SideNavItem from './sideNavItem';

const sideNav = () => {
    return (
        <aside className={classes.sidenav}>
            <div className={classes.sidenav__top}>
                <SideNavItem title="Recent"></SideNavItem>
                <SideNavItem title="Fresh"></SideNavItem>
                <SideNavItem title="Tags"></SideNavItem>
                <SideNavItem title="Favourites">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </SideNavItem>
            </div>
            <div className={classes.sidenav__bottom}>
                <SideNavItem title="New meme">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 8V16" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 12H16" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </SideNavItem>
                <SideNavItem title="Logout">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 17L21 12L16 7" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12H9" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </SideNavItem>
            </div>
        </aside>
    )
}

export default sideNav;
