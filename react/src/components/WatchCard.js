import { Link } from 'react-router-dom'

const WatchCard =(props)=> {
    return (
        <div className='col'>
            <div className='card watch-card h-100'>
                <img src={`/images/${props.imgURL}`} alt={`images of ${props.watch}`} className='img-fluid image card-img-top watch-image'/>
                <div className='card-body'>
                    <h3 className='card-title watch-title'>
                        {props.watch}
                        <p className='card-text'>
                            <Link to={`${props.path}/${props.id}`}> {props.price}</Link>
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default WatchCard