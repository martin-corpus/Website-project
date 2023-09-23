import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Auth0Provider } from '@auth0/auth0-react'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-ulco4wbyjptvmo24.au.auth0.com"
      clientId="XNBSyJNL8Uhjg6dfwMOmHfD6lqErtPFl"
      redirectUri={window.location.origin}
      audience="https://www.nzksfaa.co.nz/"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>
  )
})
