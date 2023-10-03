import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {
 
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [searchQuery, setSearchQuery] = useState('');
  const [topLoadingBarprogress, setTopLoadingBarprogress] = useState(10);

  const setProgress = (progress)=>{
    setTopLoadingBarprogress(progress)
  }

  const handleSearchClick = (query)=>{
    setSearchQuery(query)
  }

    return (
      <>
        {/* in country u can pass 2 letter of countryname e.g. us in au jp br cn ma rs sk tw nl gr pl il
        <News pageSize={9} category="general" country="us" apikey={apiKey}/> */}
        
        <LoadingBar color="#f11946" progress={topLoadingBarprogress} />

        <BrowserRouter>
            <Navbar onSearchClick={handleSearchClick}/>
            <Routes>
              <Route exact path="/"
              element={<News key='general' pageSize={pageSize} category="general" country="in" searchQuery={searchQuery} apikey={apiKey} setProgress={setProgress}/>}>
              </Route>
              <Route exact path="/business"
              element={<News key='business' pageSize={pageSize} category="business" country="in" searchQuery={searchQuery} apikey={apiKey} setProgress={setProgress}/>}>
              </Route>
              <Route exact path="/entertainment"
              element={<News key='entertainment' pageSize={pageSize} category="entertainment" country="in" searchQuery={searchQuery} apikey={apiKey} setProgress={setProgress}/>}>
              </Route>
              <Route exact path="/health"
              element={<News key='health' pageSize={pageSize} category="health" country="in" searchQuery={searchQuery} apikey={apiKey} setProgress={setProgress}/>}>
              </Route>
              <Route exact path="/science"
              element={<News key='science' pageSize={pageSize} category="science" country="in" searchQuery={searchQuery} apikey={apiKey} setProgress={setProgress}/>}>
              </Route>
              <Route exact path="/sports"
              element={<News key='sports' pageSize={pageSize} category="sports" country="in" searchQuery={searchQuery} apikey={apiKey} setProgress={setProgress}/>}>
              </Route>
            </Routes>                                                   
        </BrowserRouter>
          
     </>
    ) 
}

