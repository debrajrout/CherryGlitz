import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-300 to-indigo-500 text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <div className=" md:mb-0">
              <Link href="https://cherryglitz.com/" target="_blank">
                <span className="self-center whitespace-nowrap text-3xl font-bold bg-gradient-to-r from-zinc-100 to-slate-300 bg-clip-text text-transparent">
                  CherryGlitz
                </span>
              </Link>
            </div>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-white transition hover:text-gray-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="text-white transition hover:text-gray-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                className="text-white transition hover:text-gray-300"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.108 4.108 0 0021.448 4.4a8.229 8.229 0 01-2.605.996A4.104 4.104 0 0015.445 4c-2.27 0-4.106 1.836-4.106 4.106 0 .32.035.634.105.935A11.65 11.65 0 013 5.149a4.11 4.11 0 00-.555 2.064c0 1.424.725 2.68 1.826 3.419a4.093 4.093 0 01-1.86-.514v.052c0 1.99 1.414 3.647 3.292 4.021a4.1 4.1 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407 11.616 11.616 0 008.29 20.25z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="font-medium text-2xl">Beauty Parlour</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Haircut
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Hair Color
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Makeup
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Manicure
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Pedicure
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-2xl">Men’s Salon</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Haircut
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Beard Trim
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Shave
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Facial
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Massage
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-2xl">Massage</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Swedish Massage
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Deep Tissue Massage
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Hot Stone Massage
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Aromatherapy
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Reflexology
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-2xl">Tattoo</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Custom Tattoos
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Black & Grey
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Color Tattoos
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Cover-Ups
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Henna
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-2xl">Spa</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Body Wraps
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Facials
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Exfoliation
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Hydrotherapy
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-300" href="#">
                    Sauna
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-md mt-10">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-gray-300 lg:text-right">
          © 2024 CherryGlitz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}