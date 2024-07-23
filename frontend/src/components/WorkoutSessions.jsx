import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Sessions</h1>
        <p>
          Discover our top workout sessions designed to help you achieve your fitness goals. From high-intensity interval training to relaxing yoga sessions, we have something for everyone.
        </p>
        <img src="/img8.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Join our featured bootcamps to push your limits and take your fitness to the next level. Our bootcamps are designed for all fitness levels and provide a variety of workouts to keep you engaged and motivated.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training</h4>
            <p>
              Focus on building muscle and increasing strength through targeted weightlifting and resistance exercises. Suitable for those looking to build muscle and increase endurance.
            </p>
          </div>
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              High-Intensity Interval Training (HIIT) sessions that combine cardio and strength training for a full-body workout. Ideal for burning calories and building muscle quickly.
            </p>
          </div>
          <div>
            <h4>Yoga & Meditation</h4>
            <p>
              A comprehensive program combining yoga and meditation to enhance flexibility, reduce stress, and improve overall well-being. Perfect for all levels from beginners to advanced.
            </p>
          </div>
          <div>
            <h4>Bootcamp Fusion</h4>
            <p>
              A dynamic fusion of various workout styles including cardio, strength, and agility drills. Designed to provide a well-rounded fitness experience and keep workouts exciting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
