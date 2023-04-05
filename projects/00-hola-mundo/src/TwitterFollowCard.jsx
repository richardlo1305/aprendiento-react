export function TwitterFollowCard({name, avatar, userName, following}){
    return (
        <article className='rl-tw-followCard'>
        <header className='rl-tw-followCard-header'>
            <img 
            className='rl-tw-followCard-avatar'
            alt="Avatar" 
            src = {`https://unavatar.io/${avatar}`}>
            </img>
            <div className='rl-tw-followCard-info'>
            <strong>{ name }</strong>
            <span className='rl-tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className='rl-tw-followCard-button'>Seguir</button>
        </aside>
        </article>
    )
}