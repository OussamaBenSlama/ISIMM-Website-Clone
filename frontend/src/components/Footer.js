import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo_footer from '../images/logo_footer.png';


export default function Footer() {
  return (


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 d-flex flex-column align-items-center'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Isimm
              </h6> */}
              <img
        src={logo_footer}
        className="img-fluid "
        alt="Footer Logo"
        style={{ width: '120px', height: 'auto',marginBottom:'10px' }} // Adjust the width as needed
      />
              <p>
                 Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Institut</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Presentation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Association
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Consultation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Partenariat
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Entreprise</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Etudiant
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                offre de stage
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Entreprise pour etudiants
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Etudiants pour entreprise
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Avenue de la Corniche, Monastir 5000 
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Isimm@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +216 70 856 243
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +216 78 526 358 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <span className='text-reset fw-bold'>
          Oussama Ben Slama & Maha Azouzi
        </span>
      </div>
    </MDBFooter>
  );
}