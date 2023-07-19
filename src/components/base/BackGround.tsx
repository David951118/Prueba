import React, { FC } from "react";

interface Props {
  opacity: number;
  imageUrl: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  fillScreen?: boolean;
}

const Background: FC<Props> = ({
  opacity,
  imageUrl,
  style,
  children,
  fillScreen = true,
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), rgba(255, 255, 255, ${opacity})), url(${imageUrl})`,
    backgroundSize: "contain",
    ...style,
  };

  return (
    <div
    className="h-100 w-100"
      style={
        fillScreen
          ? {
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }
          : undefined
      }
    >
      <div style={{ ...gradientStyle, display: "flex", flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Background;
