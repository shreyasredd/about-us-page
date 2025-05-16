
import React from "react";
import { Card } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  imageSrc?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  description,
  imageSrc,
}) => {
  return (
    <Card className="p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 rounded-full bg-finx-secondary/30 flex items-center justify-center overflow-hidden mr-4">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-finx-primary font-roboto font-bold text-xl">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-roboto font-bold text-xl text-finx-primary">{name}</h3>
            <p className="font-inter text-finx-blue/80 text-sm">{position}</p>
          </div>
        </div>
        <p className="font-inter text-gray-600 text-sm">{description}</p>
      </div>
    </Card>
  );
};

export default TeamCard;
