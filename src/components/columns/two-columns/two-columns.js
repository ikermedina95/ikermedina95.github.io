import Video from "../../video/video";
import introVideo from '../../../assets/video/banner.mp4';
import imageBg from "../../../assets/image/cirat-trash.png";

const TwoColumns = props => {
  return (
    <div id={ props.id } className="row mb-4 mb-lg-10">
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <div className="bg-primary box py-4 px-2 px-lg-5">
          <p className="h3 text-white font-titiliumWeb fw-normal text-center text-lg-start">
            Agregando <span className="custom-transform">Valor <br />
            Con Asesoría <br />
            En el Manejo <br />
            De </span>R.P.B.I.
          </p>
        </div>
      </div>

      <div className="col-12 col-lg-6 half-2">
        <div className="image-box">
          <Video 
            url = { introVideo } 
            controls = { true } 
            muted = { false } 
            autoPlay = { false } 
            loop = { false }
            width = "100%" 
            height = "auto"
            light = {<img src={ imageBg } alt='CIRAT R.P.B.I.' width="100%" /> }
            />
        </div>
      </div>
    </div>

  )
}

export default TwoColumns;