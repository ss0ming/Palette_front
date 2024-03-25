import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import RegisterProject from "./components/RegisterProject";
import ProjectInformationPage from "./pages/ProjectInformationPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import KakaoRedirectPage from "./pages/KakaoRedirectPage";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectList" element={<ProjectListPage />} />
          <Route path="/RegisterProject" element={<RegisterProject />} />
          <Route
            path="/ProjectInformation/:projectSlug"
            element={<ProjectInformationPage />}
          />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route
            path="/oauth/redirected/kakao"
            element={<KakaoRedirectPage />}
          ></Route>
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
