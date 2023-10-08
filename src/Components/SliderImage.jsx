import React from 'react';

function SliderImage() {
  return (
    <div>
      <div id="carouselExampleDark" data-bs-ride="carousel" className="carousel carousel-dark slide">
        <div className="carousel-indicators" >
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{height:'350px'}}>
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/06a74af080f061b4.jpg"
              className="d-block w-100"
              alt="..."
              height={'350px'}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/84ae27f93c14a4e3.jpg"
              className="d-block w-100"
              alt="..."
              height={'350px'}
            />
            
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5df65ad101e18dbf.jpg"
              className="d-block w-100"
              alt="..."
              height={'350px'}
            />
            
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default SliderImage;
