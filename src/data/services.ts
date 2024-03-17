import { createElement, type ReactElement } from "react";
import {
  HiOutlineGlobeAlt,
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

type Service = {
  title: string;
  description: string;
  icon?: ReactElement;
};

const ICON_ATTRIBUTES = {
  className: "h-8 w-8",
};

const SERVICES: Service[] = [
  {
    title: "Generative AI Development and Integration",
    description: "Generative AI Development",
    icon: createElement(HiOutlineComputerDesktop, ICON_ATTRIBUTES),
  },
  {
    title: "APIs Development and Integrations",
    description: "Seamlessly Connecting Systems with Custom APIs Creation and Integrations",
    icon: createElement(HiOutlineDevicePhoneMobile, ICON_ATTRIBUTES),
  },
  {
    title: "Custom Application Development",
    description: "Building Custom Applications for Streamlined Development",
    icon: createElement(HiOutlineComputerDesktop, ICON_ATTRIBUTES),
  },
  {
    title: "Application Deployments and Hostings",
    description: "Deploying and Hosting Custom Applications",
    icon: createElement(HiOutlineGlobeAlt, ICON_ATTRIBUTES),
  },
  {
    title: "Business Consultancy and Collaboration",
    description: "Collaborating with Custom Applications",
    icon: createElement(HiOutlineGlobeAlt, ICON_ATTRIBUTES),
  },
  {
    title: "Product Innovation and Research",
    description: "Innovating with Custom Applications",
    icon: createElement(HiOutlineGlobeAlt, ICON_ATTRIBUTES),
  },
  {
    title: "Custom Scripting",
    description: "Custom Scripting for Custom Applications",
    icon: createElement(HiOutlineGlobeAlt, ICON_ATTRIBUTES),
  },
];

export default SERVICES;
