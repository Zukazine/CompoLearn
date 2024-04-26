import Link from "next/link";
import HoverTiltCard from "./_components/hoverTiltCard";
import SquishyCard from "./_components/squishyCard";
import HoverDevCards from "./_components/navigationCard";

const CardsPage = () => {
    return ( 
        <>
            <HoverTiltCard />
            <SquishyCard />
            <HoverDevCards />

            <Link href={'/'} >
                <div className="fixed flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link>
        </>
        
    );
}
 
export default CardsPage;