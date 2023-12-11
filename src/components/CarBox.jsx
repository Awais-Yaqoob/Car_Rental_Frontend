import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  console.log('this is adta ',data);
  return (
    <>
      {data.length > 0 && <div key={carID} className="box-cars">
        {/* car */}
        <div className="pick-car">
          {carLoad && <span className="loader"></span>}
          <img
            style={{ display: carLoad ? "none" : "block" }}
            src={data && data[carID].image}
            alt="car_img"
            onLoad={() => setCarLoad(false)}
          />
        </div>
        {/* description */}
        <div className="pick-description">
          <div className="pick-description__price">
            <span>${data && data[carID].rentperday}</span>/ rent per day
          </div>
          <div className="pick-description__table">
            <div className="pick-description__table__col">
              <span>Model</span>
              <span>{data && data[carID].Model}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Mark</span>
              <span>{data && data[carID].Mark}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Year</span>
              <span>{data && data[carID].Years}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Doors</span>
              <span>{data && data[carID].Doors}</span>
            </div>

            <div className="pick-description__table__col">
              <span>AC</span>
              <span>{data && data[carID].AC}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Transmission</span>
              <span>{data && data[carID].Transmission}</span>
            </div>

            <div className="pick-description__table__col">
              <span>Fuel</span>
              <span>{data && data[carID].Fuel}</span>
            </div>
          </div>
          {/* btn cta */}
          <a className="cta-btn" href="#booking-section">
            Reserve Now
          </a>
        </div>
      </div>}
          </>
  );
}

export default CarBox;
