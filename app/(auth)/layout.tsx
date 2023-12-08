import { ClerkProvider } from "@clerk/nextjs"

export const metadata={
    title:'Threads',
    description:'Nextjs Threads app'
}

export  default function RootLayout({
    children
}:{
    children: React.ReactNode
}) {
    return(
        <ClerkProvider>
            
        </ClerkProvider>
    )
}