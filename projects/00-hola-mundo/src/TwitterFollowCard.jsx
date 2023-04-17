import { useState } from "react";

export function TwitterFollowCard({formatUserName, children, avatar, userName}){
    const [isFollowing, setIsFollowing] = useState(false);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'rl-tw-followCard-button is-following' : 'rl-tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
   
    return (
        <article className='rl-tw-followCard'>
            <header className='rl-tw-followCard-header'>
                <img 
                className='rl-tw-followCard-avatar'
                alt="Avatar" 
                src = {`https://unavatar.io/${avatar}`}>
                </img>
                <div className='rl-tw-followCard-info'>
                    <strong>{ children }</strong>
                    <span className='rl-tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={ buttonClassName } onClick={handleClick}>
                    { text }
                </button>
            </aside>
        </article>
    )
}