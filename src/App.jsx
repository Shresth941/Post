import { useState } from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import Header from './component/Header';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';
import Customcard from './component/Customcard';
import Center from './component/Center';
import PostlistProvider from './store/post';
import PostList from './component/PostList';


function App() { 
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
   
    <PostlistProvider>
      <div className="cotain">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="app-container">
          <Header />
          {selectedTab === "Home" ? <PostList/> : <Center />}
          <Footer className="footer" />
        </div>
      </div>
      </PostlistProvider>
 
  );
}

export default App;
