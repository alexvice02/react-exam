import Schedule from "./schedule";
import React, {useEffect, useState} from 'react'
import './App.css';
import './bootstrap.min.css';

function App() {
    const styles = {
        container: {
            width: "50%"
        }
    }

    const [stations, setStations]   = useState([])
    const [routes, setRoutes]       = useState([])

    useEffect(async () => {
        await fetch("http://localhost:3200/api/station").then(
            res => res.json()).then(stats => {
                setStations(Array(stats))
        })
    }, [])
    useEffect(async () => {
        await fetch("http://localhost:3200/api/rout").then(
            async res => await res.json()).then(routs => {
            setRoutes(routs)
        })
    }, [])

    return (
      <div className='container' style={styles.container}>
         <Schedule routes={routes}></Schedule>
      </div>
    );
}

export default App;