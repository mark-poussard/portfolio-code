import React from 'react';
import LocalDiv from '../../components/local/LocalDiv';
import ProjectSubSection from '../ProjectSubSection';
import './ToetcieProjectIntro.scss';
import ParallaxDivScroller from '../../components/parallax/ParallaxDivScroller';

interface IToetcieProjectIntroProps{
    projectsRef : HTMLDivElement;
}

const ToetcieProjectIntro : React.FC<IToetcieProjectIntroProps> = props => {
    return (
        <ProjectSubSection className={`toetcie-project-intro`}
            illustration={
                <img className={`toetcie-project-intro-illustration`} 
                    src={`media/toetcie-intro.jpg`} />
                // <ParallaxDivScroller className={`toetcie-project-intro-illustration`}
                //     scrollDiv={props.projectsRef}>
                // <img src={`media/toetcie-intro.jpg`} />
                // </ParallaxDivScroller>
            }>
            <LocalDiv>
            {{
                en : 
                    <>
                        <p>
                            Tô & Cie is a Vietnamese canteen serving authentic homemade food.
                            I helped in the restaurants digitization by imagining and creating a responsive, flexible website with an online food order feature.
                        </p>
                        <p>
                            Concerned with quality, we arranged an on-site visit to capture the atmosphere of the canteen.
                            Through our exchanges both in-person and online, we managed to distill the spirit, the DNA of what makes Tô & cie and iron out what features the website would have to deliver.
                        </p>
                    </>,
                fr : 
                    <>
                        <p>
                            Tô & Cie est une cantine Vietnamienne proposant une cuisine authentique et familiale.
                            Dans le cadre de la digitalisation du restaurant, j'ai participé à la conception et à la réalisation d'un site web réactif, flexible et permettant au client de commander en ligne.
                        </p>
                        <p>
                            Afin de m'assurer que le site représenterait au mieux l'esprit et l'atmosphère de la cantine, je me suis rendu sur place pour une discussion avec le restaurateur.
                            Au fil de cette discussion et au travers des divers échanges, nous avons pu dégager l'essentiel, l'ADN de ce qui fait Tô & cie ainsi que les besoins principaux auxquels le site devrait répondre.
                        </p>
                    </>
            }}
            </LocalDiv>
        </ProjectSubSection>
    );
}
export default ToetcieProjectIntro;