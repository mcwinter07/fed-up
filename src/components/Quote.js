import React from 'react';

const Quote = (props) => {
  const { quoteText } = props;
  return (
    <blockquote className="quote">
      <q>
        {quoteText}
      </q>
    </blockquote>
  )
}

export default Quote;