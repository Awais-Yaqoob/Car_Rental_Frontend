import { useState, useEffect } from "react";
import CarBox from "./CarBox";
import axios from "axios";
//import  DataFun from "./CarData";

function PickCar() {
  const [active, setActive] = useState(0);
  const [colorBtn, setColorBtn] = useState(0);
  const [carIndex, setCarIndex] = useState(0);
  const [carCategory, setCarCategory] = useState([]);
  const [categoryName,setCategoryName] = useState("");


  const [carData, setCarData] = useState([]);



  useEffect(() => {

    axios.get("http://localhost:3000/cars")
      .then((response) => {
        // console.log(response.data);
        setCarData(response.data);
        //console.log(carType);
      })

    // if (carData.length > 0) {
    //   setActive(carData[0].id);
    // }


  }, []);





  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };
  const [filteredData,setFilteredData] = useState([]);

  useEffect(() => {
    const newFilteredData = [];
  carData.forEach(element => {
    
    const model = element.Model;

    if (!newFilteredData[model]) {
      // If the array doesn't exist, create a new one
      newFilteredData[model] = [element];
    } else {
      // Push the current element to the existing array for this model
      newFilteredData[model].push(element);
    }
  });
  setFilteredData(newFilteredData);
}, [carData]);

const changeCategory = (name) => {
  // Find the key that has the targetName
const foundKey = Object.keys(filteredData).find(key => {
  return filteredData[key].some(element => element.name === name);
});

// If a key is found, setCarCategory to that key
if (foundKey) {
  const categoryData = filteredData[foundKey];
  setCarCategory(categoryData);
  setCarIndex(0);
  setCategoryName(name);
  console.log('this is : ',filteredData[foundKey]);
} else {
  // Handle the case when the name is not found
  console.log(`No category found with the name ${name}`);
}
}
  console.log('this is carCategory', carCategory);
  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div style={{width:'30%',display:'unset',marginBottom:'3%'}} className="pick-box">
            {Object.entries(filteredData).map((key1, index) => (
                <button
                  key={index}
                  className={categoryName == key1[1][0].name ? 'colored-button' : ''}
                  onClick={() => {
                    changeCategory(key1[1][0].name)
                  }}
                  style={{marginRight:'1%'}}
                >
                  {key1[0]}
                </button>
              ))}
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box" style={{width:'30%'}}>
              {carCategory.map((key, innerIndex) => (
                    <button
                      key={innerIndex}
                      className={`${coloringButton(key.id)}`}
                      onClick={() => {
                        setActive(key.id);
                        btnID(key.id);
                        setCarIndex(innerIndex);
                      }}
                    >
                      {key.name}
                    </button>
                  ))}
              </div>


              {carCategory.length > 0 ? <CarBox data={carCategory} carID={carIndex} /> : ''}
              {/* {active === "SecondCar" && <CarBox data={carData} carID={1} />}
              {active === "ThirdCar" && <CarBox data={carData} carID={2} />}
              {active === "FourthCar" && <CarBox data={carData} carID={3} />}
              {active === "FifthCar" && <CarBox data={carData} carID={4} />}
              {active === "SixthCar" && <CarBox data={carData} carID={5} />} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
