import logo from './logo.svg';

// import './App.css';
import '../../my-app/src/style.css'
import '../src/custom.js'
import { Header } from './components/Buoi1/Header';
import { Section } from './components/Buoi1/Section';
import { Footer } from './components/Buoi1/Footer';
import { Counter } from './components/count/Counter';
import { Person } from './components/person/Person';
import { Youtube } from './components/youtube/Youtube';

function App() {
  return (
    <div className="App">
    <Youtube></Youtube>
    {/* <Person name="Quần jean" type="Skinny" color ="Đen" size = "L">Person1</Person>
    <Person name="Váy" type="váy công chúa" color ="Trắng" size = "M">Person1</Person> */}
    
    {/* <Counter></Counter> */}
        {/* <Header></Header>
        <Section></Section>
        <Footer></Footer> */}
        {/* <YoutubeItem image="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
        avatar="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
        author="Xuan Hoang" 
        title="Hoc ngay di ban ui">

        </YoutubeItem> */}
    </div>
  );
}

// function YoutubeItem(props) {
//   return (
//   <div className="youtube-item">
//       <div className="youtube-image">
//         <img src={props.image} alt="" />
//       </div>
//       <div className="youtube-footer">
//           <img src={props.avatar} alt="" className="youtube-avatar" />
//           <div className="youtube-info">
//             <h3 className="youtube-title">{props.title}</h3>
//             <h4 className="youtube-author">{props.author}</h4>
//           </div>
//       </div>
//   </div>
//   );
// }

export default App;
