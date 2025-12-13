import React from 'react';

// Define the structure for policy section content for clean rendering
interface PolicySection {
  title: string;
  id: string;
  content: string | string[];
}

const schoolName = '[YOUR SCHOOL NAME]'; // Placeholder
const schoolContactEmail = 'contact@[yourschoolwebsite].edu'; // Placeholder
const effectiveDate = 'January 1, 2024'; // Placeholder

const privacyPolicyContent: PolicySection[] = [
  {
    title: 'Introduction',
    id: 'introduction',
    content: `Welcome to the ${schoolName} website. We are committed to protecting the privacy and security of our website visitors, especially students and their families. This Privacy Policy describes the information we collect, how it is used, and your rights concerning that information.`,
  },
  {
    title: 'Information We Collect',
    id: 'info-collected',
    content: [
      '**Personal Information You Provide:** We only collect personal information when you voluntarily provide it, such as when you submit an inquiry through a contact form, register for an event, or apply for admission. This may include your name, email address, phone number, and relationship to a student.',
      '**Log Data and Cookies (Non-Personal):** Our website automatically collects certain non-personal information. This Log Data may include your computer’s IP address, browser type, pages visited, and the time and date of your visit. We use cookies (small text files) to improve your experience and analyze site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
    ],
  },
  {
    title: 'How We Use Your Information',
    id: 'use-info',
    content: [
      'To operate, maintain, and improve the school website and our services.',
      'To respond to your comments, questions, and requests (e.g., admissions inquiries or general contact forms).',
      'To provide you with school news, updates, or newsletters if you have opted-in.',
      'To monitor and analyze trends, usage, and activities in connection with our website.',
    ],
  },
  {
    title: 'Data Security and Storage',
    id: 'security',
    content: `We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.`,
  },
  {
    title: 'Children\'s Privacy (COPPA/FERPA Compliance)',
    id: 'children-privacy',
    content: `Our informational website is not intended to collect Personal Information from children under the age of 13. If you believe we have inadvertently collected such information, please contact us immediately at ${schoolContactEmail}, and we will take necessary steps to delete the information. Note that information regarding enrolled students is handled separately under [reference relevant internal policy/FERPA/local law].`,
  },
  {
    title: 'Changes to This Privacy Policy',
    id: 'changes',
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. You are advised to review this Privacy Policy periodically for any changes.`,
  },
  {
    title: 'Contact Us',
    id: 'contact',
    content: `If you have any questions about this Privacy Policy, please contact us at: ${schoolContactEmail}.`,
  },
];

export const PrivacyPolicy: React.FC = () => {
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc ml-6 space-y-2">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 shadow-xl rounded-lg my-10">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">
        {schoolName} Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: **{effectiveDate}**
      </p>

      {/* Table of Contents - Optional, but great UX */}
      <nav className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
        <h3 className="text-lg font-semibold mb-2 text-blue-800">
          Table of Contents
        </h3>
        <ul className="flex flex-wrap gap-x-4">
          {privacyPolicyContent.map((section) => (
            <li key={section.id} className="text-sm">
              <a href={`#${section.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Policy Content */}
      <div className="space-y-10">
        {privacyPolicyContent.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 border-b pb-1">
              {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {renderContent(section.content)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};