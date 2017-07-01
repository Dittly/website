import Head from 'next/head'

const Header = () => (
  <header>
    <Head>
      <meta name="viewport" content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Arvo|Rubik:400,500');
        body { 
          font-family: 'Rubik', sans-serif;
          font-weight: 400;
          font-size: 16px;
          -webkit-font-smoothing: antialiased;
          color: #3D3D3D;
        }
      `}</style>
    </Head>
  </header>
)

export default Header
