'use client'

import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BasicFAQ = () => {
	const [open, setOpen] = useState(items[0].id)
	
	return ( 
		<div className="grid place-items-center h-screen">
			<div className="flex flex-col max-w-[720px] border border-slate-300 px-6 py-12 gap-5">
				<span className="text-3xl font-bold">Frequetnly asked questions</span>
					{items.map((item, idx) => {
						return (
							<Tabs q={item.question} par={item.paragraph}/>	
						)
					})}
			</div>
		</div>
	);
}
 
export default BasicFAQ;

const Tabs = ({ q, par }) => {
	return (
		<button className="flex grow justify-between items-center border-b border-slate-300 py-5">
			<span className="max-w-[400px] text-left text-lg font-bold text-purple-950">{q}</span>
			<motion.div
				variants={tabVariants}
			>
			</motion.div>
			<FiChevronDown color="#000000"/>
		</button>
	)
}

const tabVariants = {
	open: {
		width: "100%",
		height: "100%"
	}, 
	close: {
		width: "100%",
		height: "0%"
	}
}

const items = [
	{
		id: 1,
		question: 'Why is the sky blue?',
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
	},
	{
		id: 2,
		question: 'Why did the chicken cross the road?',
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
	},
	{
		id: 3,
		question: 'How many licks does it take to get the center of tootsie pop?',
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
	},
	{
		id: 4,
		question: "Where's Waldo?",
		paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero.',
	},
	
]