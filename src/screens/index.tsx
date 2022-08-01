import React from 'react';

import { UserCard } from '../components/UserCard';
import { InfoCard } from '../components/InfoCard';
import { Card } from '../components/Card';
import { TecButton } from '../components/TecButton';
import { HeaderTitle } from '../components/HeaderTitle';
import { ProjectCards } from '../components/ProjectCards';

import '../styles/main.css';

export function Index() {
  return (
    <div className="App">
        <div className="container">
                <div className="container-left">
                <UserCard/>
                <InfoCard/>
                <Card title='Tecnologias'>
                    <TecButton title="HTML5"/>
                    <TecButton title="CSS3"/>
                    <TecButton title="JAVASCRIPT"/>
                    <TecButton title="REACT JS"/>
                    <TecButton title="REACT NATIVE"/>
                    <TecButton title="TYPESCRIPT"/>
                    
                </Card>
                <Card title="Experiências">
                    <ul>
                        <li>
                            Curso Praticar
                        </li>
                        2020 - 2021 <br/>
                        Suporte Técnico
                    </ul>
                </Card>
                <Card title="Educação">
                    <ul>
                        <li>
                            ETERJ - Escola Técnica do RJ
                        </li>
                        2016 - 2019 <br/>
                        Ensino Médio Técnico em informática
                    </ul>
                    <ul>
                        <li>
                        Universidade Estácio de Sá
                        </li>
                        2019 - Cursando <br/>
                        Sistemas de informação
                    </ul>
                </Card>
            </div>
            <div className='container-right'>
                <HeaderTitle 
                    title="Meus Projetos"
                    seeMore={true}
                    gitHubLink="https://github.com/edintwi?tab=repositories"
                />
                <ProjectCards 
                    title='RocketHelp'
                    description={'Projeto realmente muito bom!'}
                    projectLanguage='JavaScript'
                    commits='50'
                    stars='50'
                />
                <HeaderTitle 
                    title='Post Recentes'
                    seeMore={false}
                />
            </div>
        </div>
      
      
    </div>
  );
}