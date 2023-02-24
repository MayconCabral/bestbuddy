import { Link } from "react-router-dom"

export default function Button(props) {
   return(
    <Link className={props.class} to={props.link}>{props.text}</Link>
   ) 
}
