import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/ROUTES';
import { useAuth } from '../../../contexts/auth/authContext';
import AuthMenu from './auth-menu';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const { isAuthorized, user } = useAuth();
  return (
    <header className=''>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to={ROUTES.HOMEPAGE}>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </Link>
          </div>
          {isAuthorized ? (
            <Link
              to={ROUTES.PROFILE_DETAILS}
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
            >
              Profile
            </Link>
          ) : (
            <div className=' items-center justify-end flex  lg:w-0'>
              <Link
                to={ROUTES.SIGNIN}
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Sign in
              </Link>
              <Link
                to={ROUTES.SIGNUP}
                className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
