import BodyCV from '../../components/BodyCV/BodyCV';
import HeaderCv from '../../components/HeaderCv/HeaderCv';
import dataEn from '../../data/dataEn.json';
import dataEs from '../../data/dataEs.json';
import './Home.css';
import { useLanguageContext } from '../../context/LanguageContext';

const Home = () => {

  const { language } = useLanguageContext();

  const getDataByLanguage = () => {
    switch (language) {
      case 'en':
        return dataEn;
      case 'es':
        return dataEs;
      // Agrega más casos según los idiomas que admitas
      default:
        return dataEn;
    }
  };


  return (
    <div className="container_home" id="certificate">
      <HeaderCv data={getDataByLanguage()} />
      <BodyCV data={getDataByLanguage()} />
    </div>
  );
};

export default Home;
