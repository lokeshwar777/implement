import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Home Page</h1>
            <main className={styles.main}>
                <Link href={"/users"}>Users</Link>
            </main>
        </div>
    );
}
