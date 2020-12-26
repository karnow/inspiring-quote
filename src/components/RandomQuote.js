import React from 'react';
import { useQuery, gql } from "@apollo/client";
import Quote from './Quote';

const RANDOM_QUOTE_QUERY = gql`
query getRandomQuote {
  randomQuote {
    text
    author
  }
}
`;

export default function RandomQuote() {
  const { data, loading, error, refetch } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: error => {
      console.log("error", error);
      window.lastError = error;
    },
    errorPolicy: "all",
    fetchPolicy: "no-cache"
  });

  if (loading) {
    return "Quote is loading...";
  }

  if (error) {
    return "Could not load quote";
  }
  const { text, author } = data.randomQuote;
  return (
    <>
      <Quote text={text} author={author} />
      <button onClick={() => refetch()}> Get new quote</button>
    </>
  );
}



// client.query({ query: RANDOM_QUOTE_QUERY}).then(result => console.log("Query result:", result.data));