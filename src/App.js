
import React from 'react';
import {gql, useQuery} from "@apollo/client";

function App() {
  return (
    <div className="App">
      <h1>Inspiring quote</h1>
      <RandomQuote/>
    </div>
  );
}



function Quote({ text, author }) {
  return (
    <blockquote>
      {text}
      <footer>{author}</footer>
    </blockquote>
  );
}

const RANDOM_QUOTE_QUERY = gql`
query getRandomQuote {
  randomQuote {
    text
    author
  }
}
`;

function RandomQuote(){ 
const {data, loading, error, refetch} =useQuery(RANDOM_QUOTE_QUERY, {
  onError: error => {
    console.log("error", error);
    window.lastError = error;
  },
  errorPolicy: "all"
});
if (loading) {
  return "Quote is loading...";
}

if (error) {
  return "Could not load quote";
}
const {text, author} = data.randomQuote;
return (
  <>
<Quote text={text} author={author}/>
<button onClick={()=>refetch()}> Get new quote</button>
</>
);
}

// client.query({ query: RANDOM_QUOTE_QUERY}).then(result => console.log("Query result:", result.data));

export default App;
