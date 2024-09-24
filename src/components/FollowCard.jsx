import { useState } from 'react';

// Las prop que se pasan desde el componenete padre "App.jsx" son "userName, name, isFollowing"
export default function FollowCard({userName, name, initialIsFollowing}) {

  const [isFollowing, setIsFollowing] = useState(!initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const bottonClassName = isFollowing ? 
    'tw-followCard-button is-following' :
    'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

    return (
      <>
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>
            <img
              className='tw-followCard-avatar'
              alt='El avatar de midudev'
              src={`https://unavatar.io/github/${userName}`}
            />
            <div className='tw-followCard-info'>
              <strong>{name}</strong>
              <span className='tw-followCard-infoUserName'>{userName}</span>
            </div>
          </header>

          <aside>
            <button className={bottonClassName} onClick={handleClick}>
              <span className='tw-followCard-text'>{text}</span>
              <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
          </aside>
        </article>
      </>
    )
  }