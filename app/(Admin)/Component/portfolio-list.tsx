import { getAllPortfolios } from "../action/portfolio";
import PaginationControl from "./pagination";
import { AdminPortfolioCard } from "./portfolio-admin-card";

export default async function AdminPortfolioList({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const pageSize = 10;
  const { portfolios, pagination } = await getAllPortfolios(
    search,
    page,
    pageSize
  );

  if (portfolios.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold mb-2">No portfolio found</h2>
        <p className="text-muted-foreground">
          Try adjusting your search or filter to find what you&apos;re looking
          for.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <AdminPortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
      <div>
        <PaginationControl
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          searchParams={search ? { q: search } : {}}
        />
      </div>
    </div>
  );
}
