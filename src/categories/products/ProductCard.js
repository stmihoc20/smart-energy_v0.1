import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Rating from "@mui/material/Rating/Rating";
import Button from '@mui/material/Button';


export default function ProductCard(props){
    return (
        <div className="card" >
            <img src={props.category.imagePath} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.category.title}</h5>
                <Button variant="contained" disableElevation>
                    <Link to={props.id} relative="path" className="btn btn-primary">Go To Product</Link>
                </Button>
            </div>
            <Rating name="half-rating" defaultValue={4} precision={0.5} readOnly/>
        </div>
    );
}