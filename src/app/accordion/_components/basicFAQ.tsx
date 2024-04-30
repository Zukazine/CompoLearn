'use client'

import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BasicFAQ = () => {
	const [open, setOpen] = useState(items[0].id)
	
	return ( 
		<div>
			<div>

			</div>
		</div>
	);
}
 
export default BasicFAQ;

const 

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