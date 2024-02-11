import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './hero.css'
import 'animate.css'

const Hero = ( {images, headings, tagLines } ) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [exitKey, setExitKey] = useState(null);
  
    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 1,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };
    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };
    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "spring", stiffness: 1000, damping: "10" },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };
  
    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
      setExitKey(currentIndex)
    };
  
    const handlePrevious = () => {
      setDirection("left");
  
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
      setExitKey(currentIndex)
    };
  
    const handleDotClick = (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
      setExitKey(currentIndex)
    };

    // To get text over images
    const line1 = "Headline text"
    const line2 = "Lorem Ipsum text"
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0,
                staggerChildren: 0.08, // speed of letters
                duration: 2, // total delay of animation
            },
            // exit: {
            //     opacity: 0,
            //     scale: 0.8,
            //     transition: {
            //       duration: 0.1,
            //     },
            // },
        },
    }
    const sentenceTL = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 3,
                staggerChildren: 0.15, // speed of letters
                duration: 4, // total delay of animation
            },
            exit: {
                opacity: 0,
                scale: 0.8,
                transition: {
                  duration: 0.1,
                },
            },
        },
    }
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

  return (
 
    <div className="carousel">
        <div className="carousel-images overlay">
            <AnimatePresence>
            <motion.h3 className="load-screen-message" variants={sentence} initial="hidden" animate="visible" key={`heading-${exitKey}`} exit={{opacity: 0, y: -500}}>
                  {headings[currentIndex].split("").map((char, index) => {
                      return (
                          <motion.span key={`character-${char}-${index}`} variants={letter}>
                              {char}
                          </motion.span>
                      )
                  })}
                  <br />
                  </motion.h3>
                  {/* <motion.p className="load-screen-tagline" variants={sentenceTL} initial="hidden" animate="visible" key={currentIndex + "-par"} exit="hidden">
                  {tagLines[currentIndex].split("").map((char, index) => {
                      return (
                          <motion.span key={char + "-" + index} variants={letter}>
                              {char}
                          </motion.span>
                      )
                  })}

              </motion.p> */}
              {/* <h1 className="animate__animated animate__backInUp load-screen-tagline">An animated element</h1> */}


              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                variants={slideVariants}
              />
            </AnimatePresence>
            <div className="slide_direction">
              <motion.div
                variants={slidersVariants}
                whileHover="hover"
                className="left"
                onClick={handlePrevious}
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                >
                    <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
              </motion.div>
              <motion.div
                variants={slidersVariants}
                whileHover="hover"
                className="right"
                onClick={handleNext}
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                >
                    <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
                
              </motion.div>
            </div>
        </div>
  <div className="carousel-indicator">
    {images.map((_, index) => (
      <motion.div
        key={index}
        className={`dot ${currentIndex === index ? "hero-active" : ""}`}
        onClick={() => handleDotClick(index)}
        initial="initial"
        animate={currentIndex === index ? "animate" : ""}
        whileHover="hover"
        variants={dotsVariants}
      ></motion.div>
    ))}
  </div>
</div>

  )
}

export default Hero
