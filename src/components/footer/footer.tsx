import classes from './footer.module.scss';

const footer = () => {
    return (
        <footer className={classes.footer}>
            <span className={classes.footer__copy}>
                Made by 
                <a href='https://github.com/JakubK' className={classes.footer__link}> JakubK</a>
            </span> 
        </footer>
    )
}

export default footer;
