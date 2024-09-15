import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};



  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded=2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <h3 className={`${styles.heroSubText}`}>Samah Syed</h3>
        <p>Truetiv, 80ft Road, 6th Block, Koramangala, Bengaluru</p>
        <p>Website: <a href="https://www.playbook.com/s/samah-s/uLhssWSzphmySEdXZGZYXE7h/yg4jiNx3to3c3GPm1LREoQKk">All can be viewed on PlayBook</a></p>
        <p>Phone Number: +91 9538607618</p>
          <p>email: ssyed1827@gmail.com</p>
        
        <div className="flex flex-row justify-between">
          <a href="https://www.playbook.com/s/samah-s/uLhssWSzphmySEdXZGZYXE7h/yg4jiNx3to3c3GPm1LREoQKk" target="_blank"><img src="icons/playbook.svg" className="mt-2 h-10 v-10" /></a>
          <a href="https://www.instagram.com/s.amahsyed/" target="_blank"><img src="icons/insta.svg" className="mt-2 h-10 v-10" /></a>
          {/* <a href="https://www.youtube.com/sathvick" target="_blank"><img src="icons/yt.svg" className="mt-2 h-10 v-10" /></a> */}
          <a href="www.linkedin.com/in/samah-syed-43394425a" target="_blank"><img src="icons/linkdin.svg" className="mt-2 h-10 v-10" /></a>
          {/* <a href="https://twitter.com/sathvick" target="_blank"><img src="icons/twitter.svg" className="mt-2 h-10 v-10" /></a> */}
          
        </div>  
      </motion.div>      
      <div>      
      </div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1 )}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />


      </motion.div>

      


    </div>
  )
}

export default SectionWrapper(Contact, "contact")