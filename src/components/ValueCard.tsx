
import React from "react";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-finx-primary/10">
      <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center">
          <Icon className="text-finx-primary" size={24} />
        </div>
        <h3 className="font-roboto font-bold text-xl text-finx-primary">{title}</h3>
        <p className="font-inter text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
