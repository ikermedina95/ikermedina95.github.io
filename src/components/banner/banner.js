import Video from '../video/video';
import bannerVideo from '../../assets/video/banner.mp4'

const Banner = () => {
  const bannerClass = 'banner'
  return (
    <div className={bannerClass}>
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