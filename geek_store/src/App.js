import './App.css';
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";
import ContentRow from "./components/ContentRow";
import ContentRowTop from "./components/ContentRowTop";
import Footer from "./components/Footer";
import Title from "./components/Title";
import DataBase from "./components/DataBase";
import PageHeading from "./components/PageHeading";


function App() {



  return (
    <>
      <div id="wrapper"> 
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid">
              <PageHeading />
              <ContentRowTop />
              <ContentRow/>
              <Title />
              <DataBase />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
    </>
  );
}

export default App;