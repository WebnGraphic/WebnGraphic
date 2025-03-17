import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ProductList from "../../Component/product-list";
import SearchForm from "../../Component/search-form";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const search = searchParams.q || "";

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <SearchForm initialValue={search} />
          </div>
        </div>

        <Suspense
          fallback={<ProductsSkeleton />}
          key={`${search}-${currentPage}`}
        >
          <ProductList search={search} page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="h-48 bg-muted">
            <Skeleton className="h-full w-full" />
          </div>
          <CardContent className="p-4">
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-4 w-1/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
