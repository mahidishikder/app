// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { div } from 'framer-motion/client';

// Example data for reviews (this can be dynamically fetched)
const reviews = [
  { id: 1, name: 'Mahidi Shikder', review: 'Lorem ipsum dolor sit amet.', rating: '5 Star', image: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' },
  { id: 2, name: 'John Doe', review: 'Excellent experience, highly recommend!', rating: '4.5 Star', image: 'https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=' },
  { id: 3, name: 'Jane Smith', review: 'Very good service.', rating: '5 Star', image: 'https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg' },
  { id: 4, name: 'Sara Lee', review: 'Fast and reliable, loved it!', rating: '4 Star', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D' },
  { id: 5, name: 'Tom Harris', review: 'Professional and efficient service.', rating: '5 Star', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_moETSqoKBNdz9HYXmP3iAaWds8Sp6q8WGCn6u2C9CvSTcVsn3BoHmAUs7NXsyj9Ow0&usqp=CAU' },
  { id: 6, name: 'John Doe', review: 'Excellent experience, highly recommend!', rating: '4.5 Star', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxGtwh8VCdGFm1GuFtjPYtz80CbuiqcDI_g82l06G__IOLka2OBj1_SrVJpreq7X42MU&usqp=CAU' },
  { id: 7, name: 'Jane Smith', review: 'Very good service.', rating: '5 Star', image: 'https://images.squarespace-cdn.com/content/v1/5a63f3576957da47039e978d/1691633056601-5IBIP7BITRZDQCYKDTTT/Joric.jpg' },
  { id: 8, name: 'Sara Lee', review: 'Fast and reliable, loved it!', rating: '4 Star', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZp9Ib3NKmxoSvfYkuSBlk8FIiK-3yGpASog_nSs4zHhPZ92jME3XagkDPpAJ8BdwLbic&usqp=CAU' },
  { id: 9, name: 'Tom Harris', review: 'Professional and efficient service.', rating: '5 Star', image: 'https://images.squarespace-cdn.com/content/v1/5a63f3576957da47039e978d/1691700635043-NH1MWS6QTL5VVWEX9RMM/Jared2016.jpg' },
];

function Review() {
  return (
    <div id='review' className='bg-gray-200'>
      <div id='review' className='max-w-7xl mx-auto'>
      <div className="px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12 ">What Our Clients Are Saying</h2>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={20} // Space between reviews
        slidesPerView={1} // Only show 1 slide at a time by default
        autoplay={{
          delay: 2000, // Change slide every 2 seconds (2000ms)
          disableOnInteraction: false, // Ensure autoplay continues after user interaction
        }}
        speed={1000} // Smooth slide transition (1000ms)
        loop={true} // Infinite loop of slides
        breakpoints={{
          // When window width is >= 1024px (lg)
          1024: {
            slidesPerView: 3, // Show 3 reviews at a time
            spaceBetween: 20, // Space between reviews
          },
          // When window width is >= 768px (md)
          768: {
            slidesPerView: 2, // Show 2 reviews at a time
            spaceBetween: 20,
          },
          // When window width is >= 480px (sm)
          480: {
            slidesPerView: 1, // Show 1 review at a time
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-4  bg-slate-300 rounded ">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h2 className="text-center text-xl font-semibold mt-2">{review.name}</h2>
              <p className="text-center text-gray-500">{review.review}</p>
              <p className="text-center text-yellow-500">{review.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </div>
  );
}

export default Review;