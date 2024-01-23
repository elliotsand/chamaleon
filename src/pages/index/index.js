import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import Startup_SVG from '../../assets/images/illustrator/Startup_SVG.svg';
import SEO_SVG from '../../assets/images/illustrator/SEO_SVG.svg';
import Mobile_notification_SVG from '../../assets/images/illustrator/Mobile_notification_SVG.svg';

import TinySlider from 'tiny-slider-react';
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import Navbar from '../../component/Navbar/navbar';
import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';
import CompanyLogo from '../../component/companyLogo';
import PricingOne from '../../component/pricingOne';
import GetInTuch from '../../component/getInTuch';

import * as Icon from 'react-feather';
import {FaRegEnvelope, BiBookAlt, BsCheckCircle, MdKeyboardArrowRight} from '../../assets/icons/icons'
import {feedback} from '../../data/data';

const settings = {
  container: '.tiny-two-item',
  controls: true,
  mouseDrag: true,
  loop: true,
  rewind: true,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 3000,
  navPosition: "bottom",
  controlsText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
  nav: false,
  speed: 400,
  gutter: 0,
  responsive: {
    768: {
      items: 2
    },
  },
}
export default function Index() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
  }, []);


  return (
    <div>

      <Navbar/>

      <section className="relative table w-full py-36 lg:py-44">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-7">
              <div className="me-6">
                <h4
                  className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">¡Bienvenido
                  a <span className="text-indigo-600"> Don Camaleón</span>!</h4>
                <p className="text-slate-400 text-lg max-w-xl">Descubre la experiencia única de ser parte de nuestra
                  plataforma de sorteos mensuales a
                  través de suscripciones pagadas en diferentes lugares de Perú. Sé parte de momentos
                  inolvidables y exclusivos que solo Don Camaleón puede ofrecer.</p>

                <div className="mt-6">
                  <Link to="/contact-one"
                        className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope
                    className="me-2 text-sm "/> BENEFICIOS</Link>
                  <Link to="/documentation"
                        className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2"><BiBookAlt
                    className="me-2"/> BENEFICIOS</Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <img src={Startup_SVG} alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
        <div className="container relative">
          <CompanyLogo/>
        </div>
      </section>


      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"> ¿Por qué unirse a
              Don Camaleón?</h3>
          </div>

          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-5">
              <img src={SEO_SVG} alt=""/>
            </div>
            <div className="lg:col-span-7">
              <div className="lg:ms-10">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Disfruta de
                  momentos divertidos y únicos en un ambiente
                  exclusivo y social.</h3>

                <ul className="list-none text-slate-400 mt-4 ">
                  <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/>
                    Participa en el sorteo de celulares de alta gama
                  </li>
                  <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/>
                    Gana entradas a conciertos y eventos exclusivos
                  </li>
                  <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/> Disfruta de DJ en vivo en todos nuestros eventos
                  </li>
                  <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/> Presencia de artistas invitados e influencers
                  </li>
                                 <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/> Descuentos exclusivo en la barra de tragos
                  </li>
                  <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/> Participa en juegos y actividades
                  </li>
                  <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/> Descuentos en marcas de comidas rápidas
                  </li>
                  <li className="mb-1 flex items-center"><BsCheckCircle
                    className="text-indigo-600 text-base me-2"/> Descuentos en reconocidas marcas de ropa
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-5 md:order-2 order-1">
            <div className="lg:ms-10">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow dark:shadow-gray-800">
                  <img src={Mobile_notification_SVG} alt=""/>

                  <div className="mt-8">
                    <form>
                      <div className="grid grid-cols-1">
                        <div className="mb-5">
                          <label className="form-label font-medium">Your Name : <span className="text-red-600">*</span></label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                            <input type="text"
                                   className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                   placeholder="Name" name="name" required=""/>
                          </div>
                        </div>

                        <div className="mb-5">
                          <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                            <input type="email"
                                   className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                   placeholder="Email" name="email" required=""/>
                          </div>
                        </div>

                        <div className="mb-5">
                          <label className="form-label font-medium">Enter Password : <span
                            className="text-red-600">*</span></label>
                          <div className="form-icon relative mt-2">
                            <Icon.Key className="w-4 h-4 absolute top-3 start-4"></Icon.Key>
                            <input type="password"
                                   className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                   placeholder="Password" required=""/>
                          </div>
                        </div>

                        <div className="">
                          <button
                            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Download
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 md:order-1 order-2">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Speed up your
                development <br/> with <span className="text-indigo-600">Techwind.</span></h3>
              <p className="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you
                can take a component from the Application theme and use it in the Website.</p>

              <ul className="list-none text-slate-400 mt-4">
                <li className="mb-1 flex items-center "><BsCheckCircle
                  className="text-indigo-600 text-base me-2"/> Digital Marketing Solutions for Tomorrow
                </li>
                <li className="mb-1 flex items-center "><BsCheckCircle className="text-indigo-600 text-base me-2"/> Our
                  Talented & Experienced Marketing Agency
                </li>
                <li className="mb-1 flex items-center "><BsCheckCircle
                  className="text-indigo-600 text-base me-2"/> Create your own skin to match your brand
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/page-aboutus"
                      className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Find
                  Out More <MdKeyboardArrowRight className="text-xl"/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="mb-4 text-base font-medium text-indigo-600">We believe in building each other and hence</h6>
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Work with some
              amazing partners</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything
              you need to generate awareness, drive traffic, connect.</p>
          </div>

          <div className="grid relative grid-cols-1 mt-8">
            <div className="tiny-two-item">

              <TinySlider settings={settings}>
                {feedback.map((item, index) => {
                  return (
                    <div className="tiny-slide" key={index}>
                      <div
                        className="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2">
                        <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto"
                             src={item.image} alt="" width="384" height="512"/>
                        <div className="pt-6 lg:p-6 text-center lg:text-start space-y-4">
                          <p className="text-base text-slate-400"> {item.description} </p>

                          <div>
                            <span className="text-indigo-600 block mb-1">{item.name}</span>
                            <span className="text-slate-400 text-sm dark:text-white/60 block">{item.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </TinySlider>

            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <PricingOne/>
        </div>
      </section>
      <div className="relative">
        <div
          className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold">How our <span
                  className="text-indigo-600">Techwind</span> work ?</h5>
                <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is
                  of great importance: human perception is tuned to recognize certain patterns and repetitions in
                  texts.</p>
              </div>
            </div>

            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold"> What is the main process open account ?</h5>
                <p className="text-slate-400">If the distribution of letters and 'words' is random, the reader will not
                  be distracted from making a neutral judgement on the visual impact</p>
              </div>
            </div>

            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold"> How to make unlimited data entry ?</h5>
                <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively
                  realistic so that the layout impression of the final publication is not compromised.</p>
              </div>
            </div>

            <div className="flex">
              <Icon.HelpCircle className="fea icon-ex-md text-indigo-600 me-3"></Icon.HelpCircle>
              <div className="flex-1">
                <h5 className="mb-2 text-xl font-semibold"> Is <span className="text-indigo-600">Techwind</span> safer
                  to use with my account ?</h5>
                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                  originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin.</p>
              </div>
            </div>
          </div>
        </div>

        <GetInTuch title={false}/>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-dark-footer">
          <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <Footer/>

      <CookieModal/>


    </div>
  )
}
// 1. PÁGINA DE INICIO
// Encabezado:
//   •	Logo de Don Camaleón.
// •	Texto de bienvenida: ¡Bienvenido a Don Camaleón!
// •	Descripción breve: Descubre la experiencia única de ser parte de nuestra plataforma de sorteos mensuales a través de suscripciones pagadas en diferentes lugares de Perú. Sé parte de momentos inolvidables y exclusivos que solo Don Camaleón puede ofrecer.
//   Sección de Beneficios (¿Por qué unirse a Don Camaleón?):
// •	Lista de beneficios con viñetas.
// •	Participa en el sorteo de celulares de alta gama.
// •	Gana entradas a conciertos y eventos exclusivos.
// •	Disfruta de DJ en vivo en todos nuestros eventos.
// •	Presencia de artistas invitados e influencers.
// •	Descuentos exclusivos en la barra de tragos.
// •	Participa en juegos y actividades.
// •	Descuentos en marcas de comidas rápidas.
// •	Descuentos en reconocidas marcas de ropa.
//   Cómo VAMOS A COMUNICAR EL SORTEO:
//   •	Descripción de cómo se informarán los sorteos y eventos.
// •	Mención de publicidad pagada en redes sociales y colaboración con influencers aliados.
//   Cómo PUEDO SER PARTE DE DON CAMALEÓN:
//   •	Llamado a la acción.
// •	Enlace para visitar la página de registro.
//   Descuentos Exclusivos:
//   •	Información sobre descuentos especiales con códigos proporcionados por influencers en redes sociales.
// •	Llamado a la acción.
//   Call To Action:
//   •	Llamado final invitando a la participación: ¡Te esperamos para hacer de cada evento una experiencia única e inolvidable en Don Camaleón!
//   Contáctanos (Formulario):
// •	Sección con formulario de contacto.
//   Condiciones de uso:
//   •	Información sobre cómo unirse a Don Camaleón de forma sencilla y segura.
// •	Detalles del proceso de registro.
// •	Descripción del código QR personalizado y su importancia.
// •	Pasos para el pago con Yape o Plin.
// •	Confirmación de bienvenida a Don Camaleón.
//   Footer:
// •	Información de contacto adicional.
// •	Enlaces a redes sociales.
