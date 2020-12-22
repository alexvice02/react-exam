
export default function RouteInfo({info, route_id})
{
    function show()
    {

    }

    return(
        <div>
            <h3 className='rounded-3 text-center border-primary bg-dark text-light mt-3 mb-3 p-3'>{info.name}
                <p className='mb-0 mt-3 text-danger'>{ info.type == "bus" ? "Автобус" : info.type}</p>
                <p className='mb-0'><span className='badge bg-secondary'>{route_id}</span></p>
            </h3>
            <p>Час виізду:
                {info.startTime.map(item => {
                    return <span className='badge bg-primary mx-1 my-1 p-2' style={{cursor: "pointer"}}>{item}</span>
                })}
            </p>
        </div>
    )
}