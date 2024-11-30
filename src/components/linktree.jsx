import { useContext, useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { motion } from "framer-motion"
import { ColorContext } from "../provider/colorProvider";

export const LinkTree = () => {
  const links = [
    { name: "GitHub", url: "https://github.com/ABDUL-HALIM-MUKLIS", icon: <FaGithub size={20} />, class: "bg-primary text-white" },
    { name: "Web Portfolio", url: "https://abdul-halim-muklis.github.io/Portfolio/", icon: <GoGlobe size={20} />, class: "bg-primary text-white" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abdul-halim-muklis-080b4b1a6/", icon: <FaLinkedin size={20} />, class: "bg-primary text-white" },
  ];
  
  const { state, setState } = useContext(ColorContext);
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      {/* buat bg image */}
      {/* <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" } } className="absolute top-0 left-0 w-full h-full bg-center bg-cover blur-lg"></div> */}
      <div className={`z-50 flex flex-col items-center justify-center gap-5 p-20 bg-white border rounded-lg drop-shadow-md w-fit h-fit ${!state && `md:grayscale`}`} onMouseLeave={() => setState(false)} onMouseEnter={() => setState(true)}>
        <motion.div
          className="avatar"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <div className="w-24 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.h2
            className="font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >Abdul Halim Muklis</motion.h2>
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >Full Stack Developer</motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {links.map((link, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-row items-center gap-3 h-[40px] px-3 rounded-full justify-between min-w-[300px] ${link.class}`}
            >
              <div className="w-10">{link.icon}</div>
              <span className="w-full text-center">{link.name}</span>
              <div className="w-10"></div>
            </motion.a>
          ))}
        </motion.div>
        <motion.span
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2023 <span className="font-bold text-black">Halim</span> Build with{" "}
          <span className="font-bold text-black">React</span>
        </motion.span>
      </div>
    </div>
  );
};
