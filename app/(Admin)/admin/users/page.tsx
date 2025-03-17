import { Suspense } from "react";
import SearchForm from "../../Component/search-form";
import TableSkeleton from "../../Component/table-skeleton";
import UserTable from "../../Component/user-table";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const search = searchParams.q || "";

  return (
    <div className="max-w-7xl w-full mx-auto px-5 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Users</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <SearchForm initialValue={search} />
          </div>
        </div>

        <Suspense
          fallback={<TableSkeleton length={10} />}
          key={`${search}-${currentPage}`}
        >
          <UserTable search={search} page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
