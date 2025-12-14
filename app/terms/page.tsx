import React from 'react';

// Reusing the PolicySection interface for structure
interface PolicySection {
  title: string;
  id: string;
  content: string | string[];
}

const schoolName = '[YOUR SCHOOL NAME]'; // Placeholder
const schoolAddress = '[YOUR SCHOOL ADDRESS]'; // Placeholder
const tosEffectiveDate = 'January 1, 2024'; // Placeholder
const websiteURL = '[www.yourschoolwebsite.edu]'; // Placeholder

const termsOfServiceContent: PolicySection[] = [
  {
    title: 'Agreement to Terms',
    id: 'agreement',
    content: `These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ${schoolName} ("School," "we," "us," or "our"), concerning your access to and use of the ${websiteURL} website. By accessing the website, you agree to be bound by all of these Terms.`,
  },
  {
    title: 'Intellectual Property Rights',
    id: 'ip-rights',
    content: [
      'Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.',
      'The Content and Marks are provided on the website "AS IS" for your information and personal use only. You are granted a limited license to access and use the website for non-commercial educational purposes.',
    ],
  },
  {
    title: 'User Conduct and Prohibited Activities',
    id: 'user-conduct',
    content: [
      'You may not access or use the website for any purpose other than that for which we make the website available.',
      'Prohibited activities include, but are not limited to, unauthorized access to the site, scraping data, attempting to circumvent security features, and using the website to transmit malicious code.',
      'Any user-submitted content (e.g., comments on a blog, if applicable) must not be obscene, defamatory, harassing, or violate any law.',
    ],
  },
  {
    title: 'Links to Third-Party Websites',
    id: 'third-party-links',
    content: `The website may contain links to other websites ("Third-Party Websites") as a convenience. We do not monitor or endorse these websites and are not responsible for their content or privacy practices. Your use of Third-Party Websites is at your own risk.`,
  },
  {
    title: 'Disclaimer and Limitation of Liability',
    id: 'disclaimer',
    content: [
      'THE WEBSITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE WEBSITE SERVICES WILL BE AT YOUR SOLE RISK.',
      'WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF. WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE WEBSITE.',
    ],
  },
  {
    title: 'Governing Law',
    id: 'governing-law',
    content: `These Terms and your use of the website are governed by and construed in accordance with the laws of [STATE/REGION OF SCHOOL] without regard to its conflict of law principles.`,
  },
  {
    title: 'Contact Information',
    id: 'contact',
    content: `For any questions regarding these Terms of Service, please contact us at: ${schoolAddress}.`,
  },
];

export const TermsOfService: React.FC = () => {
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
        {schoolName} Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: **{tosEffectiveDate}**
      </p>

      {/* Policy Content */}
      <div className="space-y-10">
        {termsOfServiceContent.map((section) => (
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