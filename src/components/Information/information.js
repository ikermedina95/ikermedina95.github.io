import ButtonIcon from "../base/buttons/buttonsIcon/buttonIcon";
import Title from "../base/title/title";

const Information = props => {
  return (
    <div id={props.id} className="bg-light py-4 information">
      <div className="container-fluid container-lg">
        <div className="row">
          {
            <div className="col-12 col-lg-3 offset-lg-1">
              <Title level="2" class="text-uppercase text-start text-lg-left mt-0 custom-h2" content="Contacto" />
            </div>
          }
          {
            <div className="col-12 col-lg-7 button-icon-wrapper">
              <ButtonIcon fontIcon={["fas", "phone"]} text="Teléfono" href="https://wa.me/+5218110821316" />
              <ButtonIcon fontIcon={["fab", "instagram"]} text="Instagram" href="https://www.instagram.com/ciratrpbi/" />
              <ButtonIcon fontIcon={["fab", "whatsapp"]} text="WhatsApp" href="tel:8110821316" />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Information;