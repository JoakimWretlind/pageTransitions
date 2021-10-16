import React from 'react'
import { Section, Header } from '../styling';
import { motion } from 'framer-motion';

const About = () => {

    const sectionVariant = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const pageTransition = {
        in: { y: 0 },
        out: { y: "-100vh" }
    }

    const slideTransition = {
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "-100vw",
            scale: 0.8
        }
    }

    const pageVariants = {
        initial: {
            opacity: 0,
            x: "-100vw",
            scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "100vw",
            scale: 1.2
        }
    }

    const pageTrans = {
        duration: .7,
        type: "tween",
        //   ease: "anticipate"
    }

    return (
        <Section id="about"
            as={motion.div}
            style={{ position: "absolute" }}
            //   variants={sectionVariant}
            // variants={pageTransition}/
            // variants={slideTransition}
            variants={pageVariants}
            transition={pageTrans}
            initial="initial"
            animate="in"
            exit="out"
        >
            <Header>About</Header>
        </Section>
    )
}

export default About
