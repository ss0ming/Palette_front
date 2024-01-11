import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectInformationPage from "./pages/ProjectInformationPage";
import MyPage from "./pages/MyPage";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectList" element={<ProjectListPage />} />
          <Route
            path="/ProjectInformation"
            element={<ProjectInformationPage />}
          />
          <Route
            path="/ProjectInformation/:projectSlug"
            element={<ProjectInformationPage />}
          />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
