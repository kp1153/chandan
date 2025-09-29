// app/privacy-policy/page.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                Your privacy is important to us
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  MOTHER TONGUE Privacy Policy
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    We are committed to protecting your privacy. We will only
                    use the information that we collect about you lawfully.
                  </p>

                  <p>
                    We collect information about you for two reasons: firstly,
                    to process your order; and secondly, to provide you with the
                    best possible service. We will e-mail you only with details
                    of the status of your order, order confirmation and
                    information about updates to our service.
                  </p>

                  <p>
                    From time to time, we would like to send you information
                    about our services and those of our partners by email. You
                    are free to choose whether you would like to receive such
                    correspondence.
                  </p>

                  <p className="font-semibold text-gray-800">
                    The type of information we will collect about you includes:
                  </p>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">▸</span>
                      <span>Your name</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">▸</span>
                      <span>Address</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">▸</span>
                      <span>Phone number</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-3 mt-1">▸</span>
                      <span>Email address</span>
                    </li>
                  </ul>

                  <p>
                    We will never collect sensitive information about you
                    without your explicit consent.
                  </p>

                  <p>
                    We will make every effort to keep the information we hold
                    about you accurate and up to date.
                  </p>

                  <p>
                    The personal information which we hold will be held securely
                    in accordance with our internal security policy, the law.
                  </p>
                </div>

                {/* Info Box */}
                <div className="mt-12 bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600">
                  <p className="text-gray-700">
                    Mother Tongue has successfully completed 14 years of
                    operations. Our significant achievements during the last
                    fourteen years have helped us build an organization and
                    Mother Tongue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
