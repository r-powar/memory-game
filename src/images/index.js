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
        back: backCard,
    },
    {
        link: Cat,
        name: 'cat',
        back: backCard,
    },
    {
        link: Cow,
        name: 'cow',
        back: backCard,
    },
    {
        link: Dragon,
        name: 'dragon',
        back: backCard,
    },
    {
        link: GarbageMan,
        name: 'garbageMan',
        back: backCard,
    },
    {
        link: GhostDog,
        name: 'ghostDog',
        back: backCard,
    },
    {
        link: Hen,
        name: 'hen',
        back: backCard,
    },
    {
        link: Horse,
        name: 'horse',
        back: backCard,
    },
    {
        link: Pig,
        name: 'pig',
        back: backCard,
    },
    {
        link: Spider,
        name: 'spider',
        back: backCard,
    }
];



export {
    defaultCard,
    gameBackButton,
    images
}
