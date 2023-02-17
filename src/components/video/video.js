import ReactPlayer from "react-player";

const Video = props => {
  return (
    <ReactPlayer
      url = { props.url }
      muted = { props.muted }
      controls = { props.controls }
      loop = { props.loop }
      playing = { props.autoPlay }
      width = { props.width  }
      height = { props.height }
      light = { props.light }
    />
  );
};

export default Video;