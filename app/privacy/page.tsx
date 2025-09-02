export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Effective Date: {new Date().toLocaleDateString()}</p>

      <p className="mb-4">
        BeeMomHive values your privacy. This Privacy Policy explains how we
        collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, or
        other details you provide through forms or when using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        Your information is used to provide updates about BeeMomHive, respond to
        inquiries, and improve our services. We do not sell or share your data
        with third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Choices</h2>
      <p className="mb-4">
        You may request deletion of your data or unsubscribe from updates at
        any time by contacting us at support@momhive.org.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at
        <strong> support@momhive.org</strong>.
      </p>
    </div>
  );
}

