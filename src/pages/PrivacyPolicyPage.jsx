import React from 'react';
import { ShieldCheck, Sparkles, Lock, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <div>
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#1F1F1F] text-[#B69B65] border border-[#2E2E2E] text-xs font-mono uppercase tracking-wider hover:border-[#B69B65] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="text-center space-y-3 border-b border-[#2E2E2E] pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>OFFICIAL LEGAL DOCUMENTATION</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F5F1E8] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-[#A39F97] font-light">
          Subject to the terms of the Site Policy (User Agreement) of NIRVANA GROUP website.
        </p>
      </div>

      <div className="rounded-none bg-[#1F1F1F] p-6 sm:p-10 border border-[#2E2E2E] shadow-xl space-y-8 text-xs sm:text-sm text-[#A39F97] leading-relaxed font-light">
        
        <div className="p-4 rounded-none bg-[#171717] border border-[#2E2E2E] text-[#B69B65] text-xs font-mono">
          This Privacy policy is subject to the terms of the Site Policy (User Agreement) of this website.
        </div>

        <div className="space-y-6 divide-y divide-[#2E2E2E]">
          
          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">[1] Third Party Non-Disclosure</h3>
            <p>
              The personal information provided by the users to us will not be provided to third parties without previous consent of the concerned user. Information of a general nature may however be revealed to external parties.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">[2] Data Protection & Consent</h3>
            <p>
              Every effort shall be made to keep the information provided by the users in a safe manner, the information will be displayed on the website will be done so only after obtaining consent from the users.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">[3] User Responsibilities & Transaction Credentials</h3>
            <p>
              You are solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and NIRVANA GROUP assumes no responsibility or liability for their improper use of information relating to such usage of credit cards / debit cards used by the subscriber online / off-line.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">[4] Optional Information Choice</h3>
            <p>
              A user always has the option of not providing the information which is not mandatory.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">[5] User Communication & Personalization</h3>
            <p>
              <strong className="text-[#F5F1E8]">To Communicate with You:</strong> We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and send you marketing communications (with your consent) via different channels, including but not limited to SMS, Email, WhatsApp, RCS and Voice.
            </p>
            <p className="mt-2">
              In order to provide a personalized browsing experience, we may collect personal information from you. Also, we may require you to complete a registration form or ask for some information seeking your preferences regarding the property you are looking for. Based on your preferences, we will be able to deliver or allow you to access the most relevant information that meets your end.
            </p>
            <p className="mt-2">
              To extend this personalized experience we may track the IP address of a User’s computer / device and save certain information on your system in the form of cookies. A User has the option of accepting or declining the cookies of this website by changing the settings of your browser.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">Site Usage, Marketing & Law Enforcement Compliance</h3>
            <p>
              Any User browsing this website, is not required to disclose his identity or provide any of his information every time. It is only at the time of registration, the User is required to furnish the details in the registration form. You agree that NIRVANA GROUP may use personal information provided by you to improve its marketing and promotional efforts, to analyze site usage, improve the Site’s content and product offerings, and customize the Site’s content, layout, and services. This shall further improve the website content and help us to tailor it to meet your needs, and to provide a smooth, efficient, safe and customized experience while using this website.
            </p>
            <p className="mt-2">
              You agree that NIRVANA GROUP may use your personal information to contact you and deliver information to you that are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, forum comments and reviews, your portfolio related updates, and communications relevant to your use of this website. By accepting this Privacy Policy, you explicitly agree to receive this information via SMS, Whatsapp, Email or Calls. If you do not wish to receive these communications, you may opt out of the receipt of certain communications in your profile. You may make changes to your profile at any time. It is the belief of NIRVANA GROUP that privacy of a person can be best guaranteed by working in conjunction with the Law enforcement authorities.
            </p>
            <p className="mt-2">
              All NIRVANA GROUP websites including this website fully comply with all Indian Laws applicable. NIRVANA GROUP has always cooperated with all law enforcement inquires. NIRVANA GROUP may disclose all or part of your personal details in response to a request from the law enforcement authorities or in a case of bonafide requirement to prevent an imminent breach of the law.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">Authenticity & Display Advertising Remarketing</h3>
            <p>
              NIRVANA GROUP has taken all reasonable steps to ensure that all the information on this website is authentic. Users are advised to research independently the credential of the advertisers provided on this website. NIRVANA GROUP shall not have any responsibility in this regard. We also recommend that you visit link to User Agreement for more comprehensive information on this aspect.
            </p>
            <p className="mt-2">
              NIRVANA GROUP has implemented and uses Display Advertising. NIRVANA GROUP is using Remarketing with Google Analytics to advertise online. You can opt-out of Google Analytics for Display Advertising and customize Google Display Network ads using the Ads Preferences Manager. Third-party vendors, including Google, show our ads on sites across the Internet. We and third-party vendors, including Google, use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the Double Click cookie) together to inform, optimize, and serve ads based on someone’s past visits to our website.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
