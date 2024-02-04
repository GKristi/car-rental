import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import FavoritesPage from "../../pages/FavotitesPage/FavoritesPage";
import Layout from "../Layout/Layout";
import { selectIsLoading } from "../../store/selectors";
import { useSelector } from "react-redux";
import { ThreeCircles } from "react-loader-spinner";
import { LoaderWrapper } from "./App.styled";

function App() {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading && (
        <LoaderWrapper>
          <ThreeCircles color=" #0b44cd" width="120px" height="120px" />
        </LoaderWrapper>
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
