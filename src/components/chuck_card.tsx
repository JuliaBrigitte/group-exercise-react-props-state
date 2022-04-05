import ChuckImage from '../assets/chuck_norris.jpg';

const ChuckCard = ({chuckGreeting, chuckImage}: {chuckGreeting: string, chuckImage: string}) :JSX.Element => {

    return <>
        <h2>Greetings, {chuckGreeting}</h2>

        <div>
            <img src={chuckImage} alt='An old man'/>
        </div>

        <div>
            <img src={ChuckImage} alt='Second old man'/>
        </div>
    </>;
}


export default ChuckCard;