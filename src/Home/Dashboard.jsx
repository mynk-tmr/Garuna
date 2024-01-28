import StatCard from "../reusables/StatCard";
import IconedInputField from "../reusables/IconedInputField";
import {
  CircleStackIcon,
  BellAlertIcon,
  ChartBarIcon,
  CalendarIcon,
} from "@heroicons/react/16/solid";

const Dashboard = () => {
  return (
    <section className="p-8">
      <header className="flex mb-8">
        <h1 className="text-3xl grow font-bold">Your Dashboard</h1>
        <IconedInputField
          icon={<CalendarIcon className="" />}
          type="date"
          value="Choose Date"
        />
        <IconedInputField type="text" placeholder="Search Project" />
      </header>
      <section className="flex gap-8">
        <StatCard item="All Issues" value="55" icon={<CircleStackIcon />} />
        <StatCard item="New Request" value="14" icon={<BellAlertIcon />} />
        <StatCard item="Resolved" value="63%" icon={<ChartBarIcon />} />
      </section>
    </section>
  );
};

export default Dashboard;
