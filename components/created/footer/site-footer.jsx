/**
 * site-footer.jsx
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteFooter = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/shop-services")) {
    return (
      <div className="h-14 bg-neutral-900 font-serif text-white">
        <div className="flex h-full w-full items-center justify-center">@Licence Auto-Nel</div>
      </div>
    );
  }

  if (pathname.startsWith("/user") || pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="flex min-h-[75vh] w-full items-center justify-center bg-neutral-900 pt-20 ">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 text-white">
        <div className="w-full text-3xl ">
          <h1 className="w-full font-serif md:w-2/3">How can we help you. get in touch</h1>
        </div>
        <div className="mt-8 flex flex-col pb-20 md:flex-row md:justify-between">
          <p className="w-full text-neutral-400 md:w-2/3">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
          <div className="w-44 pt-6 md:pt-0">
            <Link href={"/contact-us"} className="text-md w-full max-w-3xl rounded-lg bg-white px-5 py-2 text-black">
              Contact US
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 border-t border-neutral-600 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-neutral-400">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  1on1 Coaching
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Company Review
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  HR Consulting
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-neutral-400">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Meet the Team
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-neutral-400">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-neutral-400">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Accessibility
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Returns Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Refund Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-neutral-200 transition hover:opacity-75">
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-10 text-xs text-neutral-500">&copy; 2022. Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SiteFooter;
