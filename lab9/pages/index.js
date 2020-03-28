import Head from 'next/head';
import Link from 'next/link'; 
import IdSearch from "../components/IdSearch";
import NameSearch from "../components/NameSearch";
import TypeSearch from "../components/TypeSearch";
import styles from '../components/styles.module.css'


const Home = () => {
  return(
    <div className={styles.body}>
      <Head>
        <title>Pokemon Database</title>
      </Head>

      <div>
        <h1 className={styles.head}>Who's that Pokemon?</h1>
        <br/>
        <Link href = "/id">
          <a className={styles.a}> Search Pokemon ID</a>
        </Link>
        <br/>
        <Link href = "/name">
          <a className={styles.a}> Search Pokemon name</a>
        </Link>
        <br/>
        <Link href = "/type">
          <a className={styles.a}> Search Pokemon type</a>
        </Link>
      </div>

    </div>
  );
}

export default Home;