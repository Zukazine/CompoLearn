import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-3 px-3">
      <Link href={'/accordion'} >
        Accordion Component
      </Link>

      <Link href={'/button'} >
        Button Component
      </Link>

      <Link href={'/button'} >
        Cards Component
      </Link>

      <Link href={'/button'} >
        Carousel Component
      </Link>

      <Link href={'/button'} >
        Countdown Component
      </Link>

      <Link href={'/button'} >
        Dropdown Component
      </Link>
    </div>
  );
}
