import '../styles/components/WindowHandler.scss'

interface WindowHandlerProperties {
    active: string
}

function WindowHandler({ active }: WindowHandlerProperties) {
    return (
        <div className="view">
            {active}
        </div>
    )
}

export default WindowHandler