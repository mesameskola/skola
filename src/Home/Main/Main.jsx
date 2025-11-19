// "use client";
import { useState } from 'react';
import surati1 from "../../Image/image_files/image.jpg";

const Main = () => {
    
  const [surati, setSurati] = useState(false);


  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div
        className="relative w-96 h-96 "
        onMouseEnter={() => setSurati(true)}
        onMouseLeave={() => setSurati(false)}
      >
        {surati ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold p-8 text-center transition-all duration-300">
            <p>გადაიტარე მაუსი აქ და ნახავ სურათს!</p>
          </div>
        ) : (
          <img
            src={surati1}
            alt="Mountain Landscape"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
          />
        )}
      </div>
    </div>
  );
}

export default Main;

