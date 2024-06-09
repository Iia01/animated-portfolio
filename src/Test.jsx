import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Test = () => {

    // const [open, setOpen] = useState(false)

    // const variants = {
    //     visible: {opacity:1, 
    //               x:800, 
    //             //   transition:{type: "spring", stiffness:200, damping:100}
    //              },
    //     hidden:{opacity:0}
    // }

    // var for li #1
    // const variants = {
    //     visible: {opacity:1, 
    //               x:100, 
    //               transition:{ staggerChildren: 0.2 }
    //              },
    //     hidden:{opacity:0}
    // }

    const variants = {
        visible:  (i) => ({opacity:1, 
                  x:100, 
                  transition:{ staggerChildren: 0.2 }
                 }),
        hidden:{opacity:0}
    }

    const items = ["item1", "item2", "item3", "item3", "item4" ]

  return (
    <div className="cource">
        {/* <motion.div 
            className="box" 
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 2, x:200, y:500 }} 
            // transition={{duration: 2, delay: 2}}
            // whileHover={{opacity:0, scale:1}}
            variants={variants}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            drag
        ></motion.div>
        <button onClick={() => setOpen(prev =>!prev)}>Click</button> */}

        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item, i) => (
                <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
            ))}
        </motion.ul>   
    </div>
  )
}
