import { useEffect } from "react";
import { UsePerson } from "../Hooks/usePerson";
import { PersonajesApi } from "../components/MiApi/PersonajesApi";
import NavbarApp from '../components/NavbarApp/NavbarApp'
import FooterApp from '../components/FooterApp/FooterApp'


const Personajes = () => {
  const { getAllPerson, dataPerson, Contador, disminuir, aumentar } =
    UsePerson();
  useEffect(() => {
    getAllPerson(Contador);
  }, [dataPerson]);
  return (
<div className="Black">
        <NavbarApp/>
    <center>
        <h1 className="Tpersonajes">PERSONAJES</h1>
    </center>
      <div className='Gplanet'>
        {dataPerson.map((personajes) => (
        <PersonajesApi
            key={personajes.name}
            name={personajes.name}
            hair={personajes.hair_color}
            eyes={personajes.eye_color}
            skin={personajes.skin_color}
            gender={personajes.gender}
            height={personajes.height}
            weigth={personajes.mass}
            birthday={personajes.birth_year}
          />
        ))}
      </div>
      <div className="Paginacion">
        <button className="botonPag" onClick={disminuir}>
          Anterior
        </button>
        <h5 className="Ncontador">{Contador}</h5>
        <button className="botonPag" onClick={aumentar}>
          Siguiente
        </button>
      </div><br/>
      <FooterApp/>
</div>
  );
};

export default Personajes;