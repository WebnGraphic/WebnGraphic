import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PaginationControl from "./pagination";

// Mock data - in a real app, this would come from a database
const products = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `This is a description for product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  category: i % 3 === 0 ? "Electronics" : i % 3 === 1 ? "Clothing" : "Home",
}));

async function getProducts(search: string, page: number, pageSize = 9) {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Filter products by search term
  const filteredProducts = products.filter((product) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  });

  // Calculate pagination
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + pageSize
  );

  return {
    products: paginatedProducts,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
    },
  };
}

export default async function ProductList({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const { products: items, pagination } = await getProducts(search, page);

  if (items.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold mb-2">No products found</h2>
        <p className="text-muted-foreground">
          Try adjusting your search or filter to find what you&apos;re looking
          for.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="h-48 bg-muted relative">
              <Image
                src={`/placeholder.svg?height=192&width=384&text=Product+${product.id}`}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {product.category}
              </p>
              <p className="font-medium">${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <PaginationControl
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        searchParams={search ? { q: search } : {}}
      />
    </div>
  );
}
