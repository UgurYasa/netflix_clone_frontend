import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";
import MainRoute from "./routes/route";
function App() {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-between">
      <Header />
      <Subtitle title="Popüler Başlıklar"/>
      <div className=" w-full h-full">
        <MainRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
