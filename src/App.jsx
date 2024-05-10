import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subtitle from "./components/Subtitle";
import MainRoute from "./routes/route";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
    <div className=" h-screen w-screen flex flex-col items-center justify-between">
      {/* Header Başlangıcı */}
      <Header />
      {/* Subtitle Başlangıcı */}
      <Subtitle title="Popüler Başlıklar"/>
      {/* React Router DOM ile değiştirilen kısım. */}
      <div className=" w-full h-full">
        <MainRoute />
      </div>
      {/* Footer Başlangıcı */}
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
