import backCard from './allCardBacks@2x.png';
import backButtonPic from './backNavButton@2x.png';
import Bat from './memoryBatCardFront@2x.png';
import Cat from './memoryCatCardFront@2x.png';
import Cow from './memoryCowCardFront@2x.png';
import Dragon from './memoryDragonFront@2x.png';
import GarbageMan from './memoryGarbageManCardFront@2x.png';
import GhostDog from './memoryGhostDogCardFront@2x.png';
import Hen from './memoryHenCardFront@2x.png';
import Horse from './memoryHorseCardFront@2x.png';
import Pig from './memoryPigCardFront@2x.png';
import Spider from './memorySpiderCardFront@2x.png';

const defaultCard = backCard;
const gameBackButton = backButtonPic;

let images = [
    {
        link: Bat,
        name: 'bat',
        matchFound: false,
    },
    {
        link: Cat,
        name: 'cat',
        matchFound: false,
    },
    {
        link: Cow,
        name: 'cow',
        matchFound: false,
    },
    {
        link: Dragon,
        name: 'dragon',
        matchFound: false,
    },
    {
        link: GarbageMan,
        name: 'garbageMan',
        matchFound: false,
    },
    {
        link: GhostDog,
        name: 'ghostDog',
        matchFound: false,
    },
    {
        link: Hen,
        name: 'hen',
        matchFound: false,
    },
    {
        link: Horse,
        name: 'horse',
        matchFound: false,
    },
    {
        link: Pig,
        name: 'pig',
        matchFound: false,
    },
    {
        link: Spider,
        name: 'spider',
        matchFound: false,
    }
];



export {
    defaultCard,
    gameBackButton,
    images
}
