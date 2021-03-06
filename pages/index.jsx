import Head from 'next/head'
// import Link from 'next/link'
import { useState } from 'react'
import { topBar, hero, main, bio, skills, campoTestuale } from '../styles/index.module.css'

export default function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Head>
        <title>Create Next App {counter}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={topBar}>
        <p>G.A.</p>
        <button>Loremipsum</button>

      </div>
      <div className={hero}>
        <h1>Giovanni Aprile</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
      </div>
      <div className={main}>
        <p className={bio}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea neque provident voluptatibus illum iusto ad modi soluta tenetur itaque vel est autem, quisquam aliquam architecto velit accusamus quia voluptas? In.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea neque provident voluptatibus illum iusto ad modi soluta tenetur itaque vel est autem, quisquam aliquam architecto velit accusamus quia voluptas? In.

        </p>
        </div>
        <div  className={skills}>
        <p>
          Lorem Ipsum
        </p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea neque provident voluptatibus illum iusto ad modi soluta tenetur itaque vel est autem, quisquam aliquam architecto velit accusamus quia voluptas? In.
        </p>
        </div>

    </div>
  )
}