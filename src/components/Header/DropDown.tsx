'use client';
import { getNews } from '@/lib/featurues/news/newsSlice';

import { useAppDispatch } from '@/lib/featurues/store';

import React, { useEffect, useState } from 'react';

const Dropdown = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedLanguage, setSelectedLanguage] = useState<'Ru' | 'Eng'>('Ru');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: 'Ru' | 'Eng') => {
    setSelectedLanguage(language);
    setIsOpen(false);
    dispatch(getNews({ language_id: language === 'Ru' ? 1 : 2 }));
  };

  useEffect(() => {

    dispatch(getNews({ language_id: selectedLanguage === 'Ru' ? 1 : 2 }));

  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-28 h-10 rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 25"
          fill="#ffff"
        >
          {selectedLanguage === 'Ru' ? (
            <use xlinkHref="/ru.svg#ru"></use>
          ) : (
            <use xlinkHref="/eng.svg#eng"></use>
          )}
        </svg>
        <span className="ml-1 text-white">{selectedLanguage}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 ml-2"
          viewBox="0 0 15 10"
          fill="#ffff"
        >
          <use xlinkHref="/Down.svg#down"></use>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 right-0 mt-1 w-28 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
            onClick={() => selectLanguage('Ru')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-3"
              viewBox="0 0 24 24"
              fill="#ffff"
            >
              <use xlinkHref="/ru.svg#ru"></use>
            </svg>
            <span>Ru</span>
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-800 hover:bg-gray-100 focus:outline-none"
            onClick={() => selectLanguage('Eng')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="mr-3"
              viewBox="0 0 24 24"
              fill="#ffff"
            >
              <use xlinkHref="/eng.svg#eng"></use>
            </svg>
            Eng
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
