import { useState, useEffect } from 'react';
import styles from "../styles/CreateAccount.module.css";
import Link from 'next/link';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/useAuth';
import { useRouter } from 'next/router';
import { serverRuntimeConfig } from '../../next.config';

export default function CreateAccount() {
    const { fullName, setFullName, admin, setAdmin } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    function changeErrorMessage() {
        setErrorMessage("");
        if (password !== confirm) {
            setErrorMessage((current) => current + "Passwords don't match!\n");
        }
        if (!email.includes("@")) {
            setErrorMessage((current) => current + "Invalid email address!\n");
        } 
        if (fullName === "") {
            setErrorMessage((current) => current + "Add your name to your account!\n");
        }
    }

    async function handleClick() {
        changeErrorMessage();
        const response = await fetch("/api/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fullName: fullName,
                admin: admin
            })
        });
        if (response.status === 200) {
            router.push('/');
        } else {
            setErrorMessage("User does not exist!");
        }
    }

    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.accountBox}>
                <h1>Create Account</h1>
                <input type="text" placeholder="Full Name" value={fullName} onBlur={changeErrorMessage} onChange={(e) => {setFullName(e.target.value)}} className={styles.input} />
                <input type="email" placeholder='Email' value={email} onBlur={changeErrorMessage} onChange={(e) => {setEmail(e.target.value)}} className={styles.input} />
                <input type="password" placeholder='Password' value={password} onBlur={changeErrorMessage} onChange={(e) => {setPassword(e.target.value)}} className={styles.input} />
                <input type="password" placeholder='Confirm Password' onBlur={changeErrorMessage} onChange={(e) => {setConfirm(e.target.value)}} className={styles.input} />
                {
                    (errorMessage !== "") ? <div style={{fontFamily: "'Heebo', sans-serif", textAlign: "center"}} id="error">{errorMessage.split("\n").map((error) => { return <div>{error}</div>})}</div> : <></>
                }
                <label className={styles.label}>Admin Access
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.checkmark} onClick={(e) => {setAdmin(getComputedStyle(e.target, '::after').content === 'none')}}></span>
                </label>
                <button type="button" className={styles.signUpButton} onClick={() => {handleClick()}}>Sign Up</button>
                <p>Don't have an account? <Link href="/"><b className={styles.signIn}>Sign in</b></Link></p>
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