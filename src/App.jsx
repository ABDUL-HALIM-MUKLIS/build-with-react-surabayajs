import { IoLogoInstagram } from "react-icons/io";
import { FormLogin } from "./components/formlogin";
import { Header } from "./components/instagram/header";
import { Post } from "./components/instagram/post";
import { StoryList } from "./components/instagram/storylist";
import { Kalkulator } from "./components/kalkulator";
import { ListProduk } from "./components/listproduk";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { GetApi } from "./components/getApi";
import { Navbar } from "./components/navbar";
import { Outlet } from "react-router";
import { LinkTree } from "./components/linktree";

export const styleButton = {
  padding: "12px 24px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "12px",
  width: "100px",
  fontSize: "16px",
};


function App() {
  // const postingan = [1,2,3,4,5,6,7,8,10]
  return (
    <div className="relative flex flex-col min-h-screen gap-3">
      <Navbar /> 
      {/* <FormLogin /> */}
      {/* <ListProduk /> */}
      {/* <Header /> */}
      {/* <StoryList />
      {postingan.map((item, index) => <Post key={index} />)}
      <Navbar /> */}
      {/* <Kalkulator /> */}

      {/* <div className="w-full max-w-md mx-auto my-10 border shadow-xl card border-1">
        <div className="flex flex-col items-center justify-center w-full gap-3 card-body ">
        <div className="avatar">
          <div className="w-24 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button className="w-full btn btn-primary"><CiGlobe size={20}/> web Portfolio</button>
        <button className="w-full btn btn-secondary"><IoLogoInstagram size={20}/> Instagram</button>
        <button className="w-full text-white bg-gray-600 btn"><FaGithub size={20}/> Github</button>
      </div>
        </div> */}


        {/* <GetApi /> */}
        <LinkTree />
      <Outlet />
    </div>
  );
}

export default App