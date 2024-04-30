'use client'

import { useEffect, useState, useRef } from "react";
import { IoConstructOutline } from "react-icons/io5";

const CounterOne = () => {
	const [num, setNum] = useState(0)
	console.log(num)	
	useInterval(() => {setNum(num + 1)}, 1000)

	return ( 
		<div className="grid place-items-center bg-slate-300 h-screen">
			<div className="text-lg ">
				{num}
			</div>
		</div>
	);
}
 
export default CounterOne;

const useInterval = ( callback,  delay ) => {
	const savedCallback = useRef()
	
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		let id = setInterval(() => {
			savedCallback.current
		}, delay)

		return () => clearInterval(id)
	}, [delay])
}