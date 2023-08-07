import Image from "next/image";

interface ISidebar {
  className?: string;
}
const MOCK_CONTENT = [
  "Search",
  "TechCrunch +",
  "Startups",
  "Venture",
  "Security",
  "AI",
  "Crypto",
  "Apps",
  "Events",
  "More",
];
const Sidebar: React.FC<ISidebar> = ({ className = "" }) => {
  return (
    <aside
      className={`${className} h-screen  flex flex-col gap-10 text-[#777] border-r`}
    >
      <div className="flex flex-col gap-2">
        <Image alt="logo" src={"/images/logo.png"} width={100} height={100} />
        <h2 className="text-[#FDC006] hover:text-[#dca946] text-lg">
          Join TechCrunch +
        </h2>
        <p className="font-bold">Login</p>
      </div>
      <ul className="font-light">
        {MOCK_CONTENT.map((item) => {
          return <li className="py-1 hover:text-[#00a562]">{item}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
