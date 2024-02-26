// MainContent.js

import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function MainContent() {
  const [inputSMS, setInputSMS] = useState("");
  const [result, setResult] = useState(null);

  // const handlePredict = async () => {
  //   // Implement logic to send inputSMS to the server for prediction
  //   // Set the result in the state (result)
  // };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="max-h-screen flex flex-row justify-center mt-5">
        <div className="flex justify-center self-center">
          <div className="mx-auto round-2xl w-100">
            <textarea
              placeholder="Bio"
              rows={4}
              cols={200}
              className="border-4 rounded-lg p-3"
            ></textarea>
            <div className="flex justify-center">
              <button className="btn btn-primary w-19 mt-2">Predict</button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </>
  );
}

export default MainContent;
