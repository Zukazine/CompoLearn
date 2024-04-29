import React from "react";
import { 
	FiCreditCard, 
	FiMail, 
	FiUser, 
	FiUsers 
} from "react-icons/fi";

const Card = ({
	title,
	subtitle,
	Icon, 
	href
}) => {
	return (
		<a
			href={href}
			className="
				relative group w-full p-4 overflow-hidden 
				rounded-border-[1px] border-slate-300 bg-white"
		>
			<div className="
				absolute inset-0
				bg-gradient-to-r from-violet-600 to-indigo-600 
				translate-y-[100%] group-hover:translate-y-[0%]
				
				transition-transform duration-300
				"
			/>
			<Icon className="
				absolute z-10 -top-12 -right-12 
				text-9xl text-slate-100 group-hover:text-violet-600
				group-hover:rotate-12

				transition-transform duration-300
			"/>
			<Icon className="
				relative z-10 mb-2 
				text-2xl text-violet-600 group-hover:text-white

				transition-colors duration-300
			"/>
			<h3 className="
				relative z-10
				font-medium text-lg text-slate-950 group-hover:text-white 

				duraiton-300
			">

				{title}
			
			</h3>
			<p className="
				relative z-10 
				text-slate-400 group-hover:text-violet-200
			
				duration-300
			">

				{subtitle}
			
			</p>
		</a>
	)
}