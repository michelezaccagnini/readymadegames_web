import { useNavigation } from '../lib/stores/useNavigation';
import { Button } from './ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  const { setCurrentSection } = useNavigation();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => setCurrentSection('home')}
          className="mb-8 text-purple-300 hover:text-white flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Button>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-10">
          <div className="p-3 bg-purple-600/30 rounded-xl">
            <Shield className="h-8 w-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="text-purple-300 mt-1">Last updated: March 24, 2026</p>
          </div>
        </div>

        {/* Policy content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
            <p>
              Readymade Games is committed to protecting your privacy. This Privacy Policy explains
              how our games and website handle information. The short version: <strong className="text-white">we do not collect
              any personal data from you</strong>, period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Data We Collect</h2>
            <p>
              Our games do not collect, store, transmit, or share any personal data or
              personally identifiable information (PII) of any kind. This includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Names, email addresses, or contact information</li>
              <li>Device identifiers or hardware information</li>
              <li>Location data</li>
              <li>Usage statistics or analytics</li>
              <li>Gameplay data or progress</li>
              <li>Advertising identifiers</li>
              <li>Cookies or tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Third-Party Services</h2>
            <p>
              Our games do not integrate any third-party SDKs, analytics platforms, advertising
              networks, or social media trackers. No data is sent to any third party on your behalf.
            </p>
            <p className="mt-3">
              If our games are distributed through platforms such as the Apple App Store or Google
              Play Store, those platforms may collect certain information in accordance with their
              own privacy policies. We encourage you to review the privacy policies of any platform
              through which you download and use our games.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Internet Connectivity</h2>
            <p>
              Our games are designed to work fully offline and do not require an internet connection.
              No network requests are made during gameplay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Children's Privacy</h2>
            <p>
              Because we do not collect any data, our games are safe for users of all ages,
              including children under 13. We fully comply with the Children's Online Privacy
              Protection Act (COPPA) and equivalent regulations in other jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">This Website</h2>
            <p>
              The Readymade Games website (<strong className="text-white">readymadegames.com</strong>) may use standard
              server logs that record your IP address when you visit. These logs are used solely
              for security and operational purposes and are not used to identify individuals or
              build profiles. We do not use cookies, analytics trackers, or any form of
              behavioural advertising on this website.
            </p>
            <p className="mt-3">
              If you choose to contact us via the contact form, any information you voluntarily
              submit (such as your name and email) is used only to respond to your enquiry and is
              not stored beyond what is necessary for that purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Your Rights</h2>
            <p>
              Since we do not collect personal data, there is nothing to access, correct, or
              delete. If you have any questions or concerns about your privacy, you are welcome
              to reach out to us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us using the{' '}
              <button
                onClick={() => setCurrentSection('contact')}
                className="text-purple-400 underline hover:text-purple-300 transition-colors"
              >
                contact form
              </button>{' '}
              on this website.
            </p>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>Readymade Games &mdash; Making games, not profiles.</p>
        </div>
      </div>
    </div>
  );
}
