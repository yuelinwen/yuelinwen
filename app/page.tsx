import Image from "next/image";
import { prefix } from "../util/prefix";

export default function Home() {

  return (
    <div>
    Hello! yuelinwen 
    `what is my bath path?
        <Image
          className="dark:invert"
          src={`${prefix}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    </div>
  );
}
