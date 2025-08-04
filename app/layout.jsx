'use client'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import './styles/globals.css'; 
import styles from "./layout.module.css"


function RootLayout({children}) {
  return (
    <html lang="en">
      <head/>
      <body className={styles.body}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
            
        
    </html>
  );
}
export default RootLayout
