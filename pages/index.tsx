import { usePrivy } from '@privy-io/react-auth'

export default function Home() {
  const { login, logout, ready, authenticated } = usePrivy()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Wallet Rescue</h1>
      
      {!authenticated && (
        <button 
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Connect with Twitter/Google
        </button>
      )}

      {authenticated && (
        <div>
          <p className="mb-4">✅ Connected!</p>
          <button 
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}