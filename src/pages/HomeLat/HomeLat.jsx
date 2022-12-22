import { Awards } from './Awards/Awards';
import { Biography } from './Biography/Biography';
import { Family } from './Family/Family';
import { Intro } from './Intro/Intro';
import { Video } from './Video/Video';
import { Works } from './Works/Works';



export const HomeLat = () => {
    return (
        <>
            <Intro />
            <Biography />
            <Family />
            <Works />
            <Video />
            <Awards />
        </>
    );
};
