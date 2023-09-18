import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="w-screen h-screen z-50 absolute flex items-center justify-center">
      <div className="text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 50 ,opacity:0}}
          animate={{ y: 0 ,opacity:1}}
          transition={{ duration: 1}}
          className="text-3xl font-bold text-blue-600"
        >
          Olecons Assignment Solution
        </motion.h2>

        <motion.div
           initial={{ y: 50 ,opacity:0}}
           animate={{ y: 0 ,opacity:1}}
          transition={{ duration: 1}}
          className="flex gap-3 mt-5 justify-center"
        >
          {/* Get Started button */}
          <Link to={"/home"}>
            <Button title={"Get Started"} />
          </Link> 
          {/* View Code button */}
          <a
            href="https://github.com/03brainy-clicks/olecons-assesment"
            target="_blank"
            rel="noreferrer"
          >
            <Button title={"View Code"} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
