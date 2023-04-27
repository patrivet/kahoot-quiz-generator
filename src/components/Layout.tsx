import Head from 'next/head'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Kahoot quiz generator</title>
      <meta name="description" content="Generate a spreadsheet with questions to load in Kahoot." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      Icon here
    </header>
    {children}
  </>
)

export default Layout
