import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-3 px-3">
      <Link href={'/accordion'} >
        Accordion Component
      </Link>

      <Link href={'/animation'} >
        Animation Stuff
      </Link>

      <Link href={'/button'} >
        Button Component
      </Link>

      <Link href={'/cards'} >
        Cards Component
      </Link>

      <Link href={'/carousels'} >
        Carousel Component
      </Link>

      <Link href={'/countdown'} >
        Countdown Component
      </Link>

      <Link href={'/dropdown'} >
        Dropdown Component
      </Link>

      <Link href={'/others'} >
        Basic Stuff - Others
      </Link>
    </div>
  );
}
