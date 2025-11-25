import Link from "next/link";
import FeatureProduct from "./components/feature-product";
import NavigationBar from "./components/navigation-bar";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className="flex h-screen w-full bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full flex-row items-stretch bg-white dark:bg-black">
          <div className="flex-1 flex flex-col items-start justify-center px-20 gap-8">
            <div className="space-y-4">
              <h1 className="text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
                Welcome to
              </h1>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ecommerce
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md">
              Discover our curated collection of premium products designed for modern living.
            </p>
            <Link href="/product">
              <button className="cursor-pointer px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none"></div>
            <video
              src="/homepage.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center py-20 px-20 bg-white dark:bg-black">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
          Explore our handpicked selection of premium products
        </p>
        <FeatureProduct />

      </div>
    </div>
  )
}
