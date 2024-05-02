import Link from "next/link";
import HamburgerButton from "./_components/hamburgerButton";
import EncryptButton from "./_components/encryptButton";
import DottedButton from "./_components/dottedButton";
import SpotlightButton from "./_components/spotlightButton";
import NeuromorphismButton from "./_components/neuromorphButton";
import DrawOutlineButton from "./_components/drawlineButton";
import NeuButton from "./_components/neubrutalismButton";

const ButtonPage = () => {
    return ( 
        <>
            <HamburgerButton />
            <EncryptButton />
            <DottedButton />
            <SpotlightButton />
            <NeuromorphismButton />
            <DrawOutlineButton />
            <NeuButton />

            {/* <Link href={'/'} >
                <div className="fixed flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link> */}
        </>
        
    );
}
 
export default ButtonPage;