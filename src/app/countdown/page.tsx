import Link from "next/link";
import ShiftingCountdown from "./_components/shitfingCountdown";

const CountdownPage = () => {
    return ( 
        <>
            <ShiftingCountdown />

            <Link href={'/'} >
                <div className="fixed flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link>
        </>
        
    );
}
 
export default CountdownPage;