import Header from '../components/header';
import Calculator from '../components/calculator';
import Head from 'next/head';

export default function Home() {
  return (
    <>

      <Head>
        <title>Calculadora de IMC</title>
      </Head>

      <Header />
      <Calculator />
    </>
  )
}
