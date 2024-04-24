import Link from "next/link";
import VerticalAccordion from "./_components/verticalAccordion";

const AccordionPage = () => {
	return ( 
		<>
			<VerticalAccordion />

			<Link href={'/'} >
				<div className="flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
					Back
				</div>
			</Link>


		</>
	);
}
 
export default AccordionPage