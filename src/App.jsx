import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";
import MainRoute from "./routes/route";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useLocation } from "react-router-dom";
function App() {
  const path = useLocation().pathname;
  return (
    <Provider store={store}>
      <div
        className={`${
          path === "/" ? "h-screen w-auto" : "h-auto w-auto"
        } flex flex-col items-center justify-between`}
      >
        {/* Header Başlangıcı */}
        <Header />
        {/* Subtitle Başlangıcı */}
        <Subtitle title="Popüler Başlıklar" />
        {/* React Router DOM ile değiştirilen kısım. */}
        <div className=" w-full h-full md:px-20 px-10">
          <MainRoute />
        </div>
        {/* Footer Başlangıcı */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
