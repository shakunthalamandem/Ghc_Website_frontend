import React from 'react';
import { LucideIcon, Briefcase, DollarSign, Users, BarChart } from 'lucide-react';

interface CardBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
}

const icons: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  dollar: DollarSign,
  users: Users,
  chart: BarChart
};

const CardBlock: React.FC<CardBlockProps> = ({ title, subtitle, description, icon }) => {
  const Icon = icon && icons[icon] ? icons[icon] : Briefcase;

  return (
    <div className="p-5 bg-white/5 rounded-xl shadow border border-white/10">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-6 h-6 text-sky-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {subtitle && <p className="text-sm text-sky-200 mb-2">{subtitle}</p>}
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default CardBlock;
