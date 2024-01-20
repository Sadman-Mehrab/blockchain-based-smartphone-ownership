import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-around p-24">
      
      <div className="relative flex text-5xl place-items-center ">
        <h2 className="my-6 py-6 text-4xl font-extrabold bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl text-center">A Blockchain-Based Smartphone Ownership Tracking System</h2>
      </div>

      
      <div className="mb-32 grid gap-6 text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:text-left">
        <Link
          href="/registration/owner"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 bg-gray-100 border-gray-200 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Owner Registration{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/registration/device"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 bg-gray-100 border-gray-200 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Device Registration{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/ownership-transfer"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 bg-gray-100 border-gray-200 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ownership Transfer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        {/* <Link
          href="/approval"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 bg-gray-100 border-gray-200 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Approval List{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link> */}

        <Link
          href="/device-status"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 bg-gray-100 border-gray-200 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Device Status{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/information"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 bg-gray-100 border-gray-200 "
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Information{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
          

        
      </div>
    </div>
  )
}
