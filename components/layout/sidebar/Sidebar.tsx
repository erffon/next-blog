import Image from "next/image";

interface ISidebar {
  className?: string;
}

const Sidebar: React.FC<ISidebar> = ({ className = "" }) => {
  return (
    <aside className={`${className}`}>
      <Image alt="logo" src={"/images/logo.png"} width={100} height={100} />
    </aside>
  );
};

export default Sidebar;
