import React from 'react';

interface Industry {
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    title: 'Financial Services',
    description:
      'Financial Services is the biggest industry that we serve. Our sharp-focused multi-skilled team serve a diverse range of firms ranging from asset management companies to hedge funds to investment research companies. We co-partner with them in their quest for quality research, data-driven analysis, and decision-making solutions.',
  },
  {
    title: 'Healthcare',
    description:
      'With an ever-growing healthcare sector, we help the clients with industry analytics ranging from market research, patient flow analytics, cost mapping, quality improvement, and performance analytics among others to implement strategies in accordance to the new-age healthcare solutions that the industry is bringing to the fore.',
  },
  {
    title: 'Consumer Products & Retail',
    description:
      'CP&R is an industry that never stops to adapt. Come what may, consumption shall continue. And our team works to address your needs pertaining to market research, strategic expansion like greenfield/brownfield investments, market size, product information extraction and competitor analysis among others.',
  },
];

const ClientsSection: React.FC = () => {
  return (
    <div className="mb-12 animate-fadeIn">
      <h3 className="text-lg font-semibold text-white mb-6 text-center flex items-center justify-center space-x-2">
        <span>Industries We Serve</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col hover:bg-white/10 transition-all duration-300">
            <h4 className="text-white text-md font-semibold mb-2 text-center">{industry.title}</h4>
            <p className="text-slate-400 text-sm text-justify">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
