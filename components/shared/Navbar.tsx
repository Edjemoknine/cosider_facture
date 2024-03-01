import Image from "next/image";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="max-w-6xl bg-blac mx-auto p-6">
      <Image src={"./logo.svg"} alt="logo" width={40} height={40} />
    </div>
  );
};

export default Navbar;
