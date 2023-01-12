import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub Jobs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <br></br>
        <h1 className='flex justify-center font-bold py-2 px-4 text-4xl font-bold dark:text-white'>Welcome to GitHub Jobs!</h1>
        <h2 className='flex justify-center'>Please sign in to your account</h2>
        <br></br>
        <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Username"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='Password'>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                placeholder="Password"
                required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Sign In</button>
            </div>
            <div>
              <Link href="/jobList">Link</Link>
            </div>
          </div>
        </form>
      </div>
      </main>
    </>
  )
}
