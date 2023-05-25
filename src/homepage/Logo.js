import { React } from 'react';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {

  useEffect(() => {
    const handleScroll = () => {
      let logo = document.querySelector("#logo");
      const marginOffset =  getComputedStyle(logo).getPropertyValue("--global-margin-wrapper");
      if(window.scrollY > 200){
        logo.style.width = getComputedStyle(logo).getPropertyValue("--small-width");
        let marginLeft = parseInt(window.innerWidth) - parseInt(logo.style.width) - parseInt(marginOffset);
        logo.style.marginLeft = marginLeft + "px";
        logo.style.top = 0;
        logo.style.opacity = 0;
      }
      else{
        logo.style.width = getComputedStyle(logo).getPropertyValue("--my-width");
        logo.style.marginLeft = getComputedStyle(logo).getPropertyValue("--my-margin-left");
        logo.style.top =  getComputedStyle(logo).getPropertyValue("--vertical-center");
        logo.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content">
      <Link to="/homepage">
        <img id = "logo" src="images/logo@2x.png" alt="logo"/>
      </Link>
    </div>
  );
}