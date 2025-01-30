import { ArrowRightIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { usePrivy } from '@privy-io/react-auth'

export default function Home() {
  const { login, logout, authenticated } = usePrivy()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-20 px-4">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <ShieldCheckIcon className="w-8 h-8 text-blue-400" />
          Wallet Rescue
        </h1>
      </nav>

      <main className="max-w-6xl mx-auto text-center">
        <div className="space-y-12">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Never Lose Your
              <span className="block mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Crypto Assets
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure social recovery powered by your trusted social connections
            </p>
          </div>

          {!authenticated ? (
            <div className="flex flex-col items-center gap-6 mt-16">
              <button
                onClick={login}
                className="bg-white/10 hover:bg-white/20 px-10 py-5 rounded-2xl text-xl font-semibold backdrop-blur-lg transition-all flex items-center gap-4 w-full max-w-md"
              >
                <img src="/twitter.svg" className="w-8 h-8" alt="Twitter logo" />
                Continue with Twitter
              </button>
              
              <button
                onClick={login}
                className="bg-white/10 hover:bg-white/20 px-10 py-5 rounded-2xl text-xl font-semibold backdrop-blur-lg transition-all flex items-center gap-4 w-full max-w-md"
              >
                <img src="/google.svg" className="w-8 h-8" alt="Google logo" />
                Continue with Google
              </button>
            </div>
          ) : (
            <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-lg max-w-2xl mx-auto mt-16">
              <h3 className="text-3xl font-bold mb-6">🎉 Welcome Back!</h3>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-medium transition-colors text-lg w-full"
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 mb-20">
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-blue-400 transition-all">
            <ShieldCheckIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Military-Grade Security</h3>
            <p className="text-gray-300 leading-relaxed">
              Multi-signature social recovery powered by Lit Protocol and threshold cryptography
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-400 transition-all">
            <GlobeAltIcon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Cross-Platform Support</h3>
            <p className="text-gray-300 leading-relaxed">
              Seamless integration with Twitter, Discord, Google and all major platforms
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-green-400 transition-all">
            <ArrowRightIcon className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Instant Recovery</h3>
            <p className="text-gray-300 leading-relaxed">
              Regain access to your wallet in minutes through trusted connections
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}