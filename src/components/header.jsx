import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
            <nav
              aria-label="Global"
              className="flex items-center justify-between p-6 lg:px-8"
            >
              <div className="flex lg:flex-1">
                <h1 className="text-gray-200 font-bold text-xl">
                  Rare Motion.
                </h1>
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
                <Link
                  to="/project"
                  className="text-lg/7 font-semibold text-white"
                >
                    Project
                </Link>
                <Link
                  to="/free-instrumentals"
                  className="text-lg/7 font-semibold text-white"
                >
                  Free Instrumentals
                </Link>
                <Link
                  to="/instrumental-marketplace"
                  className="text-lg/7 font-semibold text-white"
                >
                  Instrumental Marketplace
                </Link>
                <Link
                  to="/about-us" 
                  className="text-lg/7 font-semibold text-white"
                >
                  About Us
                </Link>
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
                          <to
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
                          <Link
                            to="/project"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                          >
                            Projects
                          </Link>
                          <Link
                            to="/free-instrumentals"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                          >
                            Free Instrumental
                          </Link>
                          <Link
                            to="/instrumental-marketplace"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                          >
                            Instrumental Marketplace
                          </Link>
                          <Link
                            to="/about-us"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                          >
                            About Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </el-dialog-panel>
                </div>
              </dialog>
            </el-dialog>
          </header>
  )
}

export default Header;