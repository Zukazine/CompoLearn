import Link from "next/link";
import { ShiftingDropDown } from "./_components/shiftingDropdown";
import StaggeredDropDown from "./_components/staggeredDropdown";
import FlyoutLink from "./_components/flyoutLink";

const DropwdownPage = () => {
    return ( 
        <>
            <ShiftingDropDown />
            <StaggeredDropDown />
            <FlyoutLink />

            <Link href={'/'} >
                <div className="fixed flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link>
        </>
        
    );
}
 
export default DropwdownPage;