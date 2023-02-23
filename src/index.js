import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@brainhubeu/react-carousel/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import { CartProvider } from 'react-use-cart';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const stripePromise = loadStripe('pk_test_51MdzA4CmoEsvppAAscDLFQSRz9dFzqaCKZVOcnQIRm7Cs0X9m8r6e7owct5udVJDpuH0HWiOwB61CK4qWIze4COb00lN5HWC8C');

const client=new ApolloClient({
  uri:"http://localhost:1337/graphql",
  cache:new InMemoryCache()
})


root.render(
  <React.StrictMode>
  
  <CartProvider>
  <Elements stripe={stripePromise}>




  <ApolloProvider client={client}>
  <BrowserRouter>

    <App />
    <ToastContainer />
  </BrowserRouter>
  </ApolloProvider>
  </Elements>
  </CartProvider>
  </React.StrictMode>
);


