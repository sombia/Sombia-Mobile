import '../styles/components/WindowHandler.scss'

interface WindowHandlerProperties {
    active: string
}

function WindowHandler({ active }: WindowHandlerProperties) {
    return (
        <div className="view">
            {active}
            {<button onClick={() => { (window as any).cordova.InAppBrowser("https://google.com", "_blank", 'location=yes') }}>Open Link</button>}
        </div>
    )
}

export default WindowHandler