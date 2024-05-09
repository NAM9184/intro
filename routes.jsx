import { createBrowserRouter } from 'react-router-dom';
import Gsap from './src/components/Gsap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Gsap />,
  },
]);

export default router;
