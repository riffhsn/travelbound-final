import React from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import WhyTravelbound from "./components/WhyTravelbound";
import Services from "./components/Services";
import Counter from "./components/Counter";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

const slides = [
  "./images/chalanbeel3.png",
  "./images/rajshahi streets.jpg",
  "./images/santaltribe.png",
]

function App() {
return (
  <div>
<Navbar/>
<Aboutus/>
<WhyTravelbound/>
<div className="flex justify-center items-center h-150 bg-white">
  <div className="max-w-lg">
<Services>
  </Services>
  </div>
  </div>
<Counter/>
<Partners/>
<Footer/>
  </div>
  );
}

export default App;
