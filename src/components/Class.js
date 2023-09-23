import React from "react";
import yogaImage from "./images/Yoga.png";
import CoreImage from "./images/Core.png";
import ZumbaImage from "./images/Zumba.png";
import CardioImage from "./images/Cardio.png";
import BoxingImage from "./images/BoxingBootcamp.png";
import SpinningImage from "./images/SpinningChallenge.png";
import MatworkImage from "./images/PilatesMatwork.png";

import "./css/Class.css";
export default function Class() {
  // Example class data with images
  const classData = [
    {
      name: "Yoga Fusion",
      description:
        "Experience a blend of yoga and mindfulness in our Yoga Fusion class. Find balance, strength, and serenity as you flow through poses and explore meditation techniques. Suitable for all levels, this class will leave you feeling rejuvenated and centered.",
      image: yogaImage, // Replace with the actual image filename or URL
      url: "",
    },
    {
      name: "HIIT Cardio",
      description:
        "Get ready to sweat with our High-Intensity Interval Training (HIIT) Cardio class. Torch calories and boost your endurance through heart-pounding workouts. Our expert trainers will keep you motivated in this dynamic and results-driven session.",
      image: CardioImage, // Replace with the actual image filename or URL
    },
    {
      name: "Strength & Core",
      description:
        "Join our Strength & Core class to sculpt and tone your muscles. Using weights and bodyweight exercises, this class targets your core and builds overall strength. Achieve a powerful and defined physique while improving your stability.",
      image: CoreImage, // Replace with the actual image filename or URL
    },
    {
      name: "Pilates Matwork",
      description:
        "Strengthen your core and enhance flexibility in our Pilates Matwork class. Concentrate on controlled movements to improve posture and core stability. Experience a mind-body connection that promotes long-lasting wellness.",
      image: MatworkImage, // Replace with the actual image filename or URL
    },
    {
      name: "Spinning Challenge",
      description:
        "Join our Spinning Challenge for a high-intensity cycling experience. Pedal through hills and sprints in a motivating group setting. Improve cardiovascular fitness and burn calories while enjoying energizing music and camaraderie.",
      image: SpinningImage, // Replace with the actual image filename or URL
    },
    {
      name: "Boxing Bootcamp",
      description:
        "Unleash your inner fighter in our Boxing Bootcamp. Learn boxing techniques while boosting your endurance and agility. This high-energy class is perfect for those looking to challenge themselves and relieve stress.",
      image: BoxingImage, // Replace with the actual image filename or URL
    },
    {
      name: "Zumba Dance Party",
      description:
        "Dance your way to fitness with our Zumba Dance Party! Groove to Latin and world rhythms in this fun-filled class. It's a fantastic way to burn calories, improve coordination, and let loose on the dance floor.",
      image: ZumbaImage, // Replace with the actual image filename or URL
    },
  ];

  return (
    <div className="classes" id="classes">
      <h2>Our Classes</h2>
      <ul>
        {classData.map((cls, index) => (
          <li key={index}>
            <div className="class-item">
              <div className="class-image">
                <img src={cls.image} alt={cls.name} />
              </div>
              <div className="class-info">
                <h3>{cls.name}</h3>
                <p>{cls.description}</p>
                <a href={cls.url}>
                  <button type="submit" class="btn btn-success">
                    Know More!
                  </button>
                </a>
                <br />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
