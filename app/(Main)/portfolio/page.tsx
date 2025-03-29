import { getAllWebDevProjects } from "@/app/action/action";
import ProtfolioContent from "./components/portfolio-content";
export default async function Page() {
  const webDevProjects = await getAllWebDevProjects();
  return (
    <div>
      {webDevProjects && <ProtfolioContent webDevProjects={webDevProjects} />}
    </div>
  );
}
