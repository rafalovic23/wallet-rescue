import { PrivyProvider } from '@privy-io/react-auth'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ['twitter', 'google'],
        appearance: {
          theme: 'light',
          accentColor: '#4A90E2'
        }
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  )
}

export default MyApp