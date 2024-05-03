'use client'

import { motion } from "framer-motion";

const AnimateOne = () => {
	return (  
		<div className="h-screen grid-cols-2 grid-rows-2 place-items-center grid ">
			<motion.div 
				initial="initial"
				whileHover="animate"
				animate="initial"
				className="flex relative items-center justify-center overflow-hidden pointer-events-auto"	
			>
				<motion.div 
					variants={blockMotion}
					className="absolute inset-0 bg-black"
				/>
				<motion.p variants={textMotion} className="text-6xl px-4 py-1 font-bold inset-0 relative">
					BLACK
				</motion.p>
			</motion.div>

			<div className="text-6xl px-4 py-1 font-bold inset-0 relative">
				HaI
			</div>

			<div>
				HaI
			</div>

			<div>
				HaI
			</div>
		</div>
	);
}

export default AnimateOne;

const blockMotion = {
	initial: {
		x: "-101%",
		transition: {
			duration: 0.2, 
			type: 'tween',
			ease: 'linear'
		}
	},
	animate: {
		x: 0,
		transition: {
			duration: 0.2, 
			type: 'tween',
			ease: 'linear'
		}
	}
}

const textMotion = {
	initial: {
		color: "#00000",
		transition: {
			// delay: 0.2, 
			duration: 0.2,
			type: 'tween',
			ease: 'linear'
		}
	},
	animate: {
		color: "#FFFFFF",
		transition: {
			// delay: 0.2, 
			duration: 0.2,
			type: 'tween',
			ease: 'linear'
		}
	}
}