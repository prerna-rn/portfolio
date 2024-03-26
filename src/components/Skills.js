import Carousel from 'react-multi-carousel';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import colorSharp from "../assets/img/color-sharp.png"
import '../App.css'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  function MyProgressBar({ value }) {
    return (
      <div style={{ width: '150px', height: '150px' }}>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            pathColor: '#836FFF',
            textColor: '#FFF',
            trailColor: '#151515',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
    );
  }

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My toolbox is stocked.<br></br>  Dive into the skills and techniques I utilize to craft impactful and creative projects</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <MyProgressBar value={80} />
                                  <h5 style={{ marginTop: '20px' }}>Front-End <br/>(React, HTML, CSS, JS)</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <MyProgressBar value={60}  />
                                  <h5 style={{ marginTop: '20px' }}>Back-End <br/>(Node.js, PHP)</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <MyProgressBar value={85}  />
                                  <h5 style={{ marginTop: '20px' }}>Machine Learning</h5>
                                </div>
                            </div>
                            <div className="item">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <MyProgressBar value={70}  />
                                  <h5 style={{ marginTop: '20px' }}>UI Design</h5>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
