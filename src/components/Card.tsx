import React, { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant?: CardVariant;
  children?: React.ReactNode;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
	
	return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "none",
        background: variant === CardVariant.primary ? "gray" : "",
		  }}
		  onClick = {() => onClick(0)}
    >
      {children}
    </div>
  );
};

export default Card;
