import React, {useState} from 'react'
import RouteInfo from "./RouteInfo";

export default function Schedule({routes})
{
    const [currentRouteId, setCurrentRouteId] = useState(1)
    const [routeReady, setRouteReady] = useState(false)
    const [selectedRoute, setSelectedRoute] = useState(async () => {
        await fetch(`http://localhost:3200/api/rout/${1}`).then(
            async res => await res.json()).then(data => {
            setSelectedRoute(data)
            setRouteReady(true)
        })
    })

    let list = Object.keys(routes).map((item, index) => {
        return {key: item, name: routes[item].name}
    })

    async function getRouteInfo(id)
    {
        await fetch(`http://localhost:3200/api/rout/${id}`).then(
            async res => await res.json()).then(data => {
                setSelectedRoute(data)
        })
    }

    function showDetails(e)
    {
        e.preventDefault()
        let route_id = e.target.attributes["data-key"].value
        getRouteInfo(route_id)
        setCurrentRouteId(route_id)
    }

    return (
        <div className='mt-3'>
            <h1 className='text-center mb-3'>Розклад руху</h1>
            <div className='list-group'>
                {list.map((item, index) => {
                    return <a data-key={item.key} key={item.key} onClick={showDetails} className='list-group-item' href="#">{item.key}. {item.name}</a>
                })}
                {routeReady == true &&
                    <RouteInfo info={selectedRoute} route_id={currentRouteId}></RouteInfo>
                }
            </div>
        </div>
    )
}