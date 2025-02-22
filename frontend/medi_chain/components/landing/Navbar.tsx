'use client';
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="border-gray-200 bg-gray-900 py-2.5">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          <Link href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              MediSync
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* <Link
              href="/"
              className="rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            > 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </Link> */}
            <Link
              href="/guest"
              className="rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-50 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Login as user
            </Link>
            <Link
              href="/guest"
              className="rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-50 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Login as Doctor
            </Link>
          </div>
          <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <Link
                  href="/"
                  className="block border-b py-2 pr-4 pl-3 text-gray-400 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/add"
                  className="block border-b border-gray-700 py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  Add Issue
                </Link>
              </li>
              <li>
                <Link
                  href="/add"
                  className="block border-b border-gray-700 py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  Saved Issue
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block border-b border-gray-700 py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-700 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>
      <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-8">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
          <h2 className="mb-6 text-center font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Effortless Reports Tracking
          </h2>
          <p className="mb-8 text-center text-base text-indigo-200 md:text-lg">
          One of the centralized hospital management system that securely stores patient records in a journey format, ensuring privacy, accessibility, and streamlined hospital operations
          </p>
          {/* <Link
            href="/add"
            className="mx-auto flex items-center rounded-lg border-2 border-white px-4 py-2 text-sm leading-[24px] font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 focus:outline-none sm:mr-2 lg:px-5 lg:py-2.5"
          >
            Add Issue
            <svg
              className="ml-2 inline h-6 w-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              ></path>
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const IssueTrackerPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default IssueTrackerPage;
