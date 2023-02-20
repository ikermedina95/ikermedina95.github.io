import { Container } from "react-bootstrap";
import Banner from "../components/banner/banner";
import TwoColumns from "../components/columns/two-columns/two-columns";
import ThreeColumns from "../components/columns/three-columns/three-columns";
import Title from "../components/base/title/title";
import OneColumn from "../components/columns/one-column/one-column";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <div className="row justify-content-lg-center">
          <div className="col-lg-10">
            <Title id="nosotros" level="2" class="text-uppercase" content="CIRAT R.P.B.I." />
            <TwoColumns />
            <OneColumn 
              class="bg-light pb-4 pb-lg-10"
              titleLevel="2" 
              titleClass="mt-lg-10"
              titleContent="¿Qué es R.P.B.I?" 
              textContent="<p>Son aquellos materiales generados durante los servicios de atención médica que contengan agentes biológico-infecciosos según son definidos en esta Norma (NOM-087), y que puedan causar efectos nocivos a la salud y al ambiente.</p>"/>
            <Title id="permisos" evel="2" class="text-uppercase" content="Autorizaciones" />
            <ThreeColumns 
              class=" mb-4 mb-lg-10"
              content={{
                column1: {
                  keyIcon: 0,
                  icon: "doc",
                  width: "128",
                  keyTitle: 1,
                  title: "Acopio de Residuos RPBI Autorizado por Semarnat",
                  class: "text-center text-lg-left w-75 w-lg-100 mx-auto my-2"
                },
                column2: {
                  keyIcon: 2,
                  icon: "truck",
                  width: "128",
                  keyTitle: 3,
                  title: "Autorizado para Transportar Residuos RPBI",
                  class: "text-center text-lg-left w-75 w-lg-100 mx-auto my-2"
                },
                column3: {
                  keyIcon: 4,
                  icon: "logoRPBI",
                  width: "128",
                  keyTitle: 5,
                  title: "Disposición Final de los Residuos RPBI",
                  class: "text-center text-lg-left w-75 w-lg-100 mx-auto my-2"
                }
            }} />
            <OneColumn 
              class="bg-primary pb-4 pb-lg-10"
              titleLevel="2" 
              titleClass="mt-lg-10 text-white"
              titleContent="NOM-087-ECOL-SSA1-2002" 
              textContent="<p class='text-white'>La presente <a class='text-decoration-underline text-white' href='http://www.salud.gob.mx/unidades/cdi/nom/087ecolssa.html'>Norma Oficial Mexicana</a> establece la clasificación de los residuos peligrosos biológico-infecciosos así como las especificaciones para su manejo.</p>
              <p class='text-white'>Esta Norma Oficial Mexicana es de observancia obligatoria para los establecimientos que generen residuos peligrosos biológico-infecciosos y los prestadores de servicios
              a terceros que tengan relación directa con los mismos.</p>"
            />
            <Title id="clientes" level="2" class="text-uppercase" content="Rangos de Generadores" />
            <ThreeColumns content={{
              column1: {
                keyIcon: 6,
                icon: "circle1",
                width: "220",
                keyTitle: 7,
                title: false,
                keyText: 8,
                text: "<div class='custom-list'><p><b>Aplican:</b></p><ul><li>U. Hospitalarias: 1 a 5 camas</li><li>1 a 25 kg Mensuales</li><li>Laboratorios: 1 a 50 muestras diarias</li></ul></div>",
              },
              column2: {
                keyIcon: 9,
                icon: "circle2",
                width: "220",
                keyTitle: 10,
                title: false,
                keyText: 11,
                text: "<div class='custom-list'><p><b>Aplican:</b></p><ul><li>U. Hospitalarias: 6 a 60 camas</li><li>25 a 99 kg Mensuales</li><li>Laboratorios: 51 a 200 muestras diarias</li></ul></div>"
              },
              column3: {
                keyIcon: 12,
                icon: "circle3",
                width: "220",
                keyTitle: 13,
                title: false,
                keyText: 14,
                text: "<div class='custom-list'><p><b>Aplican:</b></p><ul><li>U. Hospitalarias: 60 camas o más</li><li>100kg o más Mensuales</li><li>Laboratorios: 200 muestras o más diarias</li></ul></div>"
              }
            }} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home;