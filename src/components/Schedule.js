import React from 'react';
import "./css/Schedule.css"

export default function Schedule() {
  // Example schedules for different levels
  const beginnerSchedule = [
    {
      day: 'Monday',
      time: '8:00 AM - 9:00 AM',
      class: 'Push day: Chest, Shoulder, Triceps',
    },
    {
      day: 'Tuesday',
      time: '8:00 AM - 9:00 AM',
      class: 'Pull day: Back, Biceps',
    },
    {
      day: 'Wednesday',
      time: '8:00 AM - 9:00 AM',
      class: 'Legs Day',
    },
    {
      day: 'Thursday',
      time: '8:00 AM - 9:00 AM',
      class: 'Push day: Chest, Shoulder, Triceps',
    },
    {
      day: 'Friday',
      time: '8:00 AM - 9:00 AM',
      class: 'Pull day: Back, Biceps',
    },
    {
      day: 'Saturday',
      time: '9:00 AM - 10:00 AM',
      class: 'Legs Day',
    },
  ];
  

  const intermediateSchedule = [
    {
      day: 'Monday',
      time: '8:00 AM - 9:30 AM',
      class: 'Strength Training: Chest, Shoulders, Triceps',
    },
    {
      day: 'Tuesday',
      time: '8:00 AM - 9:30 AM',
      class: 'Back and Biceps Workout',
    },
    {
      day: 'Wednesday',
      time: '8:00 AM - 9:30 AM',
      class: 'Legs and Glutes Day',
    },
    {
      day: 'Thursday',
      time: '8:00 AM - 9:30 AM',
      class: 'Cardio and Core Workout',
    },
    {
      day: 'Friday',
      time: '8:00 AM - 9:30 AM',
      class: 'Functional Fitness Training',
    },
    {
      day: 'Saturday',
      time: '9:00 AM - 10:30 AM',
      class: 'Full-Body Workout',
    },
  ];
  

  const advancedSchedule = [
    {
      day: 'Monday',
      time: '8:00 AM - 10:00 AM',
      class: 'Powerlifting: Bench Press, Squats, Deadlifts',
    },
    {
      day: 'Tuesday',
      time: '8:00 AM - 10:00 AM',
      class: 'High-Intensity Interval Training (HIIT)',
    },
    {
      day: 'Wednesday',
      time: '8:00 AM - 10:00 AM',
      class: 'Advanced Bodybuilding: Chest and Arms',
    },
    {
      day: 'Thursday',
      time: '8:00 AM - 10:00 AM',
      class: 'Athletic Performance Training',
    },
    {
      day: 'Friday',
      time: '8:00 AM - 10:00 AM',
      class: 'Advanced Leg Day: Squats, Lunges, Plyometrics',
    },
    {
      day: 'Saturday',
      time: '9:00 AM - 11:00 AM',
      class: 'Advanced Functional Training',
    },
  ];
  

  return (
    <div className="schedule" id='schedule'>
      <h2>Class Schedule</h2>

      <div className="schedule-level beginner">
        <h3>Beginner</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {beginnerSchedule.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.time}</td>
                <td>{entry.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><a href="">Click here to know more about beginner schedule</a></p>
      </div>

      <div className="schedule-level intermediate">
        <h3>Intermediate</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {intermediateSchedule.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.time}</td>
                <td>{entry.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><a href="">Click here to know more about intermediate schedule</a></p>
      </div>

      <div className="schedule-level advanced">
        <h3>Advanced</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {advancedSchedule.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.time}</td>
                <td>{entry.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><a href="">Click here to know more about actual schedule</a></p>
      </div>
    </div>
  );
}




