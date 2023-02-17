import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../../text/text";


const ButtonIcon = props => {
  return (
    <a href={props.href} className="btn btn-primary btn-icon" >
      <FontAwesomeIcon icon={props.fontIcon} />
      <span><Text content={props.text} /></span>
    </a>
  )
}

export default ButtonIcon;