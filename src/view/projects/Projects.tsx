import React from 'react';
import Header from '../components/text/Header';

const Projects : React.FC = props => {
    return (
        <div className={`projets`}>
            <Header>
            {{
                en : "Projects",
                fr : "Projets"
            }}
            </Header>
        </div>
    )
}
export default Projects;