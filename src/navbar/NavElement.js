
import { React} from 'react';
import { Link } from 'react-router-dom';

export default function NavElement(props) {
    let imageOrText = props.element.title;
    if(props.element.source !== "")
        imageOrText = <img src = {process.env.PUBLIC_URL + props.element.source} alt={props.element.title}/>;
    
    return (
        <li className= {props.element.className}>
            <Link onClick = {props.onClick} to={props.element.path}>{imageOrText}</Link>
        </li>
    );
}