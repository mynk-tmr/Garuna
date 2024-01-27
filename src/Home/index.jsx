import GarunSpan from "../reusables/GarunSpan";
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
  return (
    <main className="grid md:grid-cols-[1fr_6fr] h-screen">
      <aside className="bg-blue-100 p-6">
        <GarunSpan className="font-bold text-xl" />
        <menu className="mt-8 grid gap-y-8">
          <li className="hover:text-crimson">
            <RectangleGroupIcon className={iconStyles} />
            Dashboard
          </li>
          <li className="hover:text-crimson">
            <HandThumbDownIcon className={iconStyles} /> Issues
          </li>
          <li className="hover:text-crimson">
            <SparklesIcon className={iconStyles} /> Services
          </li>
          <li className="hover:text-crimson">
            <ClipboardDocumentCheckIcon className={iconStyles} /> Reports
          </li>
          <li className="hover:text-crimson">
            <AcademicCapIcon className={iconStyles} /> SuperUser
          </li>
          <li className="hover:text-crimson mt-20">
            <CogIcon className={iconStyles} /> Settings
          </li>
        </menu>
      </aside>
    </main>
  );
};

export default Home;
