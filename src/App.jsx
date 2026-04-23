// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Pricing from './components/pricing'
import People from './components/people'


import "./App.css";

function App() {
  return (
    <>
      {/* Include this script tag or install `@tailwindplus/elements` via npm: */}
      {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> */}
      <div className="bg-rose-400">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <h1 className="text-gray-200 font-bold text-xl">Rare Motion.</h1>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only text-blue-700">Rare Motion.</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                command="show-modal"
                commandfor="mobile-menu"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-10">
              <a href="#" className="text-lg/7 font-semibold text-white">
                Projects
              </a>
              <a href="#" className="text-lg/7 font-semibold text-white">
                Free Instrumentals
              </a>
              <a href="#" className="text-lg/7 font-semibold text-white">
                Instrumental Marketplace
              </a>
              <a href="#" className="text-lg/7 font-semibold text-white">
                About Us
              </a>
            </div>
          </nav>
          <el-dialog>
            <dialog
              id="mobile-menu"
              className="backdrop:bg-transparent lg:hidden"
            >
              <div tabIndex="0" className="fixed inset-0 focus:outline-none">
                <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Rare Motion.</span>
                      <h3 className="text-gray-200">Our Services</h3>
                    </a>
                    <button
                      type="button"
                      command="close"
                      commandfor="mobile-menu"
                      className="-m-2.5 rounded-md p-2.5 text-gray-200"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6"
                      >
                        <path
                          d="M6 18 18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-white/10">
                      <div className="space-y-2 py-6">
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Projects
                        </a>
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Free Instrumental
                        </a>
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          Instrumental Marketplace
                        </a>
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                        >
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-8xl">
                We don't just make music,
              </h1>
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                we build legacies.
              </h2>
              <p className="mt-8 text-sm font-medium text-pretty text-stone-200 sm:text-xl/8 italic">
                We believe every great artist deserves a team that's as hungry
                as they are. That's why we invest in talent, not trends.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Contact Us
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Purchase a Beat <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#FF4646] to-[#9189fc00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            ></div>
          </div>
        </div>
      </div>
      <Pricing />
      <People />
    </>
  );
}

export default App;
