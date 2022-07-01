import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const ProjectDetailsVideo = ({videoBackground, videoId, videoType}) => {
    const [isOpen, setOpen] = React.useState(false);
    React.useEffect(() => {
      console.clear();
    }, []);
    return (
      <section>
        <h2 style={{display: 'none'}}> &nbsp; </h2>
        <div className="container-fluid">
          <div
            className="video-wrapper section-padding bg-img parallaxie valign"
            style={{ backgroundImage: `url(${videoBackground})` }}
            data-overlay-dark="4"
          >
            <div className="full-width text-center">
              {typeof window !== "undefined" && (
                <ModalVideo
                  channel="vimeo"
                  autoplay
                  isOpen={isOpen}
                  videoId="127203262"
                  onClose={() => setOpen(false)}
                />
              )}
              <a
                className="vid"
                href={`https://${videoType == "vimeo" ? 'vimeo' : null}.com/${videoId}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                <div className="vid-butn">
                  <span className="icon">
                    <i className="fas fa-play"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ProjectDetailsVideo
