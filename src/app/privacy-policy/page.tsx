export default function PrivacyPolicy() {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>Approved By Kathy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you fill out a contact form or apply for an auto loan. This may include:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Personal identification information (Name, Email address, Phone number)</li>
            <li>Financial information (Income, Employment details)</li>
            <li>Vehicle preferences</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Process your auto loan application</li>
            <li>Communicate with you about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">4. Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Lenders and financial institutions to process your loan application</li>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Law enforcement or other governmental agencies, as required by law</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided in the Contact section.</p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: Kathy@carnance.com</p>
          <p>Phone: 647-296-3108</p>
          <p>Address: 80 Toro Rd, Toronto, ON M3J 2A4, Canada</p>
        </section>
      </div>
    )
  }