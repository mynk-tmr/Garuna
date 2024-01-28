import GarunSpan from "../reusables/GarunSpan";
import Dashboard from "./Dashboard";
import {
  RectangleGroupIcon,
  HandThumbDownIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const iconStyles =
    "w-7 mr-2 p-1 rounded-full inline translate-y-[-5%] shadow-lg bg-ice border border-gray-300";
  const asideMenuItems = [
    [RectangleGroupIcon, "Dashboard"],
    [HandThumbDownIcon, "Issues"],
    [SparklesIcon, "Services"],
    [ClipboardDocumentCheckIcon, "Reports"],
    [AcademicCapIcon, "SuperUser"],
    [CogIcon, "Settings"],
  ];
  return (
    <main className="grid md:grid-cols-[1fr_6fr] h-screen">
      <aside className="bg-blue-100 p-6 shadow-rd">
        <GarunSpan className="font-bold text-xl" />
        <menu className="mt-8 grid gap-y-8 hover:*:text-crimson hover:*:font-bold">
          {asideMenuItems.map(([Icon, text]) => (
            <li key={text} className={text === "Settings" && "mt-20"}>
              <Icon className={iconStyles} />
              {text}
            </li>
          ))}
        </menu>
      </aside>
      <Dashboard />
    </main>
  );
};

export default Home;
