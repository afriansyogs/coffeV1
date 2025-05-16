import { Link } from '@inertiajs/react';

const BlogSection = ({ blogs }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl text-dark-brown font-semibold font-serif tracking-widest">READ OUR BLOGS</h2>
        <a href="/blog" className="hidden lg:flex items-center justify-center w-32 h-12 rounded-full bg-brown text-white border-2 hover:bg-white hover:text-brown hover:border-brown active:scale-95 transition duration-200">
            View All
          </a>
      </div>

      {/* Grid Blog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => {
          // Index 1 (blog ke-2), 3 (blog ke-4), dan 5 (blog ke-6) akan dibuat lebih tinggi
          const isTall = index === 1 || index === 3 || index === 5;

          return (
            <div
              key={index}
              className={`flex flex-col space-y-4 ${
                isTall ? 'lg:row-span-2' : ''
              }`}
            >
              <Link href={`/blog/${blog.id}`} className='cursor-pointer'>
                <img
                  src={blog.blog_img}
                  alt={blog.title}
                  className={`rounded-lg object-cover w-full ${
                    isTall ? 'h-[320px]' : 'h-48'
                  }`}
                />
                <h3 className="text-sm font-semibold">{blog.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {blog.description}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogSection;
