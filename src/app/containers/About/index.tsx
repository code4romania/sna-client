import * as React from 'react';

const style = require('./style.css');

class About extends React.Component<any, any> {
  public render() {
    return (
      <div className={'container ' + style.About}>
        <div className='row'>
          <div className={'col-md-6 col-md-offset-3 ' + style.title}>
            <h2>Despre Aplicație</h2>
          </div>
        </div>

        <div className='row'>
          <div className={'col-xs-12 col-sm-12 col-md-8 col-md-offset-2 ' + style.content}>
            <p>
              Strategia Națională Anticorupție (SNA) 2016-2020, adoptată prin Hotărârea Guvernului nr. 583/2016,
              este rezultatul unui îndelungat proces de consultare, care a avut în vedere concluziile auditului
              extern independent al SNA 2012-2015. Documentul strategic preia bunele practici implementate în
              cadrul SNA 2012-2015, respectiv misiunile de evaluare și platformele de cooperare, propunându-și totodată
              să îmbunătățească și să dezvolte unele aspecte.
            </p>

            <p>
              Scopul principal al acesteia este promovarea integrității în administrația publică, prin aplicarea
              riguroasă a cadrului normativ şi instituțional de prevenire și combatere a corupției în România.
              În acest context, pentru a înțelege mai bine procedura de monitorizare a implementării strategiei și
              rezultatele acesteia, a fost construită o aplicație interactivă prin intermediul căreia este evidențiată
              evoluția indicatorilor de evaluare într-un mod clar și util publicului interesat.
            </p>

            <p>
              Aplicația utilizează date cu caracter public, menite să creeze o imagine de ansamblu prin evidențierea
              informațiilor reale referitoare la evoluția indicatorilor de referință privind fenomenul de corupție din
              țara noastră, prin prisma laturii de prevenire a acesteia. De exemplu, pot fi vizualizate informațiile
              vizând respectarea cadrului normativ consultând evoluția indicatorilor de referință evidențiați pentru
              instituțiile din administrația publică la nivel național, local sau central.
            </p>

            <p>
              Portalul SNA este un proiect dezvoltat în parteneriat cu asociația Code for Romania, organizație
              neguvernamentală independentă, neafiliată politic și apolitică. Code for Romania este un grup de peste
              500 de voluntari români din țară și din diaspora care construiesc soluții digitale pentru probleme
              sociale, cu scopul de a crește gradul de transparentizare a datelor de interes public, de încurajare și
              facilitare a comunicării între instituții și cetățeni și de a construi instrumente utile și funcționale
              pentru România.
            </p>

          </div>
        </div>
      </div>
    );
  }
}

export { About };
