import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./components/slider/CustomSlider";
import Rowproduct from "./components/rowProduct/rowProduct";
import ColumnProduct from "./components/columnProduct/columnProduct";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header/>
      <Navigation/>
      <CustomSlider/>
      <Rowproduct/>
      <ColumnProduct/>
      <Footer/>
    </>
  );
}

export default App;
