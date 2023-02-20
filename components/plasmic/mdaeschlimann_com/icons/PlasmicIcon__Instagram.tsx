// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramIcon(props: InstagramIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-143 145 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M113 446c24.8 0 45.1-20.2 45.1-45.1 0-9.8-3.2-18.9-8.5-26.3-8.2-11.3-21.5-18.8-36.5-18.8s-28.3 7.4-36.5 18.8c-5.3 7.4-8.5 16.5-8.5 26.3C68 425.8 88.2 446 113 446zm98.4-100.1v-43.4h-5.6l-37.8.1.2 43.4z"
        }
      ></path>

      <path
        d={
          "M183 401c0 38.6-31.4 70-70 70s-70-31.4-70-70c0-9.3 1.9-18.2 5.2-26.3H10v104.8C10 493 21 504 34.5 504h157c13.5 0 24.5-11 24.5-24.5V374.7h-38.2c3.4 8.1 5.2 17 5.2 26.3z"
        }
      ></path>

      <path
        d={
          "M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm128 229.7v104.8c0 27.3-22.2 49.5-49.5 49.5h-157C7.2 529-15 506.8-15 479.5V322.4c0-27.3 22.2-49.5 49.5-49.5h157c27.3 0 49.5 22.2 49.5 49.5v52.3z"
        }
      ></path>
    </svg>
  );
}

export default InstagramIcon;
/* prettier-ignore-end */
