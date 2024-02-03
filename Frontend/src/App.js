import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
const App = () => {
  return (
      <RouterProvider router={router}>
        {/* Your application components */}
      </RouterProvider>
  );
};

export default App;