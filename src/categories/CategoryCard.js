import { React } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard(props){

    return (
        <div className="card" >
            <img src={props.category.imagePath} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.category.title}</h5>
                <p className="card-text">{props.category.description}</p>
                <Link to={props.id} relative="path" className="btn btn-primary">Enter category</Link>
            </div>
        </div>
    );
}