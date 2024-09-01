import Banner from './banner';
import AddContestantIntoTable from '../modals/addContestantIntoTable'
import RegisterModal from '../modals/registerModal';
import LookUpInforModal from '../modals/lookUpInfoModal';
import { useEffect } from 'react';

const Welcom = (props) => {
  useEffect(() => {
    const handleHashChange = () => {
      if (props.newState) {
        props.newState('Welcom page: Back or forward click');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <AddContestantIntoTable />
        <RegisterModal />
        <LookUpInforModal />
      </div>
    </>
  );
}

export default Welcom;