import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900 pt-24 pb-24'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <img className='w-72 mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683046014~exp=1683046614~hmac=ff5769c3e67e74c893c1f80aa9d5705da881d05ce5ff463164749e93f59b43a9" alt="" />
          <h2 className='mb-8 font-extrabold text-9xl text-purple-700'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'> Not Found
            {error?.message}
          </p>
          <Link
            to='/home'
            className='px-8 py-3 font-semibold rounded bg-purple-700 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
