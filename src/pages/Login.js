import { useState, useEffect } from 'react';
import styles from "../styles/Login.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/useAuth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUserID, setAdmin, setFullName } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    async function handleClick(email, password, router) {
        try {
            setErrorMessage("");
            const response = await fetch("/api/user/verify", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await response.json();
            console.log(data);
            console.log(Object.keys(data).length > 0);
            if (response.status === 200) {
                console.log(data.id);
                setUserID(data.id);
                setAdmin(data.admin);
                setFullName(data.fullName);
                router.push("/side");
            }
        } catch (e) {
            setErrorMessage("User does not exist!");
        }
    }

    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <input type="email" value={email} onChange={e => { setEmail(e.currentTarget.value); }} placeholder='Email' className={styles.input} />
                <input type="password" value={password} onChange={e => { setPassword(e.currentTarget.value); }} placeholder='Password' className={styles.input} />
                {
                    (errorMessage !== "") ? <p style={{fontFamily: "'Heebo', sans-serif", textAlign: "center"}} id="error">{errorMessage}</p> : <></>
                }
                <button type="button" className={styles.logInButton} onClick={() => {handleClick(email, password, router)}}>Log In</button>
                <p>Don't have an account? <Link href="create-account"><b className={styles.signUp}>Sign up</b></Link></p>
            </div>
            <div className={styles.footer}>
                <p>Made with ♡ by Team Elephant<br />© 2023 BOG Developer Bootcamp. All rights reserved.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                    <circle className={styles.circle} cx="0" cy="100%" r="60%" />
            </svg>
        </div>
    );
}