import AppAreaChart from "@/components/DashboardOverview/AppAreaChart";
import AppBarChart from "@/components/DashboardOverview/AppBarChart";
import AppPieChart from "@/components/DashboardOverview/AppPieChart";
import CardList from "@/components/DashboardOverview/CardList";

export default function Home() {
  return (
    // Dashboard Overview Page / Dashboard HomePage

    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* Revenue Bar Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>
      {/* Pie Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-2">
        <AppPieChart />
      </div>

      {/* Area Chart */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-2">
        <AppAreaChart />
      </div>

      {/* Card List */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-2">
        <CardList title="Popular Products" />
      </div>
    </div>
  );
}
