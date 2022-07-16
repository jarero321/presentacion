import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import logo from './logo.png';
function Loader() {
      const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    },4000)
  },[]);
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
        <AnimatePresence>
      <motion.div
      initial={{height:'50%'}}
      animate={{height:'0%'}}
      transition={{duration:1, delay:3}}
      className="bg-[#F28705] w-full h-[50%] flex flex-col items-center justify-end">
                { loader && <motion.img
        width={'150px'}  
        initial={{opacity:0, y:'-150%'}}
        animate={{opacity:[1,1,1], y:'0%'}}
        transition={{duration:1}}
        exit={{opacity:0}}
        className="text-white text-3xl" src={logo} />}
      </motion.div>
      <motion.div 
      initial={{height:'50%',top:'50%'}}
      animate={{height:'0%', top:'100%'}}
      transition={{duration:1, delay:3}}
      className="bg-[#F28705] w-full h-[50%] flex flex-col items-center justify-start pt-8 absolute">
        { loader && <motion.p
        initial={{opacity:0}}
        animate={{opacity:[0,0,1], y:'0%'}}
        transition={{duration:2}}
        exit={{opacity:0}}
        className="text-white text-xl" style={{fontFamily:'Edu VIC WA NT Beginner, cursive'}} >kiu serĉas ĝin</motion.p>}
      </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Loader;
