import { useState } from "react";

const NotificationSidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const notifications = [
    {
      title: "New User Registered",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi quae labore libero eaque commodi ab earum molestiae reprehenderit dolores qui illum veniam assumenda, laudantium voluptatibus numquam temporibus similique quas ex enim! Eveniet aperiam sed, harum, eaque unde vero dolores facere expedita nulla voluptatum inventore iste maxime perspiciatis voluptatem quas"
    },
    {
      title: "Database Backup Completed",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi quae labore libero eaque commodi ab earum molestiae reprehenderit dolores qui illum veniam assumenda, laudantium voluptatibus numquam temporibus similique quas ex enim! Eveniet aperiam sed, harum, eaque unde vero dolores facere expedita nulla voluptatum inventore iste maxime perspiciatis voluptatem quas"
    },
    {
      title: "Server Restarted",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi quae labore libero eaque commodi ab earum molestiae reprehenderit dolores qui illum veniam assumenda, laudantium voluptatibus numquam temporibus similique quas ex enim! Eveniet aperiam sed, harum, eaque unde vero dolores facere expedita nulla voluptatum inventore iste maxime perspiciatis voluptatem quas"
    }
  ];

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`fixed top-4 right-4 w-90 bg-slate-900 shadow-2xl rounded-lg
      transform transition-transform duration-500 ease-in-out z-50
      ${open ? "animate-slideInModal" : "animate-slideOut"}`}
    >
      {/* Notification Items */}
      <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
        {notifications.map((item, index) => (
          <div key={index} className="border rounded-md p-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <button
                onClick={() => toggleContent(index)}
                className="text-blue-600 text-xs font-medium"
              >
                {activeIndex === index ? "Hide" : "Show"}
              </button>
            </div>

            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-400 transition-all duration-300">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Dismiss Button */}
      <div className="p-4 border-t">
        <button
          onClick={() => setOpen(false)}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default NotificationSidebar;