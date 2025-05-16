import React from 'react';
import { usePage } from '@inertiajs/react';
import MainLayout from '../layouts/MainLayout';

const BlogDetail = () => {
  const { blogs } = usePage().props;
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12 pt-24 lg:pt-32">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        {blogs.title}
      </h1>
      {/* img */}
      <div className="w-full h-64 md:h-[400px] mb-8 overflow-hidden rounded-lg shadow-lg">
        <img
          src={`/${blogs.blog_img}`}
          alt={blogs.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Deskripsi */}
      <div className="text-base leading-7 text-gray-700 whitespace-pre-line">
        {blogs.description}
      </div>
    </section>
  );
};

BlogDetail.layout = page => <MainLayout children={page} />
export default BlogDetail;
