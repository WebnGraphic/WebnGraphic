import { getAllWebDevProjects } from "@/app/action/action";
import ProtfolioContent from "./portfolio-content";
export default async function PortfolioSection() {
  const webDevProjects = await getAllWebDevProjects();
  return (
    <div className="bg-gray-200">
      {webDevProjects && <ProtfolioContent webDevProjects={webDevProjects} />}
    </div>
  );
}
