import Video from '../video/video';
import bannerVideo from '../../assets/video/banner.mp4'

const Banner = () => {
  const bannerClass = 'banner'
  return (
    <div className={bannerClass}>
      <h1 className="visually-hidden" >CIRAT RBPI Monterrey</h1>
      <Video 
        url={ bannerVideo } 
        controls = { true } 
        muted = { true } 
        autoPlay = { true } 
        loop = { true } 
        width = "100%" 
        height = "auto"/>
    </div>
  )
}

export default Banner;