import './App.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'
import {useState} from 'react'
import Modal from './pages/home/Modal';
import NotificationToast from './pages/home/notificationToast'
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenNotiToast, setIsOpenNotiToast] = useState(true);
  return (
    <div className="App">
      <div class="overlay" data-overlay></div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      {isOpenNotiToast && <NotificationToast setIsOpenNotiToast={setIsOpenNotiToast} />}
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
