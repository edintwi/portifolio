import React from 'react';

import {GoLocation} from 'react-icons/go';
import {CgWorkAlt} from 'react-icons/cg';
import {FiGithub} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import {FiMail} from 'react-icons/fi';


type IconTextProps = {
    title:string,
    icon: string,
}





export function IconText (props: IconTextProps){
    var iconRender;

    if(props.icon == 'GoLocation'){
        iconRender  = <GoLocation/>
    }
    else if(props.icon == 'CgWorkAlt'){
        iconRender = <CgWorkAlt/>
    }
    else if(props.icon == 'FiGithub'){
        iconRender = <FiGithub/>
    }
    else if(props.icon == 'FiLinkedin'){
        iconRender = <FiLinkedin/>
    }
    else if(props.icon == 'FiMail'){
        iconRender = <FiMail/>
    }

    return (
        <div className='icon-text'>
            <a> 
                {iconRender}
            </a>
            <text>
                {props.title}
            </text>
        </div>
    )
}