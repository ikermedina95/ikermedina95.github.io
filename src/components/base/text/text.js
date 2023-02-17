import customHTML from "html-react-parser";

const Text = props => {
  return (
    <>{ customHTML(props.content) }</>
  )
}

export default Text;