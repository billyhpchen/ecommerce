import featureData from "@/app/lib/feature-data";
import data from "@/app/lib/feature-data";
import ProductCard from "./product-card";


export default function FeatureProduct() {
    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {featureData.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}