import React, { useState } from 'react';
import Carousel from './Carousel';
import Chief from './Chief';
import Modal from "./Modal";
import Notification from "./Notification";
import Carousel3D from "./Carousel3D";
import Accordion from "./Accordion";
import Testimonials from './Testimonials';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <div className="absolute min-h-screen flex items-center justify-center bg-gray-100">

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>      </Modal>

    </div>
        <div className="">
          <Modal />
          <Notification />
          <Chief />
          <Carousel />
          <Carousel3D />
          <Accordion />
          <Testimonials />
          </div>
    </>
  )
}
export default Home