'use client';

import React from 'react';

import Image from 'next/image';

import { formatDate, formatDateEng } from '../../utils/formDate';

import Link from 'next/link';

import NewsItem from '@/lib/types/NewsItem';

interface NewsPropsType {
  item: NewsItem;
}
const News = ({ item }: NewsPropsType): JSX.Element => {

  const language = item.title.match(/[а-яА-Я]+/);

  return (
    <div
      key={item.id}
      className=" bg-white border border-gray-200 rounded-lg shadow-lg"
    >
      <a href="#" className="">
        <Image
          className="rounded-lg"
          width={800}
          height={100}
          src={item.image_big}
          alt=""
        />
      </a>
      <div className="p-5">
        <h5 className="mb-5 text-gray-900 dark:text-white">
          <span className="text-xs font-semibold tracking-tight uppercase text-gray-600">
            {language
              ? formatDate(item.creation_date)
              : formatDateEng(item.creation_date)}
          </span>
        </h5>
        <p className="mb-3">
          <Link href={`/${item.id}`}>
            <span className="font-semibold text-base tracking-tight font-openSans text-black">
              {item.title}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default News;
