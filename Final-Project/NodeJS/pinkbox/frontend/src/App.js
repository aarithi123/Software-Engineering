import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Movie from "./Pages/Movie";
import Footer from "./Components/Footer/Footer";
import MovieCategory from "./Pages/MovieCategory";
import genre_banner from "./Components/Assets/banner.png";
import LoginSignup from "./Pages/LoginSignup";
import Checkout from './Components/Checkout/Checkout';

export const backend_url = 'http://localhost:4000';
export const currency = '$';

console.log("App.js");

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop genre="all" />} />
          <Route path="/Animation" element={<MovieCategory banner={genre_banner} category="Animation" />} />
          <Route path="/Drama" element={<MovieCategory banner={genre_banner} category="Drama" />} />
          <Route path="/Action" element={<MovieCategory banner={genre_banner} category="Action" />} />
          <Route path="/Comedy" element={<MovieCategory banner={genre_banner} category="Comedy" />} />
          <Route path="/Horror" element={<MovieCategory banner={genre_banner} category="Horror" />} />
          <Route path="/Romance" element={<MovieCategory banner={genre_banner} category="Romance" />} />
          <Route path="/Fantasy" element={<MovieCategory banner={genre_banner} category="Fantasy" />} />
          <Route path="/Mystery" element={<MovieCategory banner={genre_banner} category="Mystery" />} />
          <Route path='/movie' element={<Movie />}>
            <Route path=':movieId' element={<Movie />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
