import { db } from './firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';

const colRef = collection(db, "features");
export default async function loadDB(){
    console.log("jello");
    await getDocs(colRef).then((features) => {
        features.docs.map((category) => {
            console.log(category);
            return category;
        })
    });
}
