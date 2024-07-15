import React from "react";

const Footer = () => {
  return (
    <>
      <footer className='mb-0 text-center'>
        <div className='d-flex align-items-center justify-content-center pb-5'>
          <div className='col-md-6'>
            <p className='mt-3'>
              Connect with developer:
              <a
                className='text-dark fs-4 mx-2'
                href='https://www.linkedin.com/in/anas-naeem-832229246/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-linkedin'></i>
              </a>
              <a
                className='text-dark fs-4 mx-2'
                href='https://github.com/anasnaeem80'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-github'></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
