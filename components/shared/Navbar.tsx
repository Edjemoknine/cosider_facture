import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="max-w-6xl bg-blac mx-auto p-6">
      <div className="flex justify-between items-center">
        <Image src={"./logo.svg"} alt="logo" width={40} height={40} />
        <Sun />
      </div>
    </div>
  );
};

export default Navbar;
