import {
  RiBuilding4Fill,
  RiBuildingFill,
  RiBuilding2Fill,
} from 'react-icons/ri';
import React from 'react';
const sublinks = [
  {
    page: 'company build',
    links: [
      {
        label: 'startup',
        icon: <RiBuilding4Fill />,
        url: '/cloudy-gusts',
      },
      {
        label: 'tekstil',
        icon: <RiBuilding4Fill />,
        url: '/cloudy-gusts',
      },
      {
        label: 'university',
        icon: <RiBuilding4Fill />,
        url: '/cloudy-gusts',
      },
    ],
  },
  {
    page: 'apartement build',
    links: [
      {
        label: 'apartement',
        icon: <RiBuildingFill />,
        url: '/apartement',
      },
      {
        label: 'apartement',
        icon: <RiBuildingFill />,
        url: '/cloudy-high',
      },
      {
        label: 'apartement',
        icon: <RiBuildingFill />,
        url: '/cloudy-high',
      },
      {
        label: 'apartement',
        icon: <RiBuildingFill />,
        url: '/cloudy-high',
      },
    ],
  },
  {
    page: 'infrastruktur',
    links: [
      { label: 'infrastruktur', icon: <RiBuilding2Fill />, url: '/Rain-Mix' },
      { label: 'infrastruktur', icon: <RiBuilding2Fill />, url: '/Rain-Mix' },
    ],
  },
];

export default sublinks;
