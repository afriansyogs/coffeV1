import React from 'react';
import { usePage } from '@inertiajs/react';
import MainLayout from '../layouts/MainLayout';
import Sosmed from '../components/Sosmed';
import Carousel from '../components/Carousel';
import Service from '../components/Service';
import Category from '../components/Category';
import BestCoffe from '../components/BestCoffe';
import CoffeMenu from '../components/CoffeMenu';
import BlogSection from '../components/BlogSection';
import BannerSection from '../components/BannerSection';
import Introduction from '../components/Introduction';
import Gallery from '../components/Gallery';

const Home = () => {
  const { category, products, newArrival, blogs } = usePage().props;
  // console.log(products)
  console.log(`hai ${blogs}`)
  return(
    <>
      <BannerSection />
      <Introduction />
      {products && <BestCoffe productData={products} />}
      <Carousel />
      {category && category.length > 0 && <Category categoryData={category} />}
      {/* {newArrival && newArrival.length > 0 && <CoffeMenu categoryData={newArrival} />} */}
      <CoffeMenu />
      <Sosmed />
      <Service />
      {blogs && blogs.length > 0 && <BlogSection blogs={blogs} />}
      <Gallery />
    </>
  )
}

Home.layout = page => <MainLayout children={page} />
export default Home;