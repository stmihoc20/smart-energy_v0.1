import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Categories from './categories/Categories';
import Products from './categories/products/Products';
import Signup from './login/Signup';
import Footer from './footer/Footer'
import { db } from './firebase_setup/firebase';
import { collection, getDocs } from '@firebase/firestore';
import GuardedRoute from './login/GuardedRoute';
import Login from './login/Login';


function App() {
  const [navbar, setNavbar] = useState(<Navbar key="0"/>);
  const [categories, setCategories] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutUser = () => {
    setNavbar(<Navbar key="0" isLoggedIn={false}/>);
    setIsLoggedIn(false);
  }
  const setCurrentUser = (user) => {
    setNavbar(<Navbar key="0" isLoggedIn={true} logoutUser={logoutUser}/>);
    setIsLoggedIn(true);
  }
  useEffect(() => {
    const fetchFeatures = async () => {
      const colRef = collection(db, "features");
      await getDocs(colRef).then((features) => {
        setCategories(features.docs.map((category) => {
          //colRef2 = collection(db, "features/" + category.id + "/products");
            return (
                <Route 
                      key={category.id}
                      path={"categories/" + category.id} 
                      element = {<Products key={category.id} category={category} isLoggedIn={isLoggedIn}/>} 
                />
            );
        }));
      });
    } 
    fetchFeatures();
  }, [setCategories]);
  return (
      <BrowserRouter>
        {navbar}
        <section className="my-wrapper">
          <Routes>
            <Route path ="/" element={<Navigate to="/homepage"/>} /> 
            <Route path ="/homepage" element={<Homepage />} />
            <Route path ="/categories" element={<Categories/>} />
            {categories}
            <Route element={<GuardedRoute auth={isLoggedIn}/>}>
              <Route path ="/signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
              <Route path ="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
            </Route>
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
  );
}

export default App;