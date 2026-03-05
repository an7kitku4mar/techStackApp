const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

      const handleClose = () => {
            setTimeout(() => {
                    onClose();
                    }, 100);
  // Match animation duration
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      {/* Modal Box */}
      <div className="bg-slate-700 border  w-[700px] max-w-[90%] 
                      rounded-xl shadow-xl p-3 
                      transform transition-all duration-900 animate-slideInModal">
        
        {/* Content */}
        <div className="mb-6">
          <h2 className="text-center bg-black border p-2 rounded text-2xl font-bold mb-4 py-4">Modal Test Heading Here</h2>
                  <p className="text-gray-100 border p-3 text-justify rounded bg-gray-800">
                    This modal opened automatically when the page loaded. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio quos alias natus quod corporis ea sunt reiciendis, similique laboriosam deserunt nihil dolor totam earum rerum numquam pariatur eos ut labore modi laborum eum incidunt accusamus? Vitae at rem aspernatur animi adipisci veritatis iste, optio explicabo rerum eius officiis atque culpa temporibus magni ratione labore. Quaerat hic, nesciunt fuga dolore consectetur error itaque non consequuntur doloremque quidem fugit nostrum veniam, enim ad odit pariatur corporis? Tempore maiores necessitatibus nemo tenetur ad facere blanditiis unde cum at. Quaerat quibusdam tempora ratione iusto est reprehenderit illum? Facilis vitae quas quae dignissimos autem!
                  </p>
        </div>

        {/* Bottom Close Button */}
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-red-800 text-white 
                       rounded-lg hover:bg-red-900 
                       transition duration-200 mx-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;