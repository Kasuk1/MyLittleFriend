import { Typography } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

import { ServicioSolicitud } from './components/servicios/solicitudServicio/ServicioSolicitud';
import { ListaServicios } from './components/servicios/listaServicio/ListaServicios.js';


const{Title}= Typography;

function App() {
  return (
    <div className="App">
      {/* <ServicioSolicitud/> */}
      <ListaServicios/>
      
    </div>
  );
}

export default App;
