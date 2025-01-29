// En haut du fichier
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { usePrivy } from '@privy-io/react-auth' // Ajoute cette ligne

export default function Home() {
  const { login, logout, authenticated } = usePrivy()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8 text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-20">
        <h1 className="text-2xl font-bold">🛡️ Wallet Rescue</h1>
      </nav>

      <main className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold leading-tight">
            Never Lose Your Crypto<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Social Recovery Made Simple
            </span>
          </h2>
          
          {!authenticated ? (
            <div className="space-y-4">
              <button
                onClick={login}
                className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-lg transition-all flex items-center gap-3 mx-auto"
              >
                <img src="/twitter.svg" className="w-6 h-6" alt="Twitter logo" />
                Continue with Twitter
              </button>
              
              <button
                onClick={login}
                className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-lg transition-all flex items-center gap-3 mx-auto"
              >
                <img src="/google.svg" className="w-6 h-6" alt="Google logo" />
                Continue with Google
              </button>
            </div>
          ) : (
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4">🎉 Welcome!</h3>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </main>
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
    <ShieldCheckIcon className="w-12 h-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-bold mb-2">Military-Grade Security</h3>
    <p className="text-gray-300">Multi-sig social recovery powered by Lit Protocol</p>
  </div>
</section>
    </div>
  )
}