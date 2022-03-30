import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Skills from "./Skills/Skills";

const Home = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);
  return (
    <div className="home-body">
      <div className="home-header">
        <div className="row">
          <div className="col-lg-6 p-4">
            <div className="home-title">
              <h2 className=" text-center mt-4"> Wellcome </h2>
              <div className="row p-2 display-flex">
                <div className="col-lg-6  item-1">
                  <div className="text-write-body-1">
                    <h4 className="type-writer-text">
                      Hi..I am
                      <span>
                        <Typewriter
                          options={{
                            strings: [
                              "Joysen Kumar Roy",
                              "Mern Stack Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6  item-2">
                  <div className="text-write-body-2">
                    <div className="img-file mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-4">
            <div className="my-image">
              <div className="my-img-div" ref={confettiRef}>
                <Confetti width={width} height={height}></Confetti>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
    </div>
  );
};

export default Home;
