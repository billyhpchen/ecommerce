export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200/20 dark:border-gray-800 backdrop-blur-sm bg-white/80 dark:bg-black/80">
            <div className="flex justify-between items-center px-8 py-6">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1.5 rounded-lg">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L22 20H2L12 2Z" fill="white" />
                        </svg>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        © 2024 Ecommerce. All rights reserved.
                    </span>
                </div>
                <a 
                    href="#" 
                    className="text-sm text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
}