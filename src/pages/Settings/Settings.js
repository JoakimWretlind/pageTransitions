import React from 'react'
import { Section, Header } from '../styling';
import { motion } from 'framer-motion';

const Settings = () => {

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
        //transition: 'linear'
        duration: .7,
        // type: "spring",
        // stiffnes: 50
        type: "tween",
        // ease: "easeIn"
        //ease: "circInOut"
        // ease: "anticipate"
    }

    return (
        <Section id="settings"
            as={motion.div}
            //   variants={sectionVariant}
            // variants={pageTransition}
            // variants={slideTransition}
            style={{ position: "absolute" }}
            variants={pageVariants}
            transition={pageTrans}
            initial="initial"
            animate="in"
            exit="out"
        >
            <Header>settings</Header>
        </Section>
    )
}

export default Settings
