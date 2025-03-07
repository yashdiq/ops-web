import React from "react";

interface TagProps {
  text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary">
      {text}
    </span>
  );
};
