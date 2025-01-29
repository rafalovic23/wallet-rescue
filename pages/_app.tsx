import { PrivyProvider } from '@privy-io/react-auth'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ['twitter', 'google'],
        // Nouvelle syntaxe pour les OAuth callbacks
        socialLoginUrls: {
          google: 'https://wallet-rescue-aoen.vercel.app/api/auth/callback/google',
          twitter: 'https://wallet-rescue-aoen.vercel.app/api/auth/callback/twitter'
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets'
        },
        appearance: {
          theme: 'dark',
          accentColor: '#4A90E2'
        }
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  )
}

export default MyApp