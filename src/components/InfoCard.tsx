import React from 'react';
import {IconText} from './IconText';

type InfoCardProps = {
    textTitle?: string
    icon?: string
    infoIcon?: string
    infoText?: string
}

export function InfoCard(props: InfoCardProps){
    return(
        <div className="info-card">
            <div >
            <IconText
                title='Rio de Janeiro'
                icon={'GoLocation'}
            />
            <IconText
                title='Open To Work'
                icon={'CgWorkAlt'}
            />
            <IconText
                title='edintwi'
                icon={'FiGithub'}
            />
            <IconText
                title='Edson Brandon'
                icon={'FiLinkedin'}
            />
            <IconText
                title='edsonbrandon8@gmail.com'
                icon={'FiMail'}
            />
            </div>
        </div>
    );
}