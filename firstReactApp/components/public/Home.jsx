import React, { useState } from 'react';
import Spotlight from './Spotlight';
import Chief from './Chief';
import Modal from "./Modal";
import Notification from "./Notification";

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
          <Spotlight />
          </div>
    </>
  )
}
export default Home