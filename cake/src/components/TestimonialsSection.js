import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "The chocolate truffle cake was absolutely divine! Best I've ever had.",
    name: "Priya Sharma, Pune",
  },
  {
    id: 2,
    quote:
      "Ordered a custom cake for my daughter's birthday and it was the star of the party. Thank you!",
    name: "Amit Patel, Mumbai",
  },
  {
    id: 3,
    quote:
      "The delivery was on time and the red velvet cupcakes were heavenly. Highly recommend!",
    name: "Sunita Rao, Bengaluru",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
