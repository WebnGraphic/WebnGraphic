import { Suspense } from "react";
import ResponseControl from "../../Component/response/response-control";
import ResponseTableSkeleton from "../../Component/response/skeleton";
import SearchForm from "../../Component/search-form";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  // Use await to resolve the Promise
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const search = params.q || "";

  return (
    <div className=" w-full mx-auto px-5 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Responses</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <SearchForm initialValue={search} />
          </div>
        </div>

        <Suspense
          fallback={<ResponseTableSkeleton />}
          key={`${search}-${currentPage}`}
        >
          <ResponseControl search={search} page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
