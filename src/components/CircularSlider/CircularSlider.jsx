import CircularSlider from "react-circular-slider-svg";
import { useState } from "react";

const Slider =  () => {
    const [value, setValue1] = useState(20);
    
    return (
      <CircularSlider
        size={200}
        minValue={0}
        maxValue={100}
        startAngle={40}
        endAngle={320}
        angleType={{
          direction: "cw",
          axis: "-y"
        }}
        handle1={{
          value: value,
          onChange: v => setValue1(v)
        }}
       
        arcColor="#690"
        arcBackgroundColor="grey"
      />
    );
  };
  export default Slider;