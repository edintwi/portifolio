import React from 'react';

type UserAvatarProps = {
    avatarLink: string,
    border: false | true
}

export function UserAvatar(props: UserAvatarProps){
    var borderClass = "";

    if(props.border){
        borderClass = "user-avatar-border";
    }else{
        borderClass = "user-avatar-noborder";
    }
    return(

        <img  className={borderClass} alt='Imagem do usuário' src={props.avatarLink}>

        </img>
    );
};