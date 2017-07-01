import Head from 'next/head'

const Header = () => (
  <header>
    <Head>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Arvo|Rubik:400,500');
        body { 
          background: #000;
          font-family: 'Rubik', sans-serif;
          font-weight: 400;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
          color: #fff;
        }
      `}</style>
    </Head>
  </header>
)

export default Header
