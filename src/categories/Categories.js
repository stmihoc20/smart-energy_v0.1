import { React, useEffect, useState } from 'react';
import './Categories.css';
import CategoryCard from './CategoryCard';
import { db } from '../firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';

export default function Categories(){
    const [categories, setCategories] = useState();

    const fetchFeatures = async () => {
        const colRef = collection(db, "features");
        await getDocs(colRef).then((features) => {
            setCategories(features.docs.map((category) => {
                return <CategoryCard key={category.id} category={category.data()} id={category.id}/>
            }));
        });
    } 
    useEffect(() => {
        fetchFeatures();
    }, []);
    return (
        <section className="categories">
            <h1 className="default-title">Browse Categories</h1>
            <div className="cards">
                {categories}
            </div>
        </section>
    );
}