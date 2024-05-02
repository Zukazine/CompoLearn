'use client'

import { useEffect, useState, useRef } from "react";

const CounterOne = () => {
	const [num, setNum] = useState(0)
	const [tmp, setTmp] = useState(1)
	// const containCount = useRef(0)
	console.log(num)	
	// useInterval(() => {setNum(num + 1)}, 1000)

	// useRef just for ref doang :D
	// containCount.current = num

	// useEffect(() => {	
	// 	const count = setInterval(() => {
	// 		// setNum(pv => pv + 1)
	// 		setNum(num + tmp)
	// 	}, 1000)

	// 	return () => { clearInterval(count) }
	// }, [tmp, num])

 	return ( 
		<div className="grid place-items-center bg-slate-300 h-screen">
			<div className="flex flex-col gap-4 justify-center items-center bg-yellow-300 p-8 rounded-3xl">
			<div className="text-6xl font-mono font-medium">
				{num}
			</div>
			<div className="flex gap-4">
				<button 
					className="flex justify-center items-center text-2xl bg-green-500 rounded-lg px-4 font-bold text-white transition-transform duration-300"
					onClick={() => {setNum(num + 1)}}
					// onClick={() => setNum(containCount.current + 1)}
				>
					+
				</button>
				<button
					className="flex justify-center items-center text-2xl bg-red-500 rounded-lg px-4 font-bold text-white transition-transform duration-300" 
					onClick={() => {setNum(num - 1)}}
					// onClick={() => setNum(containCount.current - 1)}
				>
					-
				</button>
			</div>
			</div>
		</div>
	);
}
 
export default CounterOne;