import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import image_left from "../Assets/images/left.png";
import image_Bottom from "../Assets/images/bottom.png";

const MikoRobo = (props) => {
  const { unityProvider, isLoaded, loadingProgression, sendMessage } =
    useUnityContext({
      loaderUrl: "Build/iteration17.loader.js",
      dataUrl: "Build/iteration17.data",
      frameworkUrl: "Build/iteration17.framework.js",
      codeUrl: "Build/iteration17.wasm",
    });
  const loadingPercentage = Math.round(loadingProgression * 100);
  function handleClickSpawnEnemies() {
    sendMessage("ExpressionReader", "RunAnimation");
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* left image */}
          <div className="col-md-12">
            <p className="text-center miko_text ">Miko Expression </p>
          </div>
          <div className="col-md-6 border_ p-2">
            <img src={image_left} alt="" height={"480px"} width={"100%"} />
          </div>

          {/* Miko model */}
          <div className="col-md-6  border_ p-2">
            <div className="container">
              {isLoaded === false && (
                <div className="loading-overlay">
                  <p>Loading... ({loadingPercentage}%)</p>
                </div>
              )}
              <Unity
                className="unity"
                unityProvider={unityProvider}
                style={{
                  width: "100%",
                  height: "460px",
                }}
              />
              <button className="btn btn-primary">Start</button>
            </div>
          </div>
          {/* Bottom Image */}
          <div className="col-md-12 border_ p-2">
            <img src={image_Bottom} alt="" height={"100%"} width={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MikoRobo;
