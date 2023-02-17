import React from 'react';
import { ReactComponent as Certificate } from '../../../assets/icons/certificate.svg';
import { ReactComponent as Doc } from "../../../assets/icons/document.svg";
import { ReactComponent as Truck } from "../../../assets/icons/truck.svg";
import { ReactComponent as LogoRPBI } from "../../../assets/icons/logo-rpbi.svg";
import { ReactComponent as Circle1 } from "../../../assets/icons/circle-1.svg";
import { ReactComponent as Circle2 } from "../../../assets/icons/circle-2.svg";
import { ReactComponent as Circle3 } from "../../../assets/icons/circle-3.svg";


const Icons = props => {
  const Components = {
    certificate: Certificate,
    doc: Doc,
    truck: Truck,
    logoRPBI: LogoRPBI,
    circle1: Circle1,
    circle2: Circle2,
    circle3: Circle3
  };

  return React.createElement(Components[props.content], {
    key: 0,
    block: props.content,
    width: props.width,
    height: "128"
  });
}

export default Icons;