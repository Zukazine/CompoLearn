import Link from "next/link";
import HamburgerButton from "./_components/hamburgerButton";
import EncryptButton from "./_components/encryptButton";

const ButtonPage = () => {
    return ( 
        <>
            <HamburgerButton />
            <EncryptButton />
            
            <Link href={'/'} >
                <div className="flex items-center justify-center w-[5vw] h-[5vh] border-red-500 border-2 hover:bg-red-200 hover:bg-opacity-50">
                    Back
                </div>
            </Link>
        </>
        
    );
}
 
export default ButtonPage;