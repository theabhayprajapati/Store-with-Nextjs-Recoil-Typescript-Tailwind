import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { atom } from 'recoil'
import Header from '../components/Header'
import Products from '../components/Products'

export const FetchedAtom = atom({
  key: 'FetchedAtom',
  default: {},

})

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Head>
        <title>
          Next.js + Recoil Store
        </title>
      </Head>
      <Header />
      <main className="font-syne w-full">
        <div className="grid md:grid-cols-3 xl:grid-cols-4 border-2">
          {
            data && data.map(item => {
              return (
                <Products key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} rating={item.rating} />
              )
            })


          }
        </div>
      </main>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {

  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
