'use client'

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";


const SearchOne = () => {
	return ( 
		<div className="grid place-items-center h-screen bg-indigo-500/75">
			<div className="flex flex-col gap-5 justify-center items-center">
				<Search />
				<div className="w-[98.65vw] flex py-4 bg-clip-content gap-5 overflow-hidden">
					<div className="sliding">
						<CardRow values={items}/>
					</div>
					<div className="sliding">
						<CardRow values={items}/>
					</div>
					<div className="sliding">
						<CardRow values={items}/>
					</div>
					<div className="sliding">
						<CardRow values={items}/>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default SearchOne;

const Search = () => {
	return (
		<div className="w-[400px] h-8 bg-white rounded-full flex items-center justify-between">
			<input type="text" placeholder="Search" className="text-sm pl-4 flex w-[350px] h-8 bg-transparent focus:outline-none" />
			<div className="flex items-center justify-center px-4 ">
				<FiSearch color="grey"/>
			</div>	
		</div>
	)
}

const CardRow = ({ values }) => {
	return (
		<>
			<div className="flex gap-5">
				{values.map((item, idx) => {
					return (
						<Card key={idx} {...item}/>
					)
				})}
			</div>
		</>
	)
}

const Card = ( {nama, desc} ) => {
	return (
		<div className="flex shrink-0 bg-white w-64 h-32 rounded-xl shadow-[4px_4px_3px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
			<div className="flex flex-col p-3 gap-1">
				<span className="font-bold text-lg">{nama}</span>
				<p className="line-clamp-3">{desc}</p>
			</div>
		</div>
	)
}

const items = [
	{
		nama: "Gapura Ancur",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Peradaban Berputar",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Seribu Kali",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Tindas Habis",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Gapura Ancur",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Peradaban Berputar",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Seribu Kali",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Tindas Habis",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Gapura Ancur",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Peradaban Berputar",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Seribu Kali",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Tindas Habis",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Gapura Ancur",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Peradaban Berputar",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Seribu Kali",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Tindas Habis",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Gapura Ancur",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Peradaban Berputar",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Seribu Kali",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
	{
		nama: "Tindas Habis",
		desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"	
	},
]