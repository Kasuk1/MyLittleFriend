import React from 'react';
import './UserMiniProfile.css';

export const UserMiniProfile = ({ avatar_url, full_name }) => {
    return (
        <div className='user-mini-profile'>
            {avatar_url ?
                (
                    <img className='user-mini-profile__avatar' src={avatar_url} alt='' />
                )
                :
                (
                    <i className="fas fa-user-circle"></i>
                )
            }
            <span className='user-mini-profile__name'>{full_name}</span>
        </div>
    );
};
