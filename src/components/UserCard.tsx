import React from 'react';
import {UserAvatar} from './UserAvatar';

export function UserCard(){
    return(
        <div className="user-card">
            <UserAvatar
                avatarLink= 'https://avatars.githubusercontent.com/u/49498964?v=4'
                border={true}
            />
            <h1>
                Edson Brandon
            </h1>
            <text> Front End Developer</text>

        </div>
    )
};