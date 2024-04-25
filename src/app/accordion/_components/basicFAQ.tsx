'use client'

import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BasicFAQ = () => {
	const [open, setOpen] = useState(items[0].id)
	
	return ( 
		<>
			<section className=" bg-white ">
				<div className="py-10 flex flex-col items-center border-[1px] border-black/30">
					<p className="text-3xl font-bold">Frequently ask questions</p>
				</div> 
			</section>
		</>
	);
}
 
export default BasicFAQ;

const Panel = ({ open, setOpen, id, question, paragraph}) => {
	const s = 0;

	return (
		<>
			<button className="bg-white">

			</button>
		</>
	) 
}

const panelVariants = {
	open: {
		width: "100%",
		height: "100%",
	},
	closed: {
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