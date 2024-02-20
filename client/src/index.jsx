import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
