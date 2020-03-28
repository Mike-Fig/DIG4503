import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/styles.module.css';
import NameSearch from '../components/NameSearch';

const name= ()=>{
    return(
    <center>
        <div>
        <h1 className={styles.head}>Who's that Pokemon?</h1>
            <Head>
                <title>Name Search</title>
            </Head>
            <Link href="/id">
                <a className={styles.a}>Search by id</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>
            
            <NameSearch/>
            <div className={styles.result} id="reportingArea">

            </div>
        </div>
        </center>
    )
}

export default Name;