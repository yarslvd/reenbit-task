import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./pages/Main/Main";
import CharacterInfo from "./pages/CharacterInfo/CharacterInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/:id",
    element: <CharacterInfo />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
