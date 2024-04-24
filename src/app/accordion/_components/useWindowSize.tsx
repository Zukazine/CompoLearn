import { useEffect, useState } from "react";

export const useWindowSizeOne = () => {
	const [windowSize, setWindowSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	
	return windowSize
}

// export const useWindowSizeTwo = () => {
// 	const [windowSize, setWindowSize] = useState({
// 		width: 0,
// 		height: 0,
// 	})

// 	useEffect(() => {
// 		function handleResize(){
// 			width: window.inner
// 		}
// 	})
// }