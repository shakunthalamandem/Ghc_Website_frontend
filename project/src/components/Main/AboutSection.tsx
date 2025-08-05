import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="mb-12 animate-fadeIn max-w-6xl mx-auto px-4">
      <h3 className="text-lg font-semibold text-white mb-6 text-center">We Are Golden Hills</h3>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-slate-400 text-sm leading-relaxed mb-10">
        <p className="mb-4">
          Golden Hills has been providing services since May 2014 to clients in Boston, New York, London, and Hong Kong. 
          Our multi-skilled team brings 50+ years of combined experience in the financial services sector and information technology, 
          with talent from best-in-class schools and prior experience with well-recognized firms.
        </p>
        <p className="mb-4">
          We are technology and industry experts with domain knowledge in Financial Services, Healthcare, and Consumer Products & Retail. 
          Our services span software development, decision-making analytics using AI/ML, and custom visualization services.
        </p>
        <p className="mb-4">
          Our quick turnaround, ability to handle complex tasks and large data sets, along with our focus on real-time collaboration distinguishes us. 
          We pride ourselves as your Business Partner for Success!
        </p>
      </div>

      <h3 className="text-lg font-semibold text-white mb-6 text-center">Founder</h3>
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0">
          {/* Replace with actual image if available */}
          <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
            SR
          </div>
        </div>
        <div>
          <h4 className="text-white text-md font-semibold mb-2">Suresh Raju</h4>
          <p className="text-slate-400 text-sm mb-2">Founder & Director</p>
          <p className="text-slate-400 text-sm mb-4">
            Suresh Raju is the founder of Golden Hills. He has extensive experience in Investment Management, Capital Markets, Financial Structuring, 
            Valuation, Corporate Finance, and Due Diligence.
          </p>
          <p className="text-slate-400 text-sm mb-4">
            Prior to Golden Hills Capital, Suresh has more than 4 years of private equity investing experience with TVS Capital Funds, 
            7 years of investment banking with Deutsche Bank's US (NYC and Boston) business, and over 4 years of technology operations 
            with ABAQUS Inc. near Boston. Suresh is a member of Indian Angel Network and a Charter Member of TiE.
          </p>
          <p className="text-slate-400 text-sm">
            Suresh holds an MBA from University of Chicago's Booth Business School, M.S. from Ohio State University, 
            and B.Tech from Indian Institute of Technology (IIT), Madras, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
