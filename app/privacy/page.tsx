import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";

export default function PrivacyPage() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white">
        {/* Page Title Section */}
        <section className="bg-[#cf6734] px-6 py-10 md:px-20">
          <h1 className="text-center text-3xl font-semibold text-white md:text-4xl">
            Indushub Privacy Statement
          </h1>
        </section>

        {/* Main Content */}
        <section className="px-6 py-16 md:px-20 md:py-20">
          <div className="mx-auto max-w-4xl space-y-6 text-sm leading-relaxed text-slate-700 text-justify">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Introduction
              </h2>
              <p className="mb-4">
                SuretyBondHub.in is owned and operated by Mr. Pravin Patil and
                Mr. Sachin Patil, General Insurance Agents of ICICI Lombard
                General Insurance Company Limited and The New India Assurance
                Company Limited (hereinafter referred as SuretyBondHub).
              </p>
              <p className="mb-4">
                We are committed to protecting your personal data and respecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and protect your personal information when you use our
                website, mobile application, or services.
              </p>
              <p className="mb-4">
                This Privacy Policy is designed to comply with the Information
                Technology Act, 2000 and the rules made thereunder, including the
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011.
              </p>
              <p className="mb-4">
                By accessing, browsing, or using our website, mobile
                application, or services, or by transacting with us, you consent
                to the collection, use, and disclosure of your personal
                information in accordance with this Privacy Policy. This Privacy
                Policy is incorporated into and forms part of our Terms and
                Conditions, which can be found at{" "}
                <a
                  href="https://www.suretybondhub.in"
                  className="text-[#cf6734] hover:underline"
                >
                  www.suretybondhub.in
                </a>
                .
              </p>
            </div>

            {/* Note */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Note:
              </h2>
              <p className="mb-4">
                This Privacy Policy is subject to change without notice. We
                encourage you to review this Privacy Policy periodically to stay
                informed about how we are protecting your personal information.
              </p>
            </div>

            {/* Your Privacy at Surety Bond Hub */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Your Privacy at Surety Bond Hub
              </h2>
              <p className="mb-4">
                At Surety Bond Hub, we are committed to protecting your privacy
                and ensuring the security of your personal information. We value
                your trust and take our responsibility to safeguard your data
                seriously.
              </p>
              <p className="mb-4">
                This Privacy Policy applies to all users of our website, mobile
                application, and services. For the purposes of this Privacy
                Policy, "users" refers to all persons who access our website,
                mobile application, or use our services.
              </p>
            </div>

            {/* Privacy Assurance */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Privacy Assurance
              </h2>
              <p className="mb-4">
                We assure you that we will not sell, rent, or trade your
                personal information to third parties for their marketing
                purposes or for sending unsolicited emails without your explicit
                consent. We may share general statistical information about our
                users with our partners, but this information will not include
                any personally identifiable information.
              </p>
              <p className="mb-4">
                Your privacy is important to us, and we are committed to
                maintaining the confidentiality and security of your personal
                information. We will only use your information as described in
                this Privacy Policy and in accordance with applicable laws.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect and store personal information that you provide to us
                when you register, use our services, or interact with our
                website or mobile application. The types of personal information
                we may collect include:
              </p>
              <ul className="ml-6 list-disc space-y-2 mb-4">
                <li>Name, address, telephone number, and email address</li>
                <li>
                  PAN card number, Aadhaar card information, and other KYC
                  details
                </li>
                <li>
                  Information provided through forms, phone calls, or emails
                </li>
                <li>
                  Non-personally identifiable data such as IP address, browser
                  type, referral URLs, and other technical information
                </li>
              </ul>
              <p className="mb-4">
                We collect this information to provide and improve our services,
                process your requests, communicate with you, and ensure the
                security of our platform. We may also use this information to
                personalize your experience and provide you with relevant
                content and offers.
              </p>
              <p className="mb-4">
                We may periodically update your personal information to ensure
                its accuracy. If you wish to opt-out of receiving marketing
                communications from us, you can do so by clicking "Unsubscribe"
                in our emails or by contacting us at{" "}
                <a
                  href="mailto:support@suretybondhub.in"
                  className="text-[#cf6734] hover:underline"
                >
                  support@suretybondhub.in
                </a>
                .
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="ml-6 list-disc space-y-2 mb-4">
                <li>To provide and improve our services</li>
                <li>To resolve disputes and troubleshoot issues</li>
                <li>To prevent fraud and ensure safe transactions</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
              <p className="mb-4">
                We may share your personal information with the following
                parties:
              </p>
              <ul className="ml-6 list-disc space-y-2 mb-4">
                <li>
                  Insurance companies, including ICICI Lombard General Insurance
                  Company Limited and The New India Assurance Company Limited
                </li>
                <li>
                  Service providers who assist us in operating our platform,
                  such as customer support, data analytics, and lead management
                  services, under contractual agreements
                </li>
              </ul>
              <p className="mb-4">
                We do not sell, rent, or trade your personal information to
                third parties for their marketing purposes.
              </p>
            </div>

            {/* Disclosure of Information */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Disclosure of Information
              </h2>
              <p className="mb-4">
                We may disclose your personal information in the following
                circumstances:
              </p>
              <ul className="ml-6 list-disc space-y-2 mb-4">
                <li>With your prior permission</li>
                <li>
                  To affiliated insurers and service providers as per
                  contractual consent
                </li>
              </ul>
              <p className="mb-4">
                We may also disclose your personal information if required by
                law, regulation, or legal process, or if we believe disclosure is
                necessary to protect our rights, property, or safety, or that
                of our users or others.
              </p>
              <p className="mb-4">
                If you wish to request access to your personal data or have any
                questions about how we handle your information, please contact
                us at{" "}
                <a
                  href="mailto:support@suretybondhub.in"
                  className="text-[#cf6734] hover:underline"
                >
                  support@suretybondhub.in
                </a>
                .
              </p>
            </div>

            {/* Log Files */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Log Files
              </h2>
              <p className="mb-4">
                Like many websites, we use standard log files that record
                information such as IP addresses, browser type, date and time
                stamp, referring pages, and other technical information. We use
                this information to analyze website traffic, improve our
                marketing efforts, and enhance the functionality of our website.
                This information does not contain personally identifiable
                information.
              </p>
            </div>

            {/* Legal Compliance */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Legal Compliance
              </h2>
              <p className="mb-4">
                We comply with the Information Technology Act, 2000 and the
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011. We are committed to protecting your personal information
                in accordance with these laws and regulations.
              </p>
              <p className="mb-4">
                We may share your personal information with legal authorities if
                required by law or if we believe such disclosure is necessary to
                comply with legal processes, protect our rights, or ensure the
                safety of our users.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Security
              </h2>
              <p className="mb-4">
                We use industry-standard encryption technologies and security
                measures to protect your personal information from unauthorized
                access, use, disclosure, alteration, or destruction. Your data
                is securely stored and accessed only for legitimate business
                purposes or as required by law.
              </p>
            </div>

            {/* Retention of Information */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Retention of Information
              </h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to
                provide you with our services or as required by law. This may
                include retaining information for tax, accounting, or legal
                compliance purposes. When we no longer need your personal
                information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Links to Other Websites
              </h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                third-party websites. We encourage you to review the privacy
                policies of any third-party websites you visit.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Cookies
              </h2>
              <p className="mb-4">
                We use cookies, which are small text files stored on your device,
                to enhance your user experience and remember your preferences.
                Cookies help us improve website performance and analytics, and
                track session information.
              </p>
              <p className="mb-4">
                You can disable cookies in your browser settings, but this may
                affect the functionality of our website and limit your ability to
                use certain features.
              </p>
            </div>

            {/* Amendments */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Amendments
              </h2>
              <p className="mb-4">
                Surety Bond Hub reserves the right to modify or update this
                Privacy Policy at any time without prior notice. We encourage you
                to review this Privacy Policy periodically to stay informed
                about how we are protecting your personal information. Your
                continued use of our services after any changes to this Privacy
                Policy constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-4 text-base font-semibold text-slate-900">
                Contact Information:
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or how we handle your personal information,
                please contact us at{" "}
                <a
                  href="mailto:support@suretybondhub.in"
                  className="text-[#cf6734] hover:underline"
                >
                  support@suretybondhub.in
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white px-6 py-12 text-slate-800 md:px-12">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
            {/* Left logo block */}
            <div>
              <Image
                src="/logo updated.png"
                alt="Indus Hub logo"
                width={110}
                height={24}
                className="h-6 w-auto"
              />
              <p className="mt-2 text-sm text-slate-700">Your Growth Partner</p>
            </div>

            {/* Right contact block */}
            <div className="text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Call:</p>
              <p className="mt-1 text-sm text-slate-800">+91 99256 24974</p>
              <p className="mt-4 font-semibold text-slate-900">Email:</p>
              <p className="mt-1 text-sm text-slate-800">pravin@indushub.in</p>
              <form
                id="newsletter-privacy"
                className="mt-4 flex max-w-xs items-stretch gap-0"
              >
                <input
                  type="email"
                  placeholder="Write Email"
                  name="email"
                  className="h-9 w-full flex-1 rounded-l-sm border border-slate-300 bg-white px-3 text-[11px] text-slate-800 outline-none focus:border-[#cf6734]"
                />
                <button
                  type="submit"
                  className="h-9 rounded-r-sm bg-[#cf6734] px-4 text-[12px] font-semibold text-white hover:bg-[#b45828]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                  >
                    <path
                      d="M5 3h8v8M5 11l8-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
              <p
                id="newsletter-privacy-status"
                className="mt-2 hidden text-xs font-semibold text-green-600"
              >
                Submitted. Thank you!!
              </p>
            </div>
          </div>

          {/* Bottom links */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-300 pt-5 text-xs text-slate-700">
            <Link href="/about" className="hover:text-[#cf6734]">
              About
            </Link>
            <Link href="/indushub-services" className="hover:text-[#cf6734]">
              Services
            </Link>
            <Link href="/privacy" className="hover:text-[#cf6734]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#cf6734]">
              Terms and Conditions
            </Link>
          </div>
        </footer>
        <ConfettiTrigger formIds={["newsletter-privacy"]} />
        <FormFeedback
          mappings={[
            {
              formId: "newsletter-privacy",
              messageId: "newsletter-privacy-status",
            },
          ]}
        />
      </main>
    </div>
  );
}

