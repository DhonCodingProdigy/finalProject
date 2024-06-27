import { useState, useEffect } from 'react'
import axios from "axios"
import Card from './Card'

const Watch =()=> {

    const [ watch, setWatch ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/api/watch').then(res => {
            setWatch(res.data)
        })
    }, [])

    const watchCards = watch.map(watch =>{

        let pathId

        return <Card 
                    key={watch.watch_id}
                    id={watch.watch_id}
                    name={watch.watch}
                    imgUrl={watch.imgURL}
                    price={watch.price}
                    path={'watch'}
                    // pathId={'watch'}
        />
    })

    return (
        <main className="main" id='watchMain'>
            <div className='container'>
                <h2>Watches</h2>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    { watchCards }
                </div>
            </div>
        </main>
    )
}

export default Watch