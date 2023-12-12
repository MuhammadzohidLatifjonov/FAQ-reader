import React, { useState, useEffect } from "react";

import Header from "./main/Header";
import "./main/faq.css";
import alanBtn from "@alan-ai/alan-sdk-web";

import { ChakraProvider } from "@chakra-ui/react";
import Faq from "./main/Faq";

function App() {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    alanBtn({
      key: "5c0f240e315575219b931fb88f8e7bcd2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "gotoFaq") {
          setIndex(commandData.faqId - 1);
        }
      },
    });
  }, []);

  return (
    <>
      <Header />
      <div className="alan-btn"></div>
      <ChakraProvider>
        <Faq index={index} setIndex={setIndex} />
      </ChakraProvider>
    </>
  );
}

export default App;
