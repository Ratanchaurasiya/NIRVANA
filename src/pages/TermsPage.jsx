import React from 'react';
import { ShieldCheck, ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage({ onNavigate }) {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <div>
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white text-[#B69B65] border border-[#E6E2D8] text-xs font-mono uppercase tracking-wider hover:border-[#B69B65] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="text-center space-y-3 border-b border-[#E6E2D8] pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-white border border-[#E6E2D8] text-[#B69B65] text-xs font-mono uppercase tracking-widest">
          <FileText className="w-3.5 h-3.5 text-[#B69B65]" />
          <span>OFFICIAL USER AGREEMENT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5852] font-light">
          Nirvana Group Website Terms of Use & Legal Framework
        </p>
      </div>

      <div className="rounded-none bg-white p-6 sm:p-10 border border-[#E6E2D8] shadow-xl space-y-8 text-xs sm:text-sm text-[#5C5852] leading-relaxed font-light">
        
        <div className="p-4 rounded-none bg-[#FAF9F6] border border-[#E6E2D8] text-[#5C5852] space-y-2">
          <p>
            If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Nirvana Group' relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
          </p>
          <p className="text-[#B69B65] font-mono text-xs">
            The term ‘us’ or ‘we’ refers to the owner of the website, Nirvana Group, Ahmedabad, Gujarat, India. The term ‘you’ refers to the user or viewer of our website.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-[#B69B65] font-mono text-xs uppercase tracking-wider">
            Terms of Use Guidelines:
          </h3>

          <ul className="space-y-4 list-disc list-inside text-[#5C5852]">
            <li className="pl-2">
              The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </li>
            <li className="pl-2">
              Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </li>
            <li className="pl-2">
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
            </li>
            <li className="pl-2">
              This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
            </li>
            <li className="pl-2">
              All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
            </li>
            <li className="pl-2">
              Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
            </li>
            <li className="pl-2">
              From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
            </li>
            <li className="pl-2">
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of Union of India.
            </li>
            <li className="pl-2">
              <strong>To Communicate with You:</strong> We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and send you marketing communications (with your consent) via different channels, including but not limited to SMS, Email, WhatsApp, RCS and Voice.
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
