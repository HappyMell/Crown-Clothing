import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  intervted,
  ...otherProps
}) => (
  <button
    className={`${intervted} ? 'inverted' ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
