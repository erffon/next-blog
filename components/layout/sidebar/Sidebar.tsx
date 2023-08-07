import Image from "next/image";

interface ISidebar {
  className?: string;
}

const Sidebar: React.FC<ISidebar> = ({ className = "" }) => {
  return (
    <aside className={`${className}`}>
      <Image alt="logo" src={"/images/logo.png"} width={100} height={100} />
      <h2 className="text-[#FDC006] hover:text-[#dca946] text-lg">
        Join TechCrunch +
      </h2>
    </aside>
  );
};

export default Sidebar;
