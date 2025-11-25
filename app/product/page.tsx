import data from "@/app/lib/full-data";
import ProductCard from "@/app/components/product-card";
export default function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-8 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked selection of premium products designed for modern living
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}