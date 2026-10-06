import React, { useEffect, useRef, useState } from 'react'
import '../modern.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import modernLogo from '../../../assets/modernlogo.webp'
import homevideo from '../../../assets/optimized/homevideo.mp4'
import mobileHomePoster from '../../../assets/mobile-optimized/mobilehome.webp'
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia'
import upstackImg from '../../../assets/upstack.png'
import infinitiveImg from '../../../assets/infinitive.png'
import assurantImg from '../../../assets/assurant.png'
import pcxImg from '../../../assets/pcx.png'
import seasiaImg from '../../../assets/seasia.png'
import devlabsImg from '../../../assets/devlabs.png'
import appcurators from '../../../assets/appcurators.png'
import codecrux from '../../../assets/codecrux.png'
import hireramp1 from '../../../assets/hireramp1.png'
import gartner from '../../../assets/gartner.png'
import feedops1 from '../../../assets/feedops1.png'
import capgemini from '../../../assets/capgemini.png'
import bacancy from '../../../assets/bacancy.png'

        const partnerLogos = [
  { src: upstackImg, alt: 'UpStack' },
  { src: infinitiveImg, alt: 'Infinitive' },
  { src: assurantImg, alt: 'Assurant' },
  { src: pcxImg, alt: 'PCX' },
  { src: seasiaImg, alt: 'Seasia' },
  { src: devlabsImg, alt: 'Devlabs Alliance' },
  { src: appcurators, alt: 'AppCurators' },
  { src: codecrux, alt: 'CodeCrux' },
  { src: hireramp1, alt: 'HireRamp' },
  { src: gartner, alt: 'Gartner' },
  { src: feedops1, alt: 'FeedOps' },
  { src: capgemini, alt: 'Capgemini' },
  { src: bacancy, alt: 'Bacancy' },
]

/* 1. Purple AI/Cloud */
function AiNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_ai)" fillOpacity="0.25" stroke="url(#paint1_linear_ai)" strokeWidth="2.8"/>
      <path d="M37.0142 30.8874C35.928 30.8871 34.8613 31.1756 33.9234 31.7234C32.9855 32.2712 32.2101 33.0585 31.6767 34.0047C31.1434 34.9509 30.8712 36.022 30.8882 37.108C30.9052 38.194 31.2106 39.256 31.7732 40.1851C30.3758 40.4551 29.116 41.2032 28.21 42.301C27.3041 43.3987 26.8086 44.7776 26.8086 46.2009C26.8086 47.6242 27.3041 49.0031 28.21 50.1008C29.116 51.1985 30.3758 51.9466 31.7732 52.2167M37.0142 30.8874C37.0142 29.5337 37.552 28.2354 38.5092 27.2782C39.4664 26.321 40.7647 25.7832 42.1184 25.7832C43.4721 25.7832 44.7703 26.321 45.7276 27.2782C46.6848 28.2354 47.2225 29.5337 47.2225 30.8874V33.9499M37.0142 30.8874C37.0142 32.5575 37.8166 34.0397 39.0559 34.9707M34.9725 49.6095C33.6369 50.0817 32.5063 51.0044 31.7732 52.2167C31.2111 53.1457 30.9061 54.2075 30.8894 55.2932C30.8727 56.379 31.145 57.4496 31.6783 58.3955C32.2116 59.3414 32.9867 60.1285 33.9244 60.6762C34.862 61.2239 35.9283 61.5125 37.0142 61.5124C37.0142 62.8661 37.552 64.1643 38.5092 65.1216C39.4664 66.0788 40.7647 66.6165 42.1184 66.6165C43.4721 66.6165 44.7703 66.0788 45.7276 65.1216C46.6848 64.1643 47.2225 62.8661 47.2225 61.5124V58.4499M52.3267 52.3249V56.4082M58.4517 52.3249V56.4082M52.3267 35.9915V40.0749M58.4517 35.9915V40.0749M49.2642 43.1374H45.1809M49.2642 49.2624H45.1809M65.5975 43.1374H61.5142M65.5975 49.2624H61.5142M57.4309 40.0749H53.3475C51.4223 40.0749 50.4606 40.0749 49.8624 40.6731C49.2642 41.2713 49.2642 42.2329 49.2642 44.1582V48.2415C49.2642 50.1668 49.2642 51.1285 49.8624 51.7267C50.4606 52.3249 51.4223 52.3249 53.3475 52.3249H57.4309C59.3562 52.3249 60.3178 52.3249 60.916 51.7267C61.5142 51.1285 61.5142 50.1668 61.5142 48.2415V44.1582C61.5142 42.2329 61.5142 41.2713 60.916 40.6731C60.3178 40.0749 59.3562 40.0749 57.4309 40.0749Z" stroke="url(#paint2_linear_ai)" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_ai" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#8161DF"/><stop offset="1" stopColor="#463579"/></linearGradient>
        <linearGradient id="paint1_linear_ai" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#8161DF"/><stop offset="0.644231" stopColor="#463579"/></linearGradient>
        <linearGradient id="paint2_linear_ai" x1="46.2031" y1="25.7832" x2="46.2031" y2="66.6165" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#927DCF"/></linearGradient>
      </defs>
    </svg>
  )
}

/* 2. Blue Code </> */
function CodeNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_code)" fillOpacity="0.25" stroke="url(#paint1_linear_code)" strokeWidth="2.8"/>
      <g clipPath="url(#clip0_code)">
        <path d="M61.6056 37.1612L58.4798 33.9557L55.5358 36.5915L53.5778 38.3474L61.4913 46.4875L56.5382 51.5835L53.5758 54.6297C54.6987 55.6484 55.8032 56.6509 56.9241 57.6636L58.4839 59.0805L62.996 54.4316L70.6992 46.4854L61.6056 37.1612ZM27.8079 40.2216L21.6992 46.4854C25.803 50.7178 29.8516 54.8869 33.9166 59.0764L34.9578 58.1291L38.8227 54.6276L35.8684 51.5896L30.9071 46.4854L37.2547 39.9603L38.8206 38.3494C37.9346 37.5532 37.0648 36.7732 36.191 35.9933L33.9166 33.9496L27.8079 40.2216ZM53.5023 27.894L45.4479 65.7996L45.0477 65.72L38.8635 64.5052L44.08 39.9644L46.9199 26.5996L53.5023 27.894Z" fill="url(#paint2_linear_code)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_code" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#14ACF4"/><stop offset="1" stopColor="#173D62"/></linearGradient>
        <linearGradient id="paint1_linear_code" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#14B3FC"/><stop offset="0.644231" stopColor="#193167"/></linearGradient>
        <linearGradient id="paint2_linear_code" x1="46.1992" y1="26.5996" x2="46.1992" y2="65.7996" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#1591D5"/></linearGradient>
        <clipPath id="clip0_code"><rect width="49" height="49" fill="white" transform="translate(21.6992 21.6992)"/></clipPath>
      </defs>
    </svg>
  )
}

/* 3. Cyan Chip/Target */
function ChipNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_chip)" fillOpacity="0.25" stroke="url(#paint1_linear_chip)" strokeWidth="2.8"/>
      <path d="M40.0742 27.8242V31.9076M52.3242 27.8242V31.9076M40.0742 60.4909V64.5742M52.3242 60.4909V64.5742M31.9076 40.0742H27.8242M31.9076 52.3242H27.8242M64.5742 40.0742H60.4909M64.5742 52.3242H60.4909M35.9909 60.4909H56.4076C57.4905 60.4909 58.5291 60.0607 59.2949 59.2949C60.0607 58.5291 60.4909 57.4905 60.4909 56.4076V35.9909C60.4909 34.9079 60.0607 33.8693 59.2949 33.1035C58.5291 32.3378 57.4905 31.9076 56.4076 31.9076H35.9909C34.9079 31.9076 33.8693 32.3378 33.1035 33.1035C32.3378 33.8693 31.9076 34.9079 31.9076 35.9909V56.4076C31.9076 57.4905 32.3378 58.5291 33.1035 59.2949C33.8693 60.0607 34.9079 60.4909 35.9909 60.4909ZM40.0742 40.0742H52.3242V52.3242H40.0742V40.0742Z" stroke="white" strokeWidth="4.08333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M46.1979 58.4578H35.2893C30.0381 58.4496 25.7812 54.352 25.7812 49.2968C25.7812 44.2417 30.0381 40.1461 35.2893 40.1461C36.0917 36.5487 38.952 33.6128 42.7924 32.4429C46.6308 31.2751 50.8693 32.0488 53.9073 34.4846C56.9453 36.9141 58.3213 40.6238 57.521 44.2213H59.5422C62.3597 44.2213 64.7893 45.8771 65.9286 48.276M60.4896 66.6163V54.3663M54.3646 60.4913L60.4896 54.3663L66.6146 60.4913" stroke="url(#paint2_linear_chip)" strokeWidth="4.08333" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_chip" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#2BC0D3"/><stop offset="1" stopColor="#063655"/></linearGradient>
        <linearGradient id="paint1_linear_chip" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#2DC8DA"/><stop offset="0.644231" stopColor="#053654"/></linearGradient>
        <linearGradient id="paint2_linear_chip" x1="46.1979" y1="31.9082" x2="46.1979" y2="66.6163" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#2BBFD2"/></linearGradient>
      </defs>
    </svg>
  )
}

/* 4. Amber Globe */
function GlobeNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_globe)" fillOpacity="0.25" stroke="url(#paint1_linear_globe)" strokeWidth="2.8"/>
      <path d="M55.0996 50.2832C55.2629 48.9357 55.3854 47.5882 55.3854 46.1999C55.3854 44.8115 55.2629 43.464 55.0996 42.1165H62.0004C62.3271 43.4232 62.5312 44.7911 62.5312 46.1999C62.5312 47.6086 62.3271 48.9765 62.0004 50.2832M51.4858 61.6349C52.7108 59.3686 53.65 56.9186 54.3033 54.3665H60.3263C58.3482 57.7726 55.2101 60.3527 51.4858 61.6349ZM50.9754 50.2832H41.4204C41.2163 48.9357 41.0938 47.5882 41.0938 46.1999C41.0938 44.8115 41.2163 43.4436 41.4204 42.1165H50.9754C51.1592 43.4436 51.3021 44.8115 51.3021 46.1999C51.3021 47.5882 51.1592 48.9357 50.9754 50.2832ZM46.1979 62.4515C44.5033 60.0015 43.1354 57.2861 42.2983 54.3665H50.0975C49.2604 57.2861 47.8925 60.0015 46.1979 62.4515ZM38.0312 38.0332H32.0696C34.0268 34.6176 37.1628 32.0332 40.8896 30.7649C39.6646 33.0311 38.7458 35.4811 38.0312 38.0332ZM32.0696 54.3665H38.0312C38.7458 56.9186 39.6646 59.3686 40.8896 61.6349C37.1702 60.3533 34.0383 57.7724 32.0696 54.3665ZM30.3954 50.2832C30.0688 48.9765 29.8646 47.6086 29.8646 46.1999C29.8646 44.7911 30.0688 43.4232 30.3954 42.1165H37.2963C37.1329 43.464 37.0104 44.8115 37.0104 46.1999C37.0104 47.5882 37.1329 48.9357 37.2963 50.2832M46.1979 29.9278C47.8925 32.3778 49.2604 35.1136 50.0975 38.0332H42.2983C43.1354 35.1136 44.5033 32.3778 46.1979 29.9278ZM60.3263 38.0332H54.3033C53.6634 35.5048 52.7172 33.064 51.4858 30.7649C55.2425 32.0511 58.3663 34.644 60.3263 38.0332ZM46.1979 25.7832C34.9075 25.7832 25.7812 34.9707 25.7812 46.1999C25.7812 51.6147 27.9323 56.8078 31.7612 60.6366C33.657 62.5325 35.9077 64.0364 38.3848 65.0624C40.8619 66.0884 43.5168 66.6165 46.1979 66.6165C51.6128 66.6165 56.8058 64.4655 60.6347 60.6366C64.4636 56.8078 66.6146 51.6147 66.6146 46.1999C66.6146 43.5187 66.0865 40.8638 65.0605 38.3867C64.0344 35.9097 62.5305 33.659 60.6347 31.7631C58.7388 29.8672 56.4881 28.3634 54.011 27.3373C51.534 26.3113 48.8791 25.7832 46.1979 25.7832Z" fill="url(#paint2_linear_globe)"/>
      <defs>
        <linearGradient id="paint0_linear_globe" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#D4954D"/><stop offset="1" stopColor="#544B4C"/></linearGradient>
        <linearGradient id="paint1_linear_globe" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#E09D4F"/><stop offset="0.644231" stopColor="#5D4222"/></linearGradient>
        <linearGradient id="paint2_linear_globe" x1="46.1979" y1="25.7832" x2="46.1979" y2="66.6165" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#D7974D"/></linearGradient>
      </defs>
    </svg>
  )
}

/* 5. Blue Gear */
function GearNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_gear)" fillOpacity="0.25" stroke="url(#paint1_linear_gear)" strokeWidth="2.8"/>
      <path d="M46.2 32.5C38.63 32.5 32.5 38.63 32.5 46.2C32.5 53.77 38.63 59.9 46.2 59.9C53.77 59.9 59.9 53.77 59.9 46.2C59.9 38.63 53.77 32.5 46.2 32.5ZM46.2 54.3C41.73 54.3 38.1 50.67 38.1 46.2C38.1 41.73 41.73 38.1 46.2 38.1C50.67 38.1 54.3 41.73 54.3 46.2C54.3 50.67 50.67 54.3 46.2 54.3Z" fill="url(#paint2_linear_gear)"/>
      <path d="M48.7 25.8H43.7V30.5H48.7V25.8ZM48.7 61.9H43.7V66.6H48.7V61.9ZM66.6 43.7V48.7H61.9V43.7H66.6ZM30.5 43.7V48.7H25.8V43.7H30.5ZM60.2 30.1L56.7 33.6L60.2 37.1L63.7 33.6L60.2 30.1ZM32.2 58.1L28.7 61.6L32.2 65.1L35.7 61.6L32.2 58.1ZM60.2 61.6L63.7 58.1L60.2 54.6L56.7 58.1L60.2 61.6ZM32.2 33.6L35.7 30.1L32.2 26.6L28.7 30.1L32.2 33.6Z" fill="url(#paint2_linear_gear)"/>
      <defs>
        <linearGradient id="paint0_linear_gear" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#14ACF4"/><stop offset="1" stopColor="#173D62"/></linearGradient>
        <linearGradient id="paint1_linear_gear" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#14B3FC"/><stop offset="0.644231" stopColor="#193167"/></linearGradient>
        <linearGradient id="paint2_linear_gear" x1="46.2" y1="25.8" x2="46.2" y2="66.6" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#1591D5"/></linearGradient>
      </defs>
    </svg>
  )
}

/* 6. Purple Smartphone */
function PhoneNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_phone)" fillOpacity="0.25" stroke="url(#paint1_linear_phone)" strokeWidth="2.8"/>
      <g clipPath="url(#clip0_phone)">
        <path d="M56.918 21.6992H35.4805C32.9539 21.6992 30.8867 23.7664 30.8867 26.293V66.1055C30.8867 68.632 32.9539 70.6992 35.4805 70.6992H56.918C59.4445 70.6992 61.5117 68.632 61.5117 66.1055V26.293C61.5117 23.7664 59.4445 21.6992 56.918 21.6992ZM40.0742 23.9961H52.3242V25.5273H40.0742V23.9961ZM46.1992 67.6367C45.387 67.6367 44.608 67.3141 44.0337 66.7397C43.4594 66.1654 43.1367 65.3864 43.1367 64.5742C43.1367 63.762 43.4594 62.983 44.0337 62.4087C44.608 61.8344 45.387 61.5117 46.1992 61.5117C47.0114 61.5117 47.7904 61.8344 48.3647 62.4087C48.9391 62.983 49.2617 63.762 49.2617 64.5742C49.2617 65.3864 48.9391 66.1654 48.3647 66.7397C47.7904 67.3141 47.0114 67.6367 46.1992 67.6367ZM58.4492 58.4492H33.9492V27.8242H58.4492V58.4492Z" fill="url(#paint2_linear_phone)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_phone" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#8161DF"/><stop offset="1" stopColor="#463579"/></linearGradient>
        <linearGradient id="paint1_linear_phone" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#8161DF"/><stop offset="0.644231" stopColor="#463579"/></linearGradient>
        <linearGradient id="paint2_linear_phone" x1="46.1992" y1="21.6992" x2="46.1992" y2="70.6992" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#7F5FDA"/></linearGradient>
        <clipPath id="clip0_phone"><rect width="49" height="49" fill="white" transform="translate(21.6992 21.6992)"/></clipPath>
      </defs>
    </svg>
  )
}

/* 7. Cyan Link */
function LinkNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_link)" fillOpacity="0.25" stroke="url(#paint1_linear_link)" strokeWidth="2.8"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M47.1578 50.0306C46.6182 49.6799 46.153 49.2264 45.7887 48.6959C45.4244 48.1654 45.1682 47.5684 45.0346 46.9389C44.9011 46.3094 44.8928 45.6597 45.0104 45.027C45.1279 44.3943 45.3689 43.791 45.7197 43.2514L51.0631 35.0366C51.4082 34.4848 51.8596 34.0073 52.3912 33.6319C52.9228 33.2565 53.5238 32.9908 54.1592 32.8502C54.7946 32.7096 55.4516 32.697 56.092 32.8131C56.7323 32.9293 57.3431 33.1717 57.8886 33.5265C58.4342 33.8812 58.9037 34.341 59.2696 34.8792C59.6356 35.4173 59.8906 36.0229 60.02 36.6607C60.1493 37.2985 60.1503 37.9556 60.0229 38.5938C59.8955 39.232 59.6423 39.8384 59.278 40.3776L53.937 48.5949C53.2284 49.6842 52.1161 50.4475 50.8447 50.7167C49.5734 50.9859 48.2472 50.7391 47.1578 50.0306ZM41.1749 50.5255C40.3527 48.9795 39.9597 47.2415 40.0369 45.4921C40.114 43.7428 40.6584 42.0461 41.6135 40.5785L46.9545 32.3636C48.3716 30.1846 50.5964 28.6578 53.1393 28.1191C54.3984 27.8523 55.6977 27.8362 56.9631 28.0716C58.2285 28.307 59.435 28.7893 60.514 29.491C61.5929 30.1927 62.5231 31.1001 63.2514 32.1613C63.9797 33.2225 64.4918 34.4167 64.7586 35.6758C65.0253 36.9349 65.0415 38.2343 64.8061 39.4996C64.5707 40.765 64.0883 41.9716 63.3866 43.0505L58.0456 51.2654C57.1163 52.6955 58.2297 53.8584 54.3133 54.6389C52.7968 55.4195 51.1028 55.7908 49.3989 55.7161C47.6949 55.6413 46.04 55.1232 44.5976 54.2129C43.1553 53.3025 41.9755 52.0315 41.1749 50.5255Z" fill="url(#paint2_linear_link)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M35.0367 59.681C34.4971 59.3304 34.0319 58.8768 33.6676 58.3464C33.3033 57.8159 33.0471 57.2188 32.9135 56.5893C32.78 55.9598 32.7718 55.3102 32.8893 54.6775C33.0068 54.0448 33.2478 53.4414 33.5986 52.9019L38.942 44.687C39.2871 44.1353 39.7385 43.6578 40.2701 43.2824C40.8017 42.907 41.4027 42.6413 42.0381 42.5007C42.6735 42.3601 43.3305 42.3475 43.9709 42.4636C44.6112 42.5797 45.222 42.8222 45.7675 43.1769C46.3131 43.5316 46.7826 43.9915 47.1485 44.5296C47.5145 45.0677 47.7695 45.6734 47.8989 46.3111C48.0282 46.9489 48.0292 47.6061 47.9018 48.2442C47.7744 48.8824 47.5212 49.4888 47.1569 50.028L41.8159 58.2453C41.1073 59.3347 39.995 60.0979 38.7236 60.3672C37.4523 60.6364 36.1261 60.3896 35.0367 59.681ZM29.0538 60.1759C28.2316 58.63 27.8386 56.8919 27.9158 55.1426C27.9929 53.3933 28.5373 51.6966 29.4924 50.2289L34.8334 42.0165C35.5349 40.9376 36.4421 40.0074 37.5032 39.279C38.5642 38.5507 39.7583 38.0385 41.0173 37.7716C42.2763 37.5047 43.5756 37.4885 44.8409 37.7237C46.1062 37.959 47.3127 38.4411 48.3917 39.1427C49.4706 39.8442 50.4008 40.7514 51.1292 41.8125C51.8575 42.8735 52.3698 44.0676 52.6366 45.3266C52.9035 46.5856 52.9198 47.8849 52.6845 49.1502C52.4492 50.4155 51.9671 51.622 51.2655 52.701L45.9245 60.9158C44.9952 62.346 43.7087 63.5088 42.1922 64.2894C40.6757 65.07 38.9817 65.4412 37.2778 65.3665C35.5738 65.2918 33.9189 64.7736 32.4765 63.8633C31.0342 62.953 29.8544 61.682 29.0538 60.1759Z" fill="url(#paint3_linear_link)"/>
      <defs>
        <linearGradient id="paint0_linear_link" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#29B9CD"/><stop offset="1" stopColor="#063755"/></linearGradient>
        <linearGradient id="paint1_linear_link" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#2BC1D4"/><stop offset="0.644231" stopColor="#053654"/></linearGradient>
        <linearGradient id="paint2_linear_link" x1="52.4994" y1="27.9062" x2="52.4994" y2="55.7255" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#2ABCD0"/></linearGradient>
        <linearGradient id="paint3_linear_link" x1="40.3779" y1="37.5586" x2="40.3779" y2="65.3759" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#2ABCD0"/></linearGradient>
      </defs>
    </svg>
  )
}

/* 8. Amber Bar Chart */
function ChartNode() {
  return (
    <svg width="70%" height="70%" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.3496 3.83984C44.732 2.46437 47.6674 2.46437 50.0498 3.83984L80.96 21.6855C83.3422 23.061 84.8104 25.6027 84.8105 28.3535V64.0459C84.8105 66.7968 83.3423 69.3394 80.96 70.7148L50.0498 88.5605C47.6674 89.936 44.732 89.936 42.3496 88.5605L11.4395 70.7148C9.05706 69.3394 7.58984 66.7968 7.58984 64.0459V28.3535C7.58998 25.6028 9.05726 23.061 11.4395 21.6855L42.3496 3.83984Z" fill="url(#paint0_linear_chart)" fillOpacity="0.25" stroke="url(#paint1_linear_chart)" strokeWidth="2.8"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M66.8412 32.8C66.4227 34.8447 63.9635 35.399 62.6078 34.0423L60.6886 32.1242C60.4477 32.342 60.183 32.5788 59.8944 32.8347C58.0202 34.5027 55.2006 37.0119 51.9901 40.7839C50.2547 42.8236 46.935 42.8123 45.3016 40.5512C44.2685 39.1161 43.1956 37.7102 42.084 36.3351L41.9165 36.4474C39.2113 38.2553 32.974 42.4234 28.7335 48.5127C28.5802 48.7326 28.3851 48.9203 28.1593 49.0649C27.9335 49.2094 27.6814 49.3081 27.4174 49.3553C26.8844 49.4505 26.3353 49.3301 25.891 49.0205C25.4467 48.7109 25.1436 48.2375 25.0484 47.7044C24.9531 47.1714 25.0735 46.6223 25.3831 46.178C30.0779 39.4354 36.8777 34.8978 39.6003 33.0828L39.9453 32.8521C41.6603 31.7026 43.899 32.1017 45.1587 33.6432C46.353 35.1149 47.5043 36.6209 48.6112 38.1594C48.6182 38.1674 48.6265 38.1743 48.6357 38.1798C48.6614 38.1911 48.6892 38.197 48.7173 38.1971C48.8031 38.1992 48.8562 38.1655 48.8807 38.1359C52.3076 34.1097 55.4385 31.3269 57.2862 29.6854L57.2882 29.6844L57.7966 29.2312L55.9316 27.3651C54.5739 26.0094 55.1292 23.5512 57.1739 23.1317C59.7918 22.6046 62.4628 22.3887 65.1313 22.4886C65.7477 22.5125 66.3324 22.7681 66.7686 23.2043C67.2048 23.6405 67.4604 24.2252 67.4843 24.8416C67.5456 26.2871 67.5527 29.3322 66.8412 32.799M62.5312 39.3078C63.599 39.3078 64.4606 39.3364 65.1497 39.3793C67.5486 39.5252 69.2402 41.3403 69.4066 43.6341C69.5423 45.5002 69.6771 48.8097 69.6771 54.6203C69.6771 60.4309 69.5423 63.7404 69.4066 65.6065C69.2402 67.9003 67.5486 69.7154 65.1497 69.8624C64.2778 69.9125 64.3046 69.936 62.5312 69.9328C61.6579 69.9357 60.7847 69.9118 59.9128 69.8613C57.5139 69.7154 55.8223 67.9003 55.6559 65.6065C55.5202 63.7404 55.3854 60.4309 55.3854 54.6203C55.3854 48.8097 55.5202 45.5002 55.6559 43.6341C55.8223 41.3403 57.5139 39.5252 59.9128 39.3782C60.7847 39.3281 61.6579 39.3046 62.5312 39.3078ZM64.8996 43.4544C64.111 43.4092 63.3212 43.3881 62.5312 43.3911C61.5359 43.3911 60.7591 43.4177 60.1629 43.4544C59.9741 43.4657 59.8955 43.5269 59.8597 43.5637C59.8189 43.6045 59.7444 43.7076 59.728 43.9312C59.6025 45.6584 59.4688 48.8587 59.4688 54.6203C59.4688 60.3819 59.6025 63.5812 59.728 65.3105C59.7444 65.533 59.8199 65.6361 59.8597 65.677C59.8955 65.7137 59.9741 65.775 60.1619 65.7862C60.7581 65.8229 61.5359 65.8495 62.5312 65.8495C63.5266 65.8495 64.3034 65.8229 64.8996 65.7862C65.0884 65.775 65.167 65.7137 65.2028 65.677C65.2436 65.6361 65.3181 65.533 65.3345 65.3095C65.46 63.5812 65.5938 60.3809 65.5938 54.6203C65.5938 48.8597 65.46 45.6594 65.3345 43.9301C65.3181 43.7076 65.2426 43.6045 65.2028 43.5637C65.167 43.5269 65.0874 43.4657 64.8996 43.4544ZM29.8646 53.5995C31.0814 53.5995 32.0155 53.6168 32.7229 53.6403C34.7197 53.7077 36.6 55.0286 36.8359 57.3561C36.9359 58.3412 37.0104 59.748 37.0104 61.7661C37.0104 63.7843 36.9359 65.191 36.8359 66.1761C36.6 68.5036 34.7207 69.8246 32.7239 69.892C31.7711 69.9215 30.8179 69.9351 29.8646 69.9328C28.6478 69.9328 27.7137 69.9155 27.0062 69.892C25.0085 69.8246 23.1291 68.5036 22.8933 66.1761C22.7933 65.1921 22.7188 63.7853 22.7188 61.7661C22.7188 59.7469 22.7933 58.3412 22.8933 57.3561C23.1291 55.0286 25.0085 53.7077 27.0052 53.6403C27.9581 53.611 28.9113 53.5974 29.8646 53.5995ZM32.5861 57.7216C31.9308 57.7002 31.0426 57.6828 29.8646 57.6828C28.6865 57.6828 27.7984 57.7002 27.143 57.7216C27.0802 57.7223 27.0179 57.7326 26.9583 57.7522L26.9562 57.7675C26.8735 58.5771 26.8021 59.8398 26.8021 61.7661C26.8021 63.6925 26.8735 64.9552 26.9552 65.7647L26.9573 65.7749V65.7801C27.0172 65.7998 27.0799 65.8101 27.143 65.8107C27.7984 65.8321 28.6865 65.8495 29.8646 65.8495C31.0426 65.8495 31.9308 65.8321 32.5861 65.8107C32.6489 65.81 32.7112 65.7997 32.7709 65.7801L32.7729 65.7647C32.8546 64.9552 32.9271 63.6925 32.9271 61.7661C32.9271 59.8408 32.8556 58.5771 32.774 57.7675L32.7709 57.7522C32.7116 57.7327 32.6486 57.7224 32.5861 57.7216ZM48.8398 47.5255C48.1549 47.4949 47.2882 47.4745 46.1979 47.4745C45.1077 47.4745 44.241 47.4949 43.556 47.5255C41.2898 47.6245 39.4696 49.2405 39.2705 51.5986C39.1542 53.0013 39.0521 55.2124 39.0521 58.7036C39.0521 62.1949 39.1531 64.407 39.2705 65.8086C39.4696 68.1668 41.2898 69.7827 43.556 69.8818C44.241 69.9124 45.1077 69.9328 46.1979 69.9328C47.2882 69.9328 48.1549 69.9124 48.8398 69.8818C51.1061 69.7827 52.9262 68.1668 53.1253 65.8086C53.2427 64.407 53.3438 62.1949 53.3438 58.7036C53.3438 55.2124 53.2427 53.0002 53.1253 51.5986C52.9262 49.2405 51.1061 47.6245 48.8398 47.5255ZM46.1979 51.5578C47.2361 51.5578 48.0436 51.5782 48.6612 51.6048C48.8674 51.6139 48.948 51.6783 48.9695 51.6977C48.9858 51.714 49.0409 51.7691 49.0562 51.9427C49.1614 53.1901 49.2604 55.2808 49.2604 58.7036C49.2604 62.1265 49.1614 64.2161 49.0562 65.4656C49.042 65.6392 48.9858 65.6933 48.9695 65.7096C48.9491 65.729 48.8674 65.7933 48.6612 65.8025C48.0436 65.8301 47.2361 65.8495 46.1979 65.8495C45.1597 65.8495 44.3523 65.8291 43.7346 65.8025C43.5284 65.7933 43.4478 65.729 43.4264 65.7096C43.41 65.6933 43.3549 65.6382 43.3396 65.4646C43.344 64.2172 43.1354 62.1265 43.1354 58.7036C43.1354 55.2808 43.2344 53.1911 43.3396 51.9416C43.3539 51.7681 43.41 51.714 43.4264 51.6977C43.4468 51.6783 43.5284 51.6139 43.7346 51.6048C44.5553 51.5714 45.3766 51.5558 46.1979 51.5578Z" fill="url(#paint2_linear_chart)"/>
      <defs>
        <linearGradient id="paint0_linear_chart" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#DB994E"/><stop offset="1" stopColor="#5E4323"/></linearGradient>
        <linearGradient id="paint1_linear_chart" x1="46.2" y1="0" x2="46.2" y2="92.4" gradientUnits="userSpaceOnUse"><stop stopColor="#DB994D"/><stop offset="0.644231" stopColor="#5E4323"/></linearGradient>
        <linearGradient id="paint2_linear_chart" x1="46.1979" y1="22.4648" x2="46.1979" y2="69.9331" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#D5954B"/></linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  const outerRadarNodes = [
    { Component: CodeNode, label: 'Development', angle: 45 },
    { Component: ChipNode, label: 'AI/ML', angle: -37 },
    { Component: GearNode, label: 'DevOps', angle: 90 },
    { Component: LinkNode, label: 'Blockchain', angle: 175 },
    { Component: AiNode, label: 'Automation', angle: 220 },
  ]

  const innerRadarNodes = [
    { Component: GlobeNode, label: 'Cloud', angle: 5 },
    { Component: PhoneNode, label: 'Mobile', angle: 135 },
    { Component: ChartNode, label: 'Data', angle: 270 },
  ]

  const headlineLines = [
    { text: 'Building Digital', accent: false },
    { text: 'Products', accent: true },
    { text: 'That', accent: false },
    { text: 'Scale for', accent: false },
    { text: 'AI', accent: true },
  ]

  // ---- Typewriter cycle for the accent word in the headline ----
  const cyclingWords = ['IT Staff Agumentation', 'AL/ML', 'Technical Talent Solutions', 'On Demand Developers']
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = cyclingWords[wordIndex]

    if (charIndex < currentWord.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText(currentWord.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }, 110)
      return () => clearTimeout(typingTimeout)
    }

    const holdTimeout = setTimeout(() => {
      setCharIndex(0)
      setTypedText('')
      setWordIndex((prev) => (prev + 1) % cyclingWords.length)
    }, 900)
    return () => clearTimeout(holdTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, wordIndex])

  // ---- Responsive breakpoint tracking for the orbital ecosystem ----
  const getBucket = () => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    if (w < 640) return 'mobile'
    if (w < 1024) return 'tablet'
    return 'desktop'
  }

  const [bucket, setBucket] = useState(getBucket)

  useEffect(() => {
    let frame
    const handleResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setBucket(getBucket()))
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const RADIUS = {
    mobile: { outer: 95, inner: 65 },
    tablet: { outer: 200, inner: 140 },
    desktop: { outer: 245, inner: 170 },
  }

  const outerRadius = RADIUS[bucket].outer
  const innerRadius = RADIUS[bucket].inner

  // ---- Partner logos: JS-driven funnel scroll + scale ----
  const partnerContainerRef = useRef(null)
  const partnerTrackRef = useRef(null)
  const partnerLogoRefs = useRef([])
  partnerLogoRefs.current = []

  const addPartnerLogoRef = (el) => {
    if (el) partnerLogoRefs.current.push(el)
  }

  // ---- Responsive mobile hero background media height tracking ----
  const sectionRef = useRef(null)
  const heroGridRef = useRef(null)
  const partnerBannerRef = useRef(null)
  const [mobileMediaHeight, setMobileMediaHeight] = useState(null)

  useEffect(() => {
    const updateMediaHeight = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        if (sectionRef.current && partnerBannerRef.current) {
          const sectionRect = sectionRef.current.getBoundingClientRect()
          const bannerRect = partnerBannerRef.current.getBoundingClientRect()
          const distance = bannerRect.top - sectionRect.top
          if (distance > 0) {
            // Add 35px so media seamlessly covers behind the top curve of the partner banner
            setMobileMediaHeight(Math.round(distance + 35))
          }
        }
      } else {
        setMobileMediaHeight(null)
      }
    }

    updateMediaHeight()
    window.addEventListener('resize', updateMediaHeight)

    let ro
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(updateMediaHeight)
      if (heroGridRef.current) ro.observe(heroGridRef.current)
      if (partnerBannerRef.current) ro.observe(partnerBannerRef.current)
    }

    return () => {
      window.removeEventListener('resize', updateMediaHeight)
      ro?.disconnect()
    }
  }, [])






   useEffect(() => {
    const track = partnerTrackRef.current
    const container = partnerContainerRef.current
    if (!track || !container) return

    const MAX_SCALE = 1.15
    const MIN_SCALE = 0.8

    let offset = 0
    let lastTime = null
    let rafId
    let singleSetWidth = 0

    // Slower scroll speed on mobile (<640px), original speed everywhere else
    const getScrollSpeed = () => (window.innerWidth < 640 ? 50 : 120)

    const measure = () => {
      const item0 = partnerLogoRefs.current[0]
      const itemN = partnerLogoRefs.current[partnerLogos.length]
      if (item0 && itemN) {
        const dist = itemN.offsetLeft - item0.offsetLeft
        if (dist > 0) singleSetWidth = dist
      }
      if (!singleSetWidth && track.scrollWidth) {
        singleSetWidth = track.scrollWidth / 4
      }
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    window.addEventListener('resize', measure)

    const animate = (time) => {
      if (lastTime === null) lastTime = time
      const delta = (time - lastTime) / 1000
      lastTime = time

      if (delta > 0 && delta < 0.2) {
        offset += getScrollSpeed() * delta
        if (singleSetWidth > 0 && offset >= singleSetWidth) {
          offset %= singleSetWidth
        }
        track.style.transform = `translate3d(-${offset}px, 0, 0)`

        const containerRect = container.getBoundingClientRect()

        partnerLogoRefs.current.forEach((el) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          const logoCenterX = rect.left + rect.width / 2

          let p = (logoCenterX - containerRect.left) / containerRect.width
          p = Math.min(1, Math.max(0, p))

          const distFromCenter = Math.abs(p - 0.5) * 2
          const scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * distFromCenter

          el.style.transform = `scale(${scale.toFixed(3)})`
        })
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])





  return (
    <section ref={sectionRef} className="relative pt-28 md:pt-36 pb-0 overflow-hidden text-white w-full">

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Hero background media container with responsive mobile height */}
      <div
        className="absolute top-0 left-0 right-0 w-full min-h-[620px] h-[720px] sm:h-[660px] md:min-h-0 md:h-[580px] lg:h-[685px] z-0 overflow-hidden"
        style={mobileMediaHeight ? { height: `${mobileMediaHeight}px` } : undefined}
      >
        <ResponsiveHeroMedia
          className="w-full h-full object-cover"
          video={homevideo}
          mobilePoster={mobileHomePoster}
        />
        <div
          className="absolute inset-0 bg-[#0F172A]/60 pointer-events-none"
        />
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]   rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={heroGridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-8 items-center">

       {/* Left Hero Content */}
<div className="lg:col-span-6 flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left lg:pl-[40px] md:pl-0 pl-0">
  <button
    className="hero-fade-up inline-flex mt-0 md:mt-[-40px] lg:mt-0 items-center gap-1.5 md:gap-2 mt-[-15px] md:mt-[-15px] lg:mt-[-25px] mb-4 md:mb-4 lg:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm"
    style={{ animationDelay: '0ms' }}
  >
    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-[17px] lg:h-[17px] shrink-0">
      <path d="M13.5 0L12.555 2.0625L10.5 3L12.555 3.945L13.5 6L14.4375 3.945L16.5 3L14.4375 2.0625M6 2.25L4.125 6.375L0 8.25L4.125 10.125L6 14.25L7.875 10.125L12 8.25L7.875 6.375M13.5 10.5L12.555 12.555L10.5 13.5L12.555 14.4375L13.5 16.5L14.4375 14.4375L16.5 13.5L14.4375 12.555" fill="#3B82F6"/>
    </svg>
    <span className="text-[10.9px] md:text-[13px]   lg:text-[16px] font-semibold text-[#4B5563]">
      Trusted Digital Partner For Modern Businesses
    </span>
  </button>

  <h1
    className="hero-fade-up font-extrabold    text-[32px]  md:text-[35px] lg:text-[45px] leading-[1.1] sm:leading-[65px] md:leading-[45px] lg:leading-[50px] tracking-[-0.5px] mb-6 md:mb-5"
    style={{ animationDelay: '140ms' }}
  >
  Your Trusted Partner for 
    <span className="text-[#04A3DA]"> IT Staffing </span> &  Dedicated Engineering
    <span className="text-[#04A3DA]"> Teams</span> {' '}
    <span className="text-[#04A3DA] inline-block min-w-[2.5ch] text-left">
     
      
    </span>
  </h1>

  <p
    className="hero-fade-up font-bold max-[375px]:mt-[-25px]   text-[18px] mt-0 md:mt-[-15px] lg:mt-0  md:text-[20px] lg:text-[20px] leading-[1.1] sm:leading-[65px] md:leading-[50px] lg:leading-[25px] tracking-[-0.5px] mb-6 md:mb-5"
    style={{ animationDelay: '140ms' }}
  >
    Expertise in -{' '}
    <span className="text-sky-400 inline-block min-w-[2.5ch] text-left">
      {typedText}
    </span>
  </p>

  <p
    className="hero-fade-up font-normal mt-0 md:mt-[-15px] lg:mt-[-5px] text-[16px] sm:text-[18px] md:text-[15px] lg:text-[18px] leading-[28px] md:leading-[22px] lg:leading-[28px] tracking-[-0.5px] mb-8 md:mb-6 text-slate-200"
    style={{ animationDelay: '280ms' }}
  >
    Build, scale, and strengthen your technology team with experienced developers and dedicated engineering resources tailored to your business needs.
  </p>

<div className="hero-animate hero-delay-3 mx-auto lg:mx-0 md:mx-0 md:mt-0 lg:mt-[-5px] flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-3 lg:gap-4 mt-0 lg:mt-6 mb-4 lg:mb-8">
  <Link to="/contact-us" className="hero-btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-white font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap">
    Contact Us
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
    </svg>
  </Link>
  <Link to="/work" className="hero-btn-secondary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-slate-900 font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white whitespace-nowrap">
    Work with Us
  </Link>
</div>
</div>

          {/* Right Hero Graphic - Orbital AI Ecosystem — hidden on mobile, shown sm+ */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center lg:mt-[-35px] relative min-h-[380px] sm:min-h-[500px]">
            <div className="relative w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">

              {/* Outer ring border - rotates clockwise */}
              <div className="absolute inset-0 rounded-full border border-sky-400/20 bg-gradient-to-b from-sky-500/10 via-transparent to-blue-600/10 pointer-events-none orbit-outer">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400/80 shadow-[0_0_10px_2px_rgba(56,189,248,0.6)]" />
              </div>

              {/* Inner ring border - rotates anticlockwise */}
              <div className="absolute inset-16 sm:inset-20 rounded-full border border-sky-500/20 pointer-events-none orbit-inner">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/80 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)]" />
              </div>

              {/* Center logo - fixed, no rotation applied */}
              <div className="relative z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full border border-sky-400/30 bg-sky-950/20 backdrop-blur-md flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
                <img src={modernLogo} alt="Jawam Infotech" className="w-16 h-16 sm:w-[120px] sm:h-[120px] object-contain filter drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
              </div>

              {/* Outer orbit: rotates clockwise as a group */}
              <div className="absolute inset-0 pointer-events-none orbit-outer">
                {outerRadarNodes.map((node, index) => {
                  const angleRad = (node.angle * Math.PI) / 180
                  const x = Math.cos(angleRad) * outerRadius
                  const y = Math.sin(angleRad) * outerRadius
                  const NodeSvg = node.Component

                  return (
                    <div
                      key={`outer-${index}`}
                      className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px] pointer-events-auto z-20"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                      title={node.label}
                    >
                      {/* Counter-rotation keeps the icon upright while the ring orbits */}
                      <div className="orbit-outer-counter w-full h-full">
                        <div className="w-full h-full cursor-pointer hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] group">
                          <NodeSvg />
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-wider text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/95 px-2.5 py-1 rounded-md border border-slate-700 pointer-events-none shadow-lg">
                            {node.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Inner orbit: rotates anticlockwise as a group */}
              <div className="absolute inset-0 pointer-events-none orbit-inner">
                {innerRadarNodes.map((node, index) => {
                  const angleRad = (node.angle * Math.PI) / 180
                  const x = Math.cos(angleRad) * innerRadius
                  const y = Math.sin(angleRad) * innerRadius
                  const NodeSvg = node.Component

                  return (
                    <div
                      key={`inner-${index}`}
                      className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px] pointer-events-auto z-20"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                      title={node.label}
                    >
                      {/* Counter-rotation keeps the icon upright while the ring orbits */}
                      <div className="orbit-inner-counter w-full h-full">
                        <div className="w-full h-full cursor-pointer hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] group">
                          <NodeSvg />
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-wider text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/95 px-2.5 py-1 rounded-md border border-slate-700 pointer-events-none shadow-lg">
                            {node.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>


{/* Partner Logos Banner - Full Width Curved White Section */}
<div
  ref={partnerBannerRef}
  className="mt-6 mt-[-5px] md:mt-[-10px] lg:mt-0 lg:mt-6 md:mt-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
>

  {/* ================= TOP CURVE ================= */}
  <div  className="w-full leading-none -mb-1 pointer-events-none">
    <svg
      viewBox="0 0 1440 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-8 sm:h-14 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 C400 70, 1040 70, 1440 10 L1440 60 L0 60 Z"
        fill="#FFFFFF"
      />
    </svg>
  </div>

  {/* ================= WHITE PARTNER BANNER ================= */}
  <div className="bg-white py-6 sm:py-10 text-center w-full shadow-inner">

    <p className="font-bold text-[13px] sm:text-[17px] leading-[18px] tracking-[1.5px] text-[#060A12] mb-6 sm:mb-8 uppercase">
      TRUSTED BY INDUSTRY-LEADING PARTNERS
    </p>

    <div
      ref={partnerContainerRef}
      className="marquee-wrapper overflow-hidden relative w-full max-w-[1400px] mx-auto px-4"
    >

      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Marquee — scroll + scale both driven by JS (funnel effect), no CSS animation on this track */}
      <div ref={partnerTrackRef} className="flex items-center gap-10 sm:gap-20 w-max will-change-transform">

        {[...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos].map(
          (partner, i) => (
            <div
              key={i}
              ref={addPartnerLogoRef}
              className="flex items-center justify-center shrink-0 hover:opacity-100 opacity-85 transition-opacity duration-200 py-1 will-change-transform"
            >
              <img
                src={partner.src}
                alt={i < partnerLogos.length ? partner.alt : ""}
                aria-hidden={
                  i >= partnerLogos.length ? "true" : undefined
                }
                className="h-7 sm:h-11 w-auto object-contain"
              />
            </div>
          )
        )}

      </div>
    </div>
  </div>

{/* ================= BOTTOM CURVE — OPPOSITE DIRECTION ================= */}
<div className="w-full leading-none -mt-1 pointer-events-none">
  <svg
    viewBox="0 0 1440 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-8 sm:h-14 block"
    preserveAspectRatio="none"
  >
    <path
      d="M0 50 C400 -10, 1040 -10, 1440 50 L1440 0 L0 0 Z"
      fill="#FFFFFF"
    />
  </svg>
</div>

</div>









      </div>
    </section>
  )
}
