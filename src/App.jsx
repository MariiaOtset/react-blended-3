import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages/Home';
import { SearchCountry } from 'pages/SearchCountry';
import { Country } from 'pages/Country';
import { Header } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
