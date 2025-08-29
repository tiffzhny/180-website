import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-600 text-gray-200 mt-10 p-4 pl-50 pr-50">
      <aside className="space-y-2">
        <img
          src="/images/180logo.png"
          alt="180 Degrees Consulting – UCI"
          className="h-15 w-auto"
          loading="lazy"
        />
      </aside>
      {/* Social / contact */}
      <nav className='ml-auto text-right'>
      <p className="text-sm">
          Email:&nbsp;
          <a href="mailto:uci@180dc.org" className="link underline link-hover">
          uci@180dc.org
          </a>
        </p>
        <div className="grid grid-flow-col gap-4 text-white ">
          {/* Email */}
          <a
            href="mailto:uci@180dc.org"
            aria-label="Email us"
            className="hover:text-gray-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/180dcuci"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5Zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3Zm-5 4a5 5 0 110 10 5 5 0 010-10Zm0 2a3 3 0 100 6 3 3 0 000-6Zm4.5-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0Z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
