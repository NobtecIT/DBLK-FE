import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: '/home1',
  },
  {
    id: 4,
    label: 'Restaurants',
    subItems: [
      {
        id: 5,
        label: 'Nigerian',
        link: 'nigeria',
        parentId: 4,
      },
      {
        id: 6,
        label: 'African',
        link: 'african',
        parentId: 4,
      },
      {
        id: 6,
        label: 'Chinese',
        link: '/chinese',
        parentId: 4,
      },
      {
        id: 6,
        label: 'Delivery',
        link: '/cat',
        parentId: 4,
      },
    ],
  },
  {
    id: 7,
    label: 'Home Services',
    subItems: [
      {
        id: 8,
        label: 'Heating & Air Conditioning/HVAC',
        link: '/ac',
        parentId: 7,
      },
      {
        id: 9,
        label: 'Lighting Fixtures & Equipment',
        link: '/acco',
        parentId: 7,
      },
      {
        id: 10,
        label: 'Plumbing',
        link: '/apl',
        parentId: 7,
      },
      {
        id: 11,
        label: 'Painters',
        link: '/paint',
        parentId: 7,
      },
      {
        id: 12,
        label: 'Real Estate',
        link: '/real',
        parentId: 7,
      },
      {
        id: 13,
        label: 'Security Systems',
        link: '/secure',
        parentId: 7,
      },
    ],
  },
  {
    id: 16,
    label: 'Health & Medical',
    subItems: [
      {
        id: 17,
        label: 'Chiropractors',
        link: '/Chiropractors',
        parentId: 16,
      },
      {
        id: 18,
        label: 'Dentists',
        link: '/Dentists',
        parentId: 16,
      },
      {
        id: 19,
        label: 'Doctors',
        link: '/Doctors',
        parentId: 16,
      },
      {
        id: 19,
        label: 'Hospitals',
        link: '/Hospitals',
        parentId: 16,
      },
      {
        id: 19,
        label: 'Pharmacy',
        link: '/Pharmacy',
        parentId: 16,
      },
    ],
  },
  {
    id: 21,
    label: 'Professional Services',
    subItems: [
      {
        id: 22,
        label: 'Accountants',
        link: '/Accountants',
        parentId: 21,
      },
      {
        id: 23,
        label: 'Lawyers',
        link: '/lawyers',
        parentId: 23,
      },
      {
        id: 26,
        label: 'Software Development',
        link: '/Software Development',
        parentId: 26,
      },
      {
        id: 26,
        label: 'Legal Services',
        link: '/Legal Services',
        parentId: 26,
      },
      {
        id: 26,
        label: 'Immigration Law',
        link: '/Immigration Law',
        parentId: 26,
      },
    ],
  },
];

