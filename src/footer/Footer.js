import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © SmartEnergySystems ${year}`}</footer>;
  };
export default Footer;
