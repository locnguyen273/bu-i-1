import Header from './components/header/index';
import CategoryPage from './pages/categoryPage';
import DetailPage from './pages/detailPage';
import HomePage from './pages/homePage';
import { Routes, Route} from "react-router-dom";
import NotFoundPage from './pages/notFoundPage';

function App() {
  
  return (
    <div className=" container">
      <Header />
      <Routes>
        <Route path='' element={<HomePage />} /> 
        <Route path='detail/:id' element={<DetailPage />} /> 
        <Route path='category' element={<CategoryPage />} /> 
        {/* <Route path='*' element={<Navigate to={"/"} />} />  */}
        <Route path='*' element={<NotFoundPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
