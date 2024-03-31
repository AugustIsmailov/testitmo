'use client';
import React from 'react';
import Dropdown from './DropDown';

function Header(): JSX.Element {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-purple-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-52 p-4">
        <a
          href="https://en.itmo.ru/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg width="162" height="16" viewBox="0 0 162 16">
            <use xlinkHref={`/itmo.svg#itmo`} />
          </svg>
        </a>

        <Dropdown />
      </div>
    </nav>
  );
}

export default Header;
