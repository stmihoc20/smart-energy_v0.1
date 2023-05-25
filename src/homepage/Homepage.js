import { React , useState, useEffect} from 'react';
import Logo from './Logo.js';
import {collection, getDocs} from '@firebase/firestore';
import { db } from '../firebase_setup/firebase'
import {Feature, FeatureTitle } from './Feature.js';

import './Homepage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Homepage(){
  const [featureArray, setFeatureArray] = useState();

  const fetchFeatures = async () => {
    const colRef = collection(db, "features");
    await getDocs(colRef).then((features) => {
      setFeatureArray(features.docs.map((feature) => <Feature key={feature.id} id={feature.id} feature={feature.data()}/>));
    });
  } 
  useEffect(() => {
      fetchFeatures();
  }, []);

    return (
      <>
        <Logo />
        <div className="container px-4 py-5 features">
          <h2 className="pb-2 border-bottom">Why choose us?</h2>

          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <FeatureTitle />

            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                {featureArray}
              </div>     
            </div>
          </div>
        </div>
      </>
    );
}