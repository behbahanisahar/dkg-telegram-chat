import * as React from "react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
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
  color = "symbol-light-info",
}: Props): ReactElement => {
  return (
    <Link
      to={hasLink ? `/profile${userName ? "/" + userName : ""}` : ""}
      className={className}
      style={{ cursor: hasLink ? "pointer" : "auto" }}
    >
      <div
        className={
          (isSymbol ? "symbol symbol-" + size : "image-input ") +
          (type === "circle" ? " symbol-circle" : "") +
          (outline ? " image-input-outline" : "") +
          (className ? ` ${className}` : "") +
          ` ${color}`
        }
        style={{ minHeight: size + "px" }}
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
          <div className="font-size-h6 symbol-label font-weight-boldest">{pictureTextPlaceholder}</div>
        )}
        {children}
      </div>
    </Link>
  );
};
export default DKAvatar;
