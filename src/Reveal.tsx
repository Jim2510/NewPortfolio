import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: 'fit-content' | '100%';
}

export const Reveal = ({children, width = 'fit-content'}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible');
            slideControls.start('visible');
        }
    },
    [isInView])
    
    return (
        <div 
        ref={ref}
        style={{position: 'relative', width, overflow:'hidden'}}>
            <motion.div
            variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.7, delay: 0.25
            }}
            >
                {children}
                </motion.div>
                <motion.div
                variants={{
                  hidden: { left: 0 },
                  visible: { left: '100%' },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{
                  duration: 0.7, ease: 'easeIn'
                }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: '#00917c',
                    zIndex: 20,
                }}
              />
        </div>
    );
};
