import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import Button from './components/button/Button';
import Card from './components/card/Card'
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Button text="Folder" colour="btn btn-primary" />
      <Card title="App Card" subtitle="App Subtitle" des="Muhammd Zubair S/o Ghulam Rasool Mughal living in Sangla Hill." />
    </>
  )
}

export default App;
