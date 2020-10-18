import * as React from "react";
import { ReactElement } from "react";
import "./avatar.scss";
interface Props {
  imageUrl?: string;
  type?: "circle" | "square";
  size: number;
  userName?: string;
  outline?: boolean;
  className?: string;
  isSymbol?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  hasLink?: boolean;
  pictureTextPlaceholder?: string;
  color?: string;
  status?: string;
  onClickAvatar?: () => void;
}
const DKAvatar = ({
  imageUrl,
  type = "square",
  size,
  userName = "",
  outline = false,
  className,
  isSymbol = true,
  children,
  hasLink = true,
  pictureTextPlaceholder = "",
  color = "symbol-light-primary",
  onClickAvatar,
  status,
}: Props): ReactElement => {
  return (
    <div
      className={
        (isSymbol ? "symbol symbol-" + size : "image-input ") +
        (type === "circle" ? " symbol-circle" : "") +
        (outline ? " image-input-outline" : "") +
        (className ? ` ${className}` : "") +
        (hasLink ? " cursor-pointer" : "") +
        ` ${color}`
      }
      style={{ minHeight: size + "px" }}
      onClick={() => {
        onClickAvatar && onClickAvatar();
      }}
    >
      {Boolean(imageUrl) && (
        <div
          className={isSymbol ? " symbol-label " : " image-input-wrapper h-" + size + "px w-" + size + "px"}
          style={{
            backgroundImage: `url(${Boolean(imageUrl) ? imageUrl : ""})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      )}
      {!Boolean(imageUrl) && (
        <div className="font-size-h6 symbol-label font-weight-bolder">{pictureTextPlaceholder}</div>
      )}
      {status === "online" && <i className="symbol-badge symbol-badge-bottom bg-success"></i>}
      {children}
    </div>
  );
};
export default DKAvatar;
