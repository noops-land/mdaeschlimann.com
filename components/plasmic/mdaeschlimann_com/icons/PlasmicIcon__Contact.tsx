// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ContactIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ContactIcon(props: ContactIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-1 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.5 9.5a8 8 0 11-8-8 8 8 0 018 8zm-2.354-2.86a.321.321 0 00-.32-.32H3.174a.321.321 0 00-.32.32v5.722a.321.321 0 00.32.32h10.652a.321.321 0 00.32-.32zM9.428 8.298H4.854v.8h4.574zm0 1.805H4.854v.8h4.574zm3.598-1.044V7.441h-1.598v1.617z"
        }
      ></path>
    </svg>
  );
}

export default ContactIcon;
/* prettier-ignore-end */
