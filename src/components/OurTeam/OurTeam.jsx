import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "Marketing Head",
    image: "https://via.placeholder.com/150",
  },
];

function OurTeam() {
  return (
    <div className="bg-cover  bg-center bg-no-repeat" id="ourTeam" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/watercolor-light-steel-blue-wallpaper-image_53876-94665.jpg?t=st=1740204431~exp=1740208031~hmac=9e3ff8254969a52b6ba6fd0f90db78bf1851167197334691626b653147ff8ae0&w=1060')" }}> 
      <div className="max-w-7xl mx-auto">
      <div  className="pt-16 pb-20 ">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h2>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default OurTeam;
