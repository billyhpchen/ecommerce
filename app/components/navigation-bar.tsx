import Link from "next/link";

export default function NavigationBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/20 dark:border-gray-800 flex justify-between items-center px-8 py-4 backdrop-blur-sm bg-white/80 dark:bg-black/80">
            <Link href="/">
                <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L22 20H2L12 2Z" fill="white" />
                        </svg>
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                        Ecommerce
                    </span>
                </div>
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                Sign In
            </button>
        </nav>
    );
}