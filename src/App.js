/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    /* BEM conventions */
    <div className="app"> 
      {/* Sidebar */}
      <Sidebar />
      {/* Feeds */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
