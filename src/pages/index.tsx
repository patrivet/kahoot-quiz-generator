import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { NextPage } from 'next'
import generate from '@/assets/icons/solution-icon.png'
import view from '@/assets/icons/thought-cloud-icon.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <section>
            <Link href={'/generate'} className="main-option">
              <div>
                <Image src={generate} className="icon" alt="" />
                <p>Generate a quiz</p>
              </div>
            </Link>
            <Link href={'/view'} className="main-option">
              <div>
                <Image src={view} className="icon" alt="" />
                Stored quizzes
              </div>
            </Link>
          </section>
        </main>
      </Layout>
    </div>
  )
}

export default Home
