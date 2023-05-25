import "../Categories.css";
import "./Product.css"
import { React, useEffect, useState } from 'react';
import { db } from '../../firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';
import ProductCard from './ProductCard';

export default function Products(props){
    const [categories, setCategories] = useState();
    useEffect(() => {
        const fetchFeatures = async () => {
            const colRef = collection(db, "features/" + props.category.id + "/products");
            await getDocs(colRef).then((features) => {
                setCategories(features.docs.map((category) => {
                    return <ProductCard key={category.id} category={category.data()} id={category.id} isLoggedIn="isLoggedIn"/>
                }));
            });
        } 
        
        fetchFeatures();
    }, [props.category.id]);
    return (
        <section className="categories">
            <h1 className="default-title">Browse Products</h1>
            <div className="cards">
                {categories}
            </div>
        </section>
    );
}