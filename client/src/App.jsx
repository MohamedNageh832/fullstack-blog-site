import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  Login,
  CreateBlog,
  Register,
  BlogPostDetailsPage,
} from "./pages";
import { MainLayout } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/blogs">
          <Route path=":id" element={<BlogPostDetailsPage />} />
          <Route path="create" element={<CreateBlog />} />
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Route>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
