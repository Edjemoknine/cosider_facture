import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-6xl bg-blac mx-auto p-6">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"./logo.svg"} alt="logo" width={40} height={40} />
        </Link>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
