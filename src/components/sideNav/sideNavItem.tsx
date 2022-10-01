import classes from './sideNavItem.module.scss';

type SideNavItemProps = {
    title: string,
    children?: JSX.Element | string
};

const sideNavItem = (props: SideNavItemProps) => {
    return (
        <div className={classes['sidenav-item']}>
            <div></div>
            <div>{props.children}</div>
            <p>{props.title}</p>
        </div>
    )
}

export default sideNavItem;
