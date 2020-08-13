import React, { useState } from "react"
import styled from "styled-components"
import BGTexture from "../images/gun_metal_@2X.png"
import { useEffect } from "react"
import Logo from "../images/links.png"
import Loader from "../images/loader.svg"

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
`

const Upper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BGTexture});
  background-repeat: repeat;
  border-bottom: 3px solid black;
  position: relative;
  bottom: ${props => (props.shown ? "0px" : "50vh")};
  transition: all 2s ease-in-out;

  img {
    width: 40%;
  }
`

const Lower = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid black;
  background-image: url(${BGTexture});
  background-repeat: repeat;
  position: relative;
  top: ${props => (props.shown ? "0px" : "50vh")};
  transition: all 2s ease-in-out;
`

const Splash = () => {
  const [shown, setShown] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShown(false)
    }, 3000)
  }, [])

  return (
    <FullPage>
      <Upper shown={shown}>
        <img src={Logo} alt="logo" />
      </Upper>
      <Lower shown={shown}>
        {shown ? (
          <div>
            <h2 className="text-primary text-center">Loading...</h2>
            <img src={Loader} alt="loader" width="125" />
          </div>
        ) : (
          ""
        )}
      </Lower>
    </FullPage>
  )
}

export default Splash
