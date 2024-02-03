import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-day-picker/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider, useClerk } from '@clerk/clerk-react';
import { dark } from "@clerk/themes";
import {OnboardingPage} from "../src/(auth)/onboarding/page";

const queryClient = new QueryClient();
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ToastContainer position='top-center' />
        <App />
      </ClerkProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();