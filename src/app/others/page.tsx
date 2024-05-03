import Link from "next/link";
import CounterOne from "./_component/counterOne";
import SearchOne from "./_component/searchOne";
import CreationOne from "./_component/creationOne";
import AnimateOne from "./_component/animateOne";

const DropwdownPage = () => {
	return ( 
		<>
		
			<AnimateOne /> 
			<CounterOne />
			<SearchOne />
			<CreationOne />

			<Link href={'/'} >
				<div className="fixed flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
					Back
				</div>
			</Link>
		</>
	);
}
 
export default DropwdownPage;