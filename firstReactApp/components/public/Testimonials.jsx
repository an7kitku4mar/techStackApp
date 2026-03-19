import "./Testimonials.css";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    { name: "Amit", text: "Amazing travel experience!" },
    { name: "Riya", text: "Loved the UI and smooth booking." },
    { name: "Kunal", text: "Best travel platform I've used." },
    { name: "Sneha", text: "Highly recommended!" }
  ];

  return (
    <div className="m-auto testimonial-container h-300px w-4/5 mb-20 overflow-hidden">Testimonials
        <motion.div
  animate={{ y: ["0%", "-50%"] }}
  transition={{
    repeat: Infinity,
    duration: 50,
    ease: "linear"
  }}
>
      <div className="testimonial-track">
        
        {[...testimonials, ...testimonials].map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{item.text}"</p>
            <h4>- {item.name}</h4>
          </div>
        ))}

      </div>
      </motion.div>
    </div>
  );
}

export default Testimonials;