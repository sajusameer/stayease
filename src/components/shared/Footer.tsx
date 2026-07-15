// import Link from "next/link";
// import {
//   Mail,
//   MapPin,
//   Phone,
// } from "lucide-react";
// import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white">
//       <div className="mx-auto max-w-7xl px-4 py-16">

//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

//           {/* Logo */}
//           <div>
//             <Link
//               href="/"
//               className="text-3xl font-bold text-cyan-400"
//             >
//               StayEase
//             </Link>

//             <p className="mt-5 leading-7 text-gray-400">
//               Discover luxury hotels, book your stay
//               effortlessly, and enjoy unforgettable travel
//               experiences across Bangladesh.
//             </p>

//             <div className="mt-6 flex gap-4">

//               <Link
//                 href="#"
//                 className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
//               >
//                 <FaFacebookF size={18} />
//               </Link>

//               <Link
//                 href="#"
//                 className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
//               >
//                 <FaInstagram size={18} />
//               </Link>

//               <Link
//                 href="#"
//                 className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
//               >
//                 <FaGithub size={18} />
//               </Link>

//               <Link
//                 href="#"
//                 className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
//               >
//                 <FaLinkedin size={18} />
//               </Link>

//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>

//             <h3 className="mb-5 text-xl font-semibold">
//               Quick Links
//             </h3>

//             <ul className="space-y-3 text-gray-400">

//               <li>
//                 <Link
//                   href="/"
//                   className="transition hover:text-cyan-400"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/hotels"
//                   className="transition hover:text-cyan-400"
//                 >
//                   Hotels
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/about"
//                   className="transition hover:text-cyan-400"
//                 >
//                   About
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/contact"
//                   className="transition hover:text-cyan-400"
//                 >
//                   Contact
//                 </Link>
//               </li>

//             </ul>

//           </div>

//           {/* Support */}
//           <div>

//             <h3 className="mb-5 text-xl font-semibold">
//               Support
//             </h3>

//             <ul className="space-y-3 text-gray-400">

//               <li>
//                 <Link
//                   href="/faq"
//                   className="transition hover:text-cyan-400"
//                 >
//                   FAQ
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/privacy"
//                   className="transition hover:text-cyan-400"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   href="/terms"
//                   className="transition hover:text-cyan-400"
//                 >
//                   Terms & Conditions
//                 </Link>
//               </li>

//             </ul>

//           </div>

//           {/* Contact */}
//           <div>

//             <h3 className="mb-5 text-xl font-semibold">
//               Contact
//             </h3>

//             <div className="space-y-4 text-gray-400">

//               <div className="flex items-center gap-3">
//                 <MapPin size={18} />
//                 Dhaka, Bangladesh
//               </div>

//               <div className="flex items-center gap-3">
//                 <Phone size={18} />
//                 +880 1700-000000
//               </div>

//               <div className="flex items-center gap-3">
//                 <Mail size={18} />
//                 support@stayease.com
//               </div>

//             </div>

//           </div>

//         </div>

//         <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">

//           © {new Date().getFullYear()} StayEase. All Rights Reserved.

//         </div>

//       </div>
//     </footer>
//   );
// }
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>

            <Link
              href="/"
              className="text-3xl font-bold text-sky-700"
            >
              StayEase
            </Link>

            <p className="mt-5 leading-7 text-slate-600">
              Discover luxury hotels, book your stay effortlessly,
              and enjoy unforgettable travel experiences across
              Bangladesh.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="#"
                className="rounded-full border border-sky-200 bg-white p-3 text-sky-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-sky-200 bg-white p-3 text-sky-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-sky-200 bg-white p-3 text-sky-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-sky-200 bg-white p-3 text-sky-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
              >
                <FaLinkedin size={18} />
              </Link>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-xl font-bold text-slate-800">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link
                  href="/"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/hotels"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Hotels
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition duration-300 hover:text-sky-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="mb-6 text-xl font-bold text-slate-800">
              Support
            </h3>

            <ul className="space-y-4 text-slate-600">

              <li>
                <Link
                  href="/faq"
                  className="transition duration-300 hover:text-sky-600"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition duration-300 hover:text-sky-600"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-bold text-slate-800">
              Contact
            </h3>

            <div className="space-y-5 text-slate-600">

              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="text-sky-600"
                />
                <span>Chattogram, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-sky-600"
                />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-sky-600"
                />
                <span>support@stayease.com</span>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-sky-200 pt-6 text-center text-sm text-slate-500">

          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-sky-700">
            StayEase
          </span>
          . All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}