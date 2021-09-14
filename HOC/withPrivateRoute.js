import React from 'react';
import Router from 'next/router';
import Cookies from 'cookies'
import JsCookie from 'js-cookie'

// eslint-disable-next-line import/no-anonymous-default-export
export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = {}
    if(context.req){
      const cookies = new Cookies(context.req, context.res)
      userAuth.token = cookies.get('token')
    }
    // else{
    //   userAuth.token = JsCookie.get('token')
    // }

    // Are you an authorized user or not?
    if (!userAuth?.token) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: '/login',
        });
        context.res?.end();
      } 
      // else {
      //   Router.replace('/login');
      // }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};