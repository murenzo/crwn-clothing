import React from "react";

// import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props} className="custom-button">
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
