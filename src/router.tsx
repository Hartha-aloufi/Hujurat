import { createBrowserRouter } from 'react-router-dom';
import { Tafsir } from './pages/Tafsir/Tafsir';
import { Layout } from './components/Layout/Layout';
import { Video } from './pages/Video/Video';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/tafsir/:verseNumber/:book',
        element: <Tafsir />,
      },
      {
        path: '/shar7/:shar7Id/:verseNumber',
        element: <Video />,
      },
    ],
  },
]);
