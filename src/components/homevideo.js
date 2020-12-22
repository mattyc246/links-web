import {
  faPause,
  faPlayCircle,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useRef } from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
  width: 100%;
  position: relative;

  video {
    width: 100%;
  }
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;

  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 58px;
  }

  svg {
    color: white;
    cursor: pointer;
    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover {
      color: #2b2727;
      transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  .scrolly {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .scrolly {
      display: block;
      text-align: center;

      .bouncy {
        position: relative;
        animation: bounce 0.5s infinite alternate-reverse;
      }
    }
  }
`

const HomeVideo = ({ url }) => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setIsPlaying(true)
    videoRef.current.play()
  }

  const handlePause = () => {
    setIsPlaying(false)
    videoRef.current.pause()
  }

  return (
    <VideoContainer>
      <video
        ref={videoRef}
        src={url}
        {...(isMuted ? { muted: true } : { muted: false })}
      ></video>
      <Overlay>
        {isPlaying ? (
          " "
        ) : (
          <FontAwesomeIcon
            className="play-btn"
            onClick={() => handlePlay()}
            icon={faPlayCircle}
          />
        )}
        <div className="scrolly w-100 d-flex justify-content-between">
          {isPlaying ? (
            <FontAwesomeIcon onClick={() => handlePause()} icon={faPause} />
          ) : (
            <div />
          )}
          <div />
          {isMuted ? (
            <FontAwesomeIcon
              onClick={() => setIsMuted(false)}
              icon={faVolumeMute}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setIsMuted(true)}
              icon={faVolumeUp}
            />
          )}
        </div>
      </Overlay>
    </VideoContainer>
  )
}

export default HomeVideo
