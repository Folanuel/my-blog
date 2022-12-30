import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='bg-gradient-to-r from-zinc-900 via-green-900 to-neutral-900 text-white'>
      <Header />
      {children}
      <Footer />
        </body>
    </html>
  )
}
