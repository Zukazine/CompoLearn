import Link from "next/link";
import { SwipeCarousel } from "./_components/swipeCarousel";
import HorizontalScrollCarousel from "./_components/horizontalCarousel";

const CarouselsPage = () => {
    return ( 
        <>
            <SwipeCarousel />
            <HorizontalScrollCarousel />
        
            <Link href={'/'} >
                <div className="fixed flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link>
        </>
        
    );
}
 
export default CarouselsPage;