import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <Menu as="div" className="relative inline-block text-left">{children}</Menu>;
};

export const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
      {children}
    </Menu.Button>
  );
};

export const DropdownMenuContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu.Items
      as={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      {children}
    </Menu.Items>
  );
};

export const DropdownMenuItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`${
            active ? 'bg-gray-100' : ''
          } block w-full px-4 py-2 text-left text-sm text-gray-700`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};
