
import * as React from 'react';
import { useState } from 'react';
import { E164Number } from 'libphonenumber-js/types';
import SrcPhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';

interface PhoneInputProps {
  className?: string
  placeHolder?: string
  name?: string
}

export function PhoneInput({ className, placeHolder, name }: PhoneInputProps) {
  let [value, setValue]: [E164Number | undefined, any] = useState()
  return <>

    <SrcPhoneInput
      name={name}
      className={className}
      placeHolder={placeHolder}
      defaultCountry="FR"
      error={value ? (isPossiblePhoneNumber(value) ? undefined : 'Numéro de téléphone invalide') : undefined}
      formattedValue={value}
      value={value}
      onChange={setValue}
       />
    <style>
      :root {`
{
--PhoneInput-color--focus: #03b2cb;
--PhoneInputInternationalIconPhone-opacity: 0.8;
--PhoneInputInternationalIconGlobe-opacity: 0.65;
--PhoneInputCountrySelect-marginRight: 0.35em;
--PhoneInputCountrySelectArrow-width: 0.3em;
--PhoneInputCountrySelectArrow-marginLeft: var(--PhoneInputCountrySelect-marginRight);
--PhoneInputCountrySelectArrow-borderWidth: 1px;
--PhoneInputCountrySelectArrow-opacity: 0.45;
--PhoneInputCountrySelectArrow-color: currentColor;
--PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
--PhoneInputCountrySelectArrow-transform: rotate(45deg);
--PhoneInputCountryFlag-aspectRatio: 1.5;
--PhoneInputCountryFlag-height: 1em;
--PhoneInputCountryFlag-borderWidth: 1px;
--PhoneInputCountryFlag-borderColor: rgba(0,0,0,0.5);
--PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
--PhoneInputCountryFlag-backgroundColor--loading: rgba(0,0,0,0.1);
}`
      }
      .PhoneInput {`
{
display: flex; align-items: center;
}`
      }
      .PhoneInputCountry {`
{
position: relative;
align-self: stretch;
display: flex;
align-items: center;
margin-right: 0.35em;
margin-right: var(--PhoneInputCountrySelect-marginRight);
}`
      }
      .PhoneInputCountrySelect {`
{
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 1;
border: 0;
opacity: 0;
cursor: pointer;
}`
      }
      .PhoneInputCountryIcon--border {`
{
background-color: rgba(0,0,0,0.1);
background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);
box-shadow: 0 0 0 1px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.5);
box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor), inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor);
}`
      }
      .PhoneInputCountryIcon {`
{
width: calc(1em * 1.5);
width: calc(var(--PhoneInputCountryFlag-height) * var(--PhoneInputCountryFlag-aspectRatio));
height: 1em;
height: var(--PhoneInputCountryFlag-height);
}`
      }
      .PhoneInputCountryIconImg {`
{
display: block;
width: 100%;
height: 100%;
}`
      }
      .PhoneInputCountrySelectArrow {`
{
display: block;
content: '';
width: 0.3em;
width: var(--PhoneInputCountrySelectArrow-width);
height: 0.3em;
height: var(--PhoneInputCountrySelectArrow-width);
margin-left: 0.35em;
margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
border-style: solid;
border-color: currentColor;
border-color: var(--PhoneInputCountrySelectArrow-color);
border-top-width: 0;
border-bottom-width: 1px;
border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
border-left-width: 0;
border-right-width: 1px;
border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
transform: rotate(45deg);
transform: var(--PhoneInputCountrySelectArrow-transform);
opacity: 0.45;
opacity: var(--PhoneInputCountrySelectArrow-opacity);
}`
      }
      .PhoneInputInput {`
{
font-family: var(--mixin-5Aea3rR1fDdpd_font-family);
font-size: var(--mixin-5Aea3rR1fDdpd_font-size);
font-weight: var(--mixin-5Aea3rR1fDdpd_font-weight);
font-style: var(--mixin-5Aea3rR1fDdpd_font-style);
color: var(--mixin-5Aea3rR1fDdpd_color);
text-align: var(--mixin-5Aea3rR1fDdpd_text-align);
text-transform: var(--mixin-5Aea3rR1fDdpd_text-transform);
letter-spacing: var(--mixin-5Aea3rR1fDdpd_letter-spacing);
white-space: var(--mixin-5Aea3rR1fDdpd_white-space);
padding-left: 0.4em;
padding-right: 0.4em;
padding-top: 0.3em;
padding-bottom: 0.3em;
border-radius: 0.2em;
border: 1px solid #ffffff;
background-color: #fcfcfc;
outline: none;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}`
      }
      .PhoneInputInput {`
{
flex: 1;
min-width: 0;
}`
      }
    </style>
    <p>{value}</p>
  </>
}
