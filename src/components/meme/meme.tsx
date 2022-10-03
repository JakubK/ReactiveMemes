import classes from './meme.module.scss';
import dummyMeme from '../../assets/meme.jpg'

const meme = () => {
    return (<div className={classes.meme}>
        <div className={classes.meme__grid}>
            <header>My based first meme title</header>
            <div></div>
            <img src={dummyMeme}/>
            <div className={classes.meme__nav}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div className={classes.meme__votes}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" transform="rotate(90 16 16)" fill="#EB5E28"/>
                    <path d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18C12 18 13.5 20 16 20C18.5 20 20 18 20 18" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 13H13.01" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 13H19.01" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                1234
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" transform="rotate(-90 16 16)" fill="#EB5E28"/>
                    <path d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 20C20 20 18.5 18 16 18C13.5 18 12 20 12 20" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 13H13.01" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 13H19.01" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
        </div>
        <p className="meme__tags"></p>
    </div>)
};

export default meme;
