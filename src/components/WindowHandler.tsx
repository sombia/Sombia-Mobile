import '../styles/components/WindowHandler.scss';
import StartPage from './StartPage';

interface WindowHandlerProperties {
    active: string;
}

function WindowHandler({ active }: WindowHandlerProperties) {
    return (
        <>
            {active == "start" ? <StartPage></StartPage> : <></>}
        </>
    )
}

export default WindowHandler;