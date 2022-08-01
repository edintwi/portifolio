import React from 'react';
import '../styles/main.css';
import { AiOutlineFolder } from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {BiGitBranch} from 'react-icons/bi';

type ProjectCardsProps = {
    title: string,
    description: string,
    projectLanguage: string,
    stars: String ,
    commits: String,
}

export function ProjectCards (props: ProjectCardsProps){
    return(
        <div className="project-cards-container">
            <div className="project-cards-title">
                <AiOutlineFolder className='icon-title'/>
                <h1>
                    {props.title}
                </h1>

            </div>
            <p className='project-cards-description'>
                {props.description}
            </p>
            <div className='project-cards-bottom'>
                <div className='project-cards-bottom-container-icons'>
                    <div className='bottom-stars'>
                    <AiOutlineStar className='bottom-icons'/>
                        <a>  
                            {props.stars}
                        </a>
                    </div>
                    <div>
                    <BiGitBranch  className='bottom-icons'/>
                        <a>  
                            {props.commits}
                        </a>
                    </div>
                    
                    
                </div>
                <div className='project-cards-bottom-language'>
                    <div className='language-color'>

                    </div>
                   <a>{props.projectLanguage}</a>
                </div>
            </div>
            
        </div>
    )
};