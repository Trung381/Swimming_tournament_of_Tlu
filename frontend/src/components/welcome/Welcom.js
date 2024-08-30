import Banner from './banner';
import AddContestantIntoTable from '../modals/addContestantIntoTable'
import RegisterModal from '../modals/registerModal';
import LookUpInforModal from '../modals/lookUpInfoModal';

const Welcom = (props) => {
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