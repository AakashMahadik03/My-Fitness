import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Testimonial.css'

const Testimonial= () => {
  const testimonials = [
    {
      id: 1,
      text: "This gym is amazing! The trainers are knowledgeable, and the atmosphere is welcoming.",
      name: 'Alice Johnson',
      location: 'Los Angeles, CA',
      avatar: 'https://images.pexels.com/photos/7289412/pexels-photo-7289412.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      text: "I've been a member for years, and I still love it. The equipment is top-notch!",
      name: 'Michael Smith',
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      text: "The gym's cleanliness and hygiene are impressive. It's a safe environment to work out.",
      name: 'Emily Davis',
      location: 'Miami, FL',
      avatar: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      text: "I've seen great results since joining this gym. The trainers are so supportive!",
      name: 'John Doe',
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/6551136/pexels-photo-6551136.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      text: "This gym has everything I need for my fitness journey. Highly recommended!",
      name: 'Sarah Johnson',
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/6998744/pexels-photo-6998744.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true, // Set to true to enable autoplay
  autoplaySpeed: 5000, // Delay between slides in milliseconds (5 seconds)
};

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
