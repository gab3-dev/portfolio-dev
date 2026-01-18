import type { Metadata } from 'next'
import { berkleyFont } from '@/fonts'
import { SpotLightItem, Spotlight } from "@/components/core/main-spotlight";
import MainAppBar from "@/components/core/main-appbar";
import '../components/styles/main.scss'
import './globals.css'

export const metadata: Metadata = {
  title: 'GabeDev',
  description: "Let's code it",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main
          className={`${berkleyFont.className} flex flex-col gap-[32px] row-start-2 sm:items-start`}>
          <Spotlight className="pt-[10px] px-[30px]">
            <SpotLightItem>
              <MainAppBar className={berkleyFont.className} />
            </SpotLightItem>
          </Spotlight>
          {children}
        </main>
        <footer className="flex flex-wrap row-start-3 justify-center items-center gap-[24px]"></footer>
      </body>
    </html>
  )
}
