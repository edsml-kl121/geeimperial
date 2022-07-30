// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

// export default function Contact() {


//   return (
//     <section id="contact" className="relative">
//         <footer>
//           <Container className="px-5 text-center">
//             <Row>
//                 <Col>
//                   <a
//                   href="mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!"
//                   className="inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
//                   <FaEnvelope/>
//                   </a>
//                 </Col>
//                 <Col>
//                   <a
//                   href="https://www.linkedin.com/in/kandanai/"
//                   className="ml-4 inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
//                   <FaLinkedin/>
//                   </a>
//                 </Col>
//                 <Col>
//                   <a
//                   href="https://github.com/edsml-kl121"
//                   className="ml-4 inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{backgroundColor:"#000000"}}>
//                   <FaGithub/>
//                   </a>
//                 </Col>
//               {/* </Col> */}
//             {/* </Row> */}
//             <br></br>
//             </Row>
//             <p className="m-0 text-white">Kandanai (Mew) Leenutaphong @2022</p>
//           </Container>
//           <br></br>
//         </footer>
//     </section>
//   );
// }

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4 mt-5'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-blue m-1'
            href='mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!'
            role='button'
          >
            <FaEnvelope/>
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-blue m-1'
            href='https://www.linkedin.com/in/kandanai/'
            role='button'
          >
            <FaLinkedin/>
          </MDBBtn>

          <MDBBtn
            rippleColor="blue"
            link
            floating
            size="lg"
            className='text-blue'
            href='https://github.com/edsml-kl121'
            role='button'
          >
            <FaGithub/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Copyright 2022 Kandanai Leenutaphong
        <a className='text-dark' href='https://www.kandanaileenutaphong.com/'>
          https://www.kandanaileenutaphong.com/
        </a>
      </div>
    </MDBFooter>
  );
}