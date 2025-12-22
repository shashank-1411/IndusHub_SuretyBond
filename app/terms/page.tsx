import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ConfettiTrigger } from "@/components/confetti-trigger";
import { FormFeedback } from "@/components/form-feedback";

export default function TermsPage() {
  return (
    <div className="page-offset min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="bg-white">
        {/* Page Title Section */}
        <section className="bg-[#cf6734] px-6 py-10 md:px-20">
          <h1 className="text-center text-3xl font-semibold text-white md:text-4xl">
            Terms & Conditions
          </h1>
        </section>

        {/* Main Content */}
        <section className="px-6 py-16 md:px-20 md:py-20">
          <div className="mx-auto max-w-4xl space-y-6 text-sm leading-relaxed text-slate-700 text-justify">
            <div>
              <p className="mb-4">
                SuretyBondHub.in is hosted by Mr. Pravin Patil and Mr. Sachin Patil, General Insurance Agents of ICICI Lombard General Insurance Company Limited and The New India Assurance Company Limited (hereinafter referred as SuretyBondHub).
              </p>
              <p className="mb-4">
                SuretyBondHub.in acts as a platform, through mobile App & Website (Portal), for facilitating purchase of insurance policies through licensed and registered insurance companies.
              </p>
            </div>

            <div>
              <p className="mb-4">
                By registering, subscribing, or using this SuretyBondHub.in web service and Application or any Service of SuretyBondHub on the Portal and/or Application, you signify your agreement to these terms of use. If you do not agree to these Terms of Use, please do not use this Application/Portal or Service.
              </p>
            </div>

            <div>
              <p className="mb-4">
                SuretyBondHub reserves the right, in its discretion, to change or modify all or any part of this Agreement at any time, effective immediately. Your continued use of the SuretyBondHub.in Application or Service constitutes your binding acceptance of these terms and conditions, including any changes or modifications made by SuretyBondHub as permitted above. Please be sure to review this Agreement periodically to ensure familiarity with the most current version. If at any time the terms and conditions of this Agreement are no longer acceptable to you, you should immediately cease all use of the Service.
              </p>
            </div>

            <div>
              <p className="mb-4">
                SuretyBondHub does not permit registration by and will not knowingly collect personally identifiable information from anyone under 18 on this Portal/Application. By registering for the Service, you represent and warrant that you are 18 years of age or older, as on date of this agreement, and that you have fully read and understood the Terms and Conditions as set forth in this agreement, without any impairment in judgment resulting from (but not limited to) mental illness, mental handicap, intoxication, medication, or any other health or other problem that could impair judgment. Additionally, you must provide true, accurate, and complete registration information to become a member of the Service ("Member"). Creating a Member account under automated means or under false or fraudulent pretence constitutes unauthorized use of the Service and such accounts will be terminated by SuretyBondHub.
              </p>
            </div>

            <div>
              <p className="mb-4">
                By using the Service, you represent and warrant that all registration information you submit is truthful and accurate, and you agree to the accuracy of such information. The profile that you compose upon registering for the Service (the 'Member Profile') must describe you, an individual person. Examples of inappropriate profiles include, but are not limited to, profiles that purport to represent an animal, place, inanimate object, fictional character, or real individual who is not you. If you wish to view or change your profile, you can do so via the "my profile" option on the Portal/Application.
              </p>
            </div>

            <div>
              <p className="mb-4">
                You agree to pay any charges incurred in connection with the Insurance you elect to purchase via SuretyBondHub.in at the rates as specified.
              </p>
            </div>

            <div>
              <p className="mb-4">
                If you believe someone has accessed the Portal/Application using your username and password without your authorization, you must contact SuretyBondHub by mailing us at{" "}
                <a
                  href="mailto:support@suretybondhub.in"
                  className="text-[#cf6734] hover:underline"
                >
                  support@suretybondhub.in
                </a>
                .
              </p>
            </div>

            <div>
              <p className="mb-4">
                We will make all reasonable attempts to contact you when your purchased insurance is due to expire, and offer a simple process for renewing your insurance. If your insurance expires before you accept our renewal offer, your access to SuretyBondHub.in and all its services will terminate without additional notice. Any special offers or discounts obtained upon your initial purchase or any subsequent purchases may not necessarily be offered on renewal. The Portal & Application provides general insurance-related advice from licensed and registered insurance companies only and does not constitute legal advice. You acknowledge that the Application contains information, software, photographs, audio and video clips, graphics, links and other material of SuretyBondHub (collectively, the "Content") that is protected by copyright, trademark or other proprietary rights of SuretyBondHub or third parties. All Content on the Portal & Application is copyrighted as a collective work of SuretyBondHub as per applicable copyright law. You agree to comply with any copyright notices, information, or restrictions contained in any Content available on or accessed through the Service. Users of the Application may use the Content only for their personal, non-commercial use.
              </p>
            </div>

            <div>
              <p className="mb-4">
                You may not modify, publish, transmit, reproduce, create derivative works from, distribute, perform, display, sell, transfer or in any way exploit any of the Content or Material, in whole or in part. Content consisting of downloadable software may not be reverse engineered unless specifically authorized by the owner of the software's patent and/or copyright. You also agree not to circumvent, disable or otherwise interfere with any security-related features of the Portal and/or Application or the Content, including features that prevent or restrict use or copying or those that enforce limitations on use.
              </p>
            </div>

            <div>
              <p className="mb-4">
                You are NOT allowed to DOWNLOAD or copy and make any personal, non-commercial, or commercial use of the Content or information from the Application in whole or in part without the express permission of SuretyBondHub. Requests for such permission should be made to{" "}
                <a
                  href="mailto:support@suretybondhub.in"
                  className="text-[#cf6734] hover:underline"
                >
                  support@suretybondhub.in
                </a>
                . Any rights not expressly granted herein are reserved. Please be advised that SuretyBondHub enforces its intellectual property rights to the fullest extent of the law.
              </p>
            </div>

            <div>
              <p className="mb-4">
                It is your responsibility to check the accuracy or relevant facts and opinions given on the Portal & Application before entering into any commitment based upon them.
              </p>
            </div>

            <div>
              <p className="mb-4">
                Upon download and installation of the Application, you grant the following permissions to the Applications to perform the following actions on the device you have installed the Application in:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>To read from, write on, modify and delete data pertaining to the Application on the device's hard disk and/or external storage.</li>
                <li>To access information about networks, your mail ID, access networks including Wi-Fi networks, receive and send data through the network.</li>
                <li>To determine your approximate & exact location from sources like, but not limited to mobile towers, GPS and connected Wi-Fi networks.</li>
                <li>To access the model number, IMEI number, and details about the operating system of the device the Application has been installed on, as well as the phone number of the device.</li>
                <li>To retrieve information about other Applications running on the device the Application has been installed on and open them.</li>
                <li>To detect when the phone has been switched off and switched on for the purpose of sending notification/push notifications.</li>
                <li>To access and change the display and sound settings of the device the Application has been installed in.</li>
              </ul>
            </div>

            <div>
              <p className="mb-4">
                From time to time, the Application may automatically check the version of the installed Application on the Device and, if applicable, provide updates for the Application (hereinafter referred to as "Updates"). Updates may contain, without limitation, bug fixes, patches, enhanced functionality, plug-ins and new versions of the Application. By installing the Application, you authorize the automatic download and installation of Updates and agree to download and install Updates manually if necessary. Your use of the Application and Updates shall be governed by this Agreement (as amended by any terms and conditions that may be provided with Updates).
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
                src="/1111 1.png"
                alt="Indus Hub logo"
                width={180}
                height={40}
                className="h-10 w-auto"
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
                id="newsletter-terms"
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
                id="newsletter-terms-status"
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
            <Link href="/privacy" className="hover:text-[#cf6734]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#cf6734]">
              Terms and Conditions
            </Link>
          </div>
        </footer>
        <ConfettiTrigger formIds={["newsletter-terms"]} />
        <FormFeedback
          mappings={[
            { formId: "newsletter-terms", messageId: "newsletter-terms-status" },
          ]}
        />
      </main>
    </div>
  );
}

