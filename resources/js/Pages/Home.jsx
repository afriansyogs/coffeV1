import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Sosmed from '../components/Sosmed';

const Home = () => {
  return(
    <>
      <h1 className=" text-cyan-500">hau</h1>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-primary">Tombol DaisyUI</button>
      <div className="bg-blue-500 text-white p-4">Coba lihat apakah Tailwind bekerja!</div>
      <Sosmed />
    </>
  )
}

Home.layout = page => <MainLayout children={page} />
export default Home;