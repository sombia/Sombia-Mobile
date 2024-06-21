import '../styles/components/WindowHandler.scss'

interface WindowHandlerProperties {
    active: string
}

function WindowHandler({ active }: WindowHandlerProperties) {
    return (
        <div className="view">
            {active}
            {<button onClick={() => { window.open("https://google.com", "_blank") }}>Open Link</button>}
        </div>
    )
}

export default WindowHandler