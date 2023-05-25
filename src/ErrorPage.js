import {useEffect} from 'react'
import { redirect } from 'react-router-dom'
export default function ErrorPage() {

  useEffect(()=>{
    const loader = () => {
      redirect("/homepage");
    };
    loader();
  }, []);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}