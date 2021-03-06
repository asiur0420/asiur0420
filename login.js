import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asiur dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.1/css/all.css' rel='stylesheet' type='text/css'/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.4/dist/css/uikit.min.css" />
     
      </Head>


      <main>
        <section className='uk-background-primary uk-height-1-1 uk-width-1-1 uk-position-fixed uk-flex uk-flex-middle uk-flex-center'>
          <div className="uk-container">

            <div className='uk-width-large uk-card uk-card-default uk-border-rounded uk-card-body'>
              <h3>Login</h3>
            <div className='uk-margin'>
                <label>Username</label>
                <input className='uk-input'/>
              </div>
              <div className='uk-margin'>
                <label>Password</label>
                <input type="password" className='uk-input'/>
              </div>
              <div>
                <div className='uk-grid'>

                <div>
                    <a>Register Now</a>
                  </div>

                  <div className='uk-width-expand uk-text-right'>
                    <a>Forget Password?</a>
                  </div>

                </div>

              </div>

              <div className='uk-margin'>
                <button className='uk-button uk-button-primary uk-width-1-1 uk-border-rounded'>Login</button>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}
