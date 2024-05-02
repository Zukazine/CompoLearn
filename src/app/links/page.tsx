import Link from "next/link";
import { HoverImageLinks } from "./_components/hoverImage";
import { ClipPathLinks } from "./_components/clipPath";

const LinksPage = () => {
	return ( 
		<>
            <HoverImageLinks />
            <ClipPathLinks />
		</>
	);
}
 
export default LinksPage;