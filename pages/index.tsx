import { ShieldCheckIcon, GlobeAltIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ShieldCheckIcon className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-white">Wallet Rescue</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Never Lose Your
            <span className="block mt-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Crypto Assets
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Secure social recovery powered by your trusted connections
          </p>
          <div className="space-y-4 max-w-sm mx-auto">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
              Connect with Twitter
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
              Connect with Google
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 p-8 rounded-xl">
              <LockClosedIcon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Military-Grade Security</h3>
              <p className="text-gray-300">
                Multi-signature social recovery powered by Lit Protocol
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 p-8 rounded-xl">
              <GlobeAltIcon className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform Support</h3>
              <p className="text-gray-300">
                Seamless integration with Twitter, Discord, and more
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 p-8 rounded-xl">
              <ShieldCheckIcon className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Instant Recovery</h3>
              <p className="text-gray-300">
                Regain access to your wallet in minutes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}