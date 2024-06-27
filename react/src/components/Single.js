import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import Watch from './Watch'

const Single =()=> {


    const [item, setItem ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setItem(res.data))
    }, [])

    // console.log(item)

    return (
        <main className='main' id='singleMain'>
            <div className='container'>
                <div className='row row-col-1 row-col-md-4 g-4'>
                    <h2 className='sub-heading' id='watchHeading'>{item.watch}</h2>
                    <h3 className='h3-subheading' id='priceHeading'>${item.price}</h3>
                    <p className='card-text'>{item.watch_desc}</p>
                    <img src={`/images/${item.imgURL}`} alt={item.watch} className='img-fluid image w-50'/>
                </div>
            </div>
        </main>
    )
}

export default Single