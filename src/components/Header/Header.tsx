import Navbar from "./Navbar";
import logoBlack from "../../assets/images/logo-black.png";

export default function Header() {
  return (
    <header className="w-full h-24 bg-blue-400 flex items-center">
      <img src={logoBlack} alt="Website logo" className="h-1/3 mr-auto ml-5" />
      {/* <h1>Website Title</h1> */}
      <Navbar />
    </header>
  );
}
