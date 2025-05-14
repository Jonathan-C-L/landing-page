import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import profilePic from './assets/Default Profile.jpg'
import stocksPic from './assets/stocks.jpg'
import pharmPic from './assets/pharmacy.jpg'
import UserGreeting from "./UserGreeting.jsx";


function App() {
  return(
    //can only return single enclosing tag -> need to wrap jsx components in a jsx fragment
    <>
      {/*long way -> <Header></Header>*/}
      <Header/>
      <UserGreeting name="JCL"/>
      <Card src={profilePic} title="About Me" desc="2nd year Computer Engineering Technology Student (NAIT)"/>
      <Card src={stocksPic} alt="image of stocks" title="Stock Simulator" desc="Stock simulator using a stock exchange API"/>
      <Card src={pharmPic} alt="image of medications" title="PharmaDirect" desc="Medication delivery app between pharmacy and patients"/>
      {/*if argument is not a string-literal, but be contained within {}*/}
      <Footer/>
    </>
  );
}

export default App

/*
To get back into the development server
- Go to terminal
- "cd <react_file_name>"
- "npm run dev"
*/