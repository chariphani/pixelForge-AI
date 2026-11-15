import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="grid gap-6 md:grid-cols-[240px_1fr]">
      <div className="md:sticky md:top-24 md:self-start">
        <Sidebar />
      </div>
      <section className="min-w-0">
        <Outlet />
      </section>
    </div>
  );
}