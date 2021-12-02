import { Typography } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import react from 'react';
import { ServicioSolicitud } from './components/servicios/solicitudServicio/ServicioSolicitud';

const{Title}= Typography;

function App() {
  return (
    <div className="App">
      <ServicioSolicitud/>
    </div>
  );
}

export default App;
