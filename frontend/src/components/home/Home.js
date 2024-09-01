import { useEffect } from "react";


function Home(props) {
  useEffect(() => {
    const handleHashChange = () => {
      if (props.newState) {
        props.newState('Home page: Back or forward click');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <div className="home-page mt-3">
      <h1>XIN CHÀO</h1>
      <h2>HỆ THỐNG QUẢN LÝ GIẢI BƠI</h2>
      <div>
      </div>
    </div>
  );
}

export default Home;