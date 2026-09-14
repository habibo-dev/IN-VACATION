import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://in-vacation.vercel.app'),
  title: { default: 'In Vacation Travel | Voyagez autrement', template: '%s | In Vacation Travel' },
  description: 'Plateforme digitale de voyage à Khemis Miliana : voyages, billetterie, hôtels, visa, Omra et demandes personnalisées.',
  keywords: ['In Vacation Travel','agence de voyage','Khemis Miliana','Aïn Defla','voyage Algérie','billetterie','visa','hôtel','Omra'],
  openGraph: { title: 'In Vacation Travel', description: 'Trouvez votre prochaine escapade et demandez votre itinéraire personnalisé.', type: 'website', locale: 'fr_DZ' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>
}