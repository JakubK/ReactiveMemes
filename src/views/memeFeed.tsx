import classes from './memeFeed.module.scss';

import Meme from "../components/meme/meme";


const memeFeed = () => {
    return (
        <div className={classes['meme-feed']}>
            <div>
                <div className={classes['meme-feed__nav']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 8L8 12L12 16" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 12H8" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className={classes['meme-feed__paging']}>1/100</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 16L16 12L12 8" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 12L16 12" stroke="#FFFCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className={classes['meme-feed__collection']}>
                <Meme/>
                <Meme/>
                <Meme/>
                <Meme/>
                <Meme/>
            </div>
        </div>
    )
}

export default memeFeed;