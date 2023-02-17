import Icons from "../../base/icons/icons";
import Title from "../../base/title/title";
import Text from "../../base/text/text";

const ThreeColumns = props => {

  return (
    <div id={ props.id } className="row">
      {Object.values(props.content).map((column, index) => (
        <div key={index} className="col-12 col-lg-4">
          <div className="text-center mt-2 my-lg-3 mb-lg-0" ><Icons key={column.keyIcon} content={column.icon} width={column.width} /></div>
          {column.title ? <Title key={ column.keyTitle } level="6" content={ column.title } class={ column.class }/> : ""}
          {column.text ? <Text key={ column.keyText } content={ column.text } /> : ""}
        </div>
      ))}
    </div>
  )
}

export default ThreeColumns;