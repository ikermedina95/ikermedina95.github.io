import Text from "../../base/text/text";
import Title from "../../base/title/title";

const OneColumn = props => {
  return (
    <div className={ props.class }>
      <div className="container">
      <div className="row justify-content-lg-center">
        <div className="col-xs-12 col-lg-10 px-2 px-lg-0">
          <Title level={ props.titleLevel } class={ props.titleClass } content={ props.titleContent }  />
          <Text content={ props.textContent }/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OneColumn;