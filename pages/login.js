// // import { signIn } from 'next-auth/react';
// // import { useState } from 'react';
// // import styles from '../styles/Login.module.css';

// // export default function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     const result = await signIn('credentials', { redirect: false, email, password });
// //     if (!result.error) {
// //       alert('Successfully logged in!');
// //       window.location.href = '/dashboard'; // Redirect to a secured page
// //     } else {
// //       setError(result.error);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <nav className={styles.navbar}>
// //         <div className={styles.leftCorner}>
// //           <a href="/" className={styles.navLink}>ProTyping</a>
// //         </div>
// //         <div className={styles.rightCorner}>
// //           <a href="/" className={styles.navLink}>Home</a>
// //           <a href="/get-started" className={styles.navLink}>Get Started</a>
// //           <a href="/stats" className={styles.navLink}>Stats</a>
// //           <a href="/login" className={styles.navLink}>Login</a>
// //         </div>
// //       </nav>
// //       <div className={styles.loginCard}>
// //         <h1 className={styles.title}>Login to ProTyping</h1>
// //         <form onSubmit={handleSubmit} className={styles.form}>
// //           <label className={styles.label}>
// //             Username/Email
// //             <input
// //               type="text"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className={styles.input}
// //               placeholder="Username/Email"
// //             />
// //           </label>
// //           <label className={styles.label}>
// //             Password
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className={styles.input}
// //               placeholder="Password"
// //             />
// //           </label>
// //           {error && <p className={styles.error}>{error}</p>}
// //           <div className={styles.checkboxContainer}>
// //             <input type="checkbox" id="terms" name="terms" className={styles.checkbox} />
// //             <label htmlFor="terms" className={styles.checkboxLabel}>
// //               Agree with the <a href="/terms" className={styles.link}>terms of use</a> and <a href="/privacy" className={styles.link}>privacy policy</a>
// //             </label>
// //           </div>
// //           <button type="submit" className={styles.button}>Login</button>
// //         </form>
// //         <p className={styles.text}>
// //           Don't have an account? <a href="/register" className={styles.link}>Sign up</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }import { signIn } from 'next-auth/react';




// import { signIn } from 'next-auth/react'; // Ensure this import is correct
// import { useState } from 'react';
// import styles from '../styles/Login.module.css';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       // Call NextAuth.js signIn
//       const result = await signIn('credentials', {
//         redirect: false,
//         email,
//         password,
//       });

//       if (!result.error) {
//         alert('Successfully logged in!');
//         window.location.href = '/index.js'; // Redirect to a secured page
//       } else {
//         setError(result.error);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('An error occurred during login');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <div className={styles.leftCorner}>
//           <a href="/" className={styles.navLink}>ProTyping</a>
//         </div>
//         <div className={styles.rightCorner}>
//           <a href="/" className={styles.navLink}>Home</a>
//           <a href="/get-started" className={styles.navLink}>Get Started</a>
//           <a href="/stats" className={styles.navLink}>Stats</a>
//           <a href="/login" className={styles.navLink}>Login</a>
//         </div>
//       </nav>
//       <div className={styles.loginCard}>
//         <h1 className={styles.title}>Login to ProTyping</h1>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <label className={styles.label}>
//             Username/Email
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={styles.input}
//               placeholder="Username/Email"
//               required
//             />
//           </label>
//           <label className={styles.label}>
//             Password
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={styles.input}
//               placeholder="Password"
//               required
//             />
//           </label>
//           {error && <p className={styles.error}>{error}</p>}
//           <div className={styles.checkboxContainer}>
//             <input type="checkbox" id="terms" name="terms" className={styles.checkbox} />
//             <label htmlFor="terms" className={styles.checkboxLabel}>
//               Agree with the <a href="/terms" className={styles.link}>terms of use</a> and <a href="/privacy" className={styles.link}>privacy policy</a>
//             </label>
//           </div>
//           <button type="submit" className={styles.button}>Login</button>
//         </form>
//         <p className={styles.text}>
//           Don't have an account? <a href="/register" className={styles.link}>Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// }


import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Call NextAuth.js signIn
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      console.log('SignIn Result:', result); // Debugging

      if (!result.error) {
        console.log('Login successful! Redirecting to home page...');
        router.push('/'); // Redirect to the home page
        // Fallback: Force redirect if router.push doesn't work
        // window.location.href = '/';
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.leftCorner}>
          <a href="/" className={styles.navLink}>ProTyping</a>
        </div>
        <div className={styles.rightCorner}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="/get-started" className={styles.navLink}>Get Started</a>
          <a href="/stats" className={styles.navLink}>Stats</a>
          <a href="/login" className={styles.navLink}>Login</a>
        </div>
      </nav>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Login to ProTyping</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Username/Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Username/Email"
              required
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Password"
              required
            />
          </label>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="terms" name="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              Agree with the <a href="/terms" className={styles.link}>terms of use</a> and <a href="/privacy" className={styles.link}>privacy policy</a>
            </label>
          </div>
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <p className={styles.text}>
          Don't have an account? <a href="/register" className={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
}
