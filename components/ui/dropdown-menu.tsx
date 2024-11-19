import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define prop types for the components
interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {children}
    </Menu>
  );
};

export const DropdownMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Menu.Button
      as="div"
      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer"
    >
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
  disabled = false,
}: DropdownMenuItemProps) => {
  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => (
        <div
          onClick={!disabled ? onClick : undefined}
          className={`${
            active && !disabled ? 'bg-gray-100' : ''
          } block w-full px-4 py-2 text-left text-sm text-gray-700 cursor-pointer`}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );
};

// Usage Example
const MyDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>Options</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        {/* Without <a> */}
        <Link href="/account-settings">
          Account Settings
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        {/* With legacyBehavior */}
        <Link href="/support" legacyBehavior>
          <a>Support</a>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <span className="text-gray-500">Invite a friend (coming soon!)</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default MyDropdown;
