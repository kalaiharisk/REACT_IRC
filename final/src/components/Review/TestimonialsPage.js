import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Header from '../Header/Header';

const TestimonialsContainer = styled.div`
  text-color:white;
  font-size:50px;
  max-width: 100%;
  max-height:100%;
  margin: 10px;
  padding: 30px;
  text-align: center;
  background-image: url("https://img.freepik.com/free-vector/blackboard-background-with-burger_23-2148907814.jpg");
  background-size:100%;
  background-repeat: repeat-x;

`;

const TestimonialCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 30px;
  margin: 20px 0;
  font-color:black;
`;

const QuoteIcon = styled.span`
  font-size: 30px;
  color: #4caf50;
`;

const TestimonialText = styled.p`
  font-size: 25px;
  margin: 10px 0;
  text-color:black;
`;

const TestimonialAuthor = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      text: "The food at Haribhavanam is absolutely delicious. I love the variety of flavors and the friendly staff.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "The ambiance at Haribhavanam is perfect for a cozy dinner. I highly recommend their special dishes.",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "I've been a regular at Haribhavanam for years. The quality of food and service is consistently excellent.",
      author: "Michael Johnson",
    },
  ];

  return (
    <><Header/>
    <TestimonialsContainer>
      <h1>Customer Testimonials</h1>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id}>
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <TestimonialText>{testimonial.text}</TestimonialText>
          <QuoteIcon>
            <FaQuoteRight />
          </QuoteIcon>
          <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
        </TestimonialCard>
      ))}
    </TestimonialsContainer>
    </>
  );
};

export default TestimonialsPage;
