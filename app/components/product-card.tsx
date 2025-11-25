export default function ProductCard({product}: {product: {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}}) {
    return (
        <div
            key={product.id}
            className="bg-zinc-100 dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-80 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</p>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
