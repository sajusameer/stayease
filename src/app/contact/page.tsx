import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">

      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-16 text-center">

          <span className="badge badge-primary badge-lg">
            Contact
          </span>

          <h1 className="mt-4 text-5xl font-bold text-slate-800">
            Get In Touch
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Have questions or need assistance? We'd love to hear from
            you.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="space-y-8 rounded-3xl bg-white p-10 shadow-lg">

            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-sky-100 p-4">
                <MapPin className="text-sky-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Address
                </h3>

                <p className="text-slate-600">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-sky-100 p-4">
                <Phone className="text-sky-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Phone
                </h3>

                <p className="text-slate-600">
                  +880 1700-000000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-sky-100 p-4">
                <Mail className="text-sky-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Email
                </h3>

                <p className="text-slate-600">
                  support@stayease.com
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              />

              <button className="btn btn-primary w-full">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}