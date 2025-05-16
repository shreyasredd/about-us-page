// import React from "react";
// interface SectionHeadingProps {
//   title: string;
//   subtitle?: string;
//   centered?: boolean;
//   className?: string;
// }
// const SectionHeading: React.FC<SectionHeadingProps> = ({
//   title,
//   subtitle,
//   centered = true,
//   className = ""
// }) => {
//   return <div className={`${centered ? "text-center" : ""} ${className} mb-8`}>
//       <h2 className="font-roboto text-3xl md:text-4xl mb-4 font-bold text-finx-primary">
//         {title}
//       </h2>
//       {subtitle && <p className="font-inter text-lg text-finx-blue/90 max-w-2xl mx-auto">
//           {subtitle}
//         </p>}
//     </div>;
// };
// export default SectionHeading;

import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClass?: string;
  subtitleClass?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  titleClass = "",
  subtitleClass = "",
}) => {
  return (
    <div className={`${centered ? "text-center" : ""} mb-8`}>
      <h2 className={`font-roboto text-3xl md:text-4xl mb-4 font-bold text-finx-primary ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-inter text-lg text-finx-blue/90 max-w-2xl mx-auto ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
