import React from 'react';

const ExpertiseSection: React.FC = () => {
  return (
    <div className="mb-12 animate-fadeIn">
      <h3 className="text-lg font-semibold text-white mb-6 text-center flex items-center justify-center space-x-2">
        <span>Areas of Expertise</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-3">Software Development</h4>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Programming Languages: Python, R, C++, Java, .Net</li>
            <li>Web Technologies/Frameworks: Django, Flask, Angular</li>
            <li>Data Visualization: Tableau, Qlikview, Looker, D3.js</li>
            <li>Databases: SQL, NoSQL, Graph Databases</li>
            <li>Cloud Platforms: Azure, Google Cloud, AWS</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-3">Data Science / Machine Learning</h4>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Regression Models: Linear, SVR, SGD, Random Forest</li>
            <li>Classification Models: Random Forest, SVM, Logistic, KNN, Neural Networks</li>
            <li>Clustering Models: K-means, DB-Scan, Hierarchical</li>
            <li>NLP: Sentiment Analysis, Info Extraction, Topic Segmentation</li>
            <li>Model Deployment: Hosting, API Development, Model Tuning</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-3">Research & Consulting</h4>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Market Research & Market Size Estimation</li>
            <li>Financial Modelling & Back-Testing</li>
            <li>Equity Research & Risk Management</li>
            <li>Performance & Cost Optimization</li>
            <li>Business/Opportunity Analysis</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-3">Data Analytics & Visualization</h4>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Data Gathering & Web Data Extraction</li>
            <li>Data Processing, Wrangling & Standardization</li>
            <li>Dashboard Design with Key Metrics</li>
            <li>Customized Web & Mobile Applications</li>
            <li>End-to-End Data Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
