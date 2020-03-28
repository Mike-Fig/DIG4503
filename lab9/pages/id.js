import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/styles.module.css';
import IdSearch from '../components/IdSearch';

const id= ()=>{
    return(
    <center>
        <div>
        <h1 className={styles.head}>Who's that Pokemon?</h1>
            <Head>
                <title>Id Search</title>
            </Head>
            <Link href="/name">
                <a className={styles.a}>Search by name</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>
            
            <IdSearch/>
            <div className={styles.result} id="reportingArea">

            </div>
        </div>
        </center>
    )
}

export default id;