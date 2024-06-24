import { Link } from "react-router-dom"

const Card =(props)=> {

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`/images/${props.imgUrl}`} alt={props.name} className="img-fluid image card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`${props.path}}/${props.id}`}>
                            {props.name} 
                            {props.price}
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Card