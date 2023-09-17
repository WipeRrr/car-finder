import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
// import Spinner from 'utils/Spinner';


export default function SharedLayout() {
  return (

    <>
      <Header />
      <main>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  
  );
}
