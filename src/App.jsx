import React from 'react';
import { Routes , Route} from 'react-router-dom'
import Categories from './Components/Categories/Categories'
import Faqs from './Components/Faqs/Faqs'
import News from './Components/News/News'
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Components/HomePage/HomePage';
import './App.css'

const App = () => {

  return (

    <div>
      <HomePage/>
       <Routes>
        <Route path='/categories' element={<Categories/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/news' element={<News/>} />
      </Routes>
    </div>
  );
}

export default App;
