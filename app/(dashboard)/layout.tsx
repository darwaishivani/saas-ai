import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="h-full relative">
			<div className="hidden  h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0-[80] bg-gray-900">
				<Sidebar />
			</div>
			<main className="md:pl-72 ">
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
