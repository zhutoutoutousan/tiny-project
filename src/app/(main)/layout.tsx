import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
        <div>
        {children}
        </div>
    </ClerkProvider>
  )
}

export default Layout
