import Link from "next/link";
import HamburgerButton from "./_components/hamburgerButton";
import EncryptButton from "./_components/encryptButton";
import DottedButton from "./_components/dottedButton";
import SpotlightButton from "./_components/spotlightButton";

const ButtonPage = () => {
    return ( 
        <>
            <HamburgerButton />
            <EncryptButton />
            <DottedButton />
            <SpotlightButton />

            <Link href={'/'} >
                <div className="flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link>
        </>
        
    );
}
 
export default ButtonPage;