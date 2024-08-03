import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import PlayingVideo from "./Components/PlayingVideo";
import Search from "./Components/Search";
import { useAuth } from "./contexts/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {
  const { loading,data } = useAuth();
  console.log(loading,data)
  return (
    <>
         <div>
      {loading && <Loading />}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  
  )
}