import euContribuinte from '../../assets/euContribuinte.png';
import iCer from '../../assets/iCer.png';
import minhaPlaylist from '../../assets/minhaPlaylist.png';
import ruan from '../../assets/ruan.png';
import cotaCerta from '../../assets/cotaCerta.png';

export type Project = {
  name: string;
  description: string;
  photo: string;
  link?: string;
  status: 'UNDER DEVELOPMENT' | 'FINISHED';
  gitHub?: string;
};

export default [
  {
    name: 'iCer - Clinic management',
    description:
      'Web and mobile system for the management of a rehabilitation clinic, where the web system is the management part of the clinic, the registration of doctors and employees, while the mobile application is the production part of the clinic, where the procedures are actually performed.',
    photo: iCer,
    link: 'https://clinicafrontend.netlify.app/',
    status: 'UNDER DEVELOPMENT',
  },
  {
    name: 'euContribuinte',
    description:
      'Project sponsored by SEFAZ-AL, where it was necessary to develop a solution that would solve a series of problems proposed by SEFAZ itself in less than 3 days.',
    photo: euContribuinte,
    link: 'https://www.figma.com/file/1i1alDNmgDXGjme3mgWiPX/HACKATHON?node-id=0%3A1&t=88rC3t9LmhGmFvbk-0',
    status: 'FINISHED',
  },
  {
    name: 'Minha Playlist',
    description:
      'Project developed in Vite.js, with Mantine (UI library), which consisted of studying and improving Redux and React-Redux for managing user states and actions. The application consists of an embedded YouTube video player, the interesting thing is that the user can save his favorite videos as if it was a kind of paylist and the best of all is that this "playlist" is saved in LocalStorage, so if the user leaves the application and later comes back, the videos will still be saved.',
    photo: minhaPlaylist,
    link: 'https://minhaplaylist.netlify.app/',
    status: 'FINISHED',
    gitHub: 'https://github.com/guiisn/MinhaPlaylist',
  },
  {
    name: 'Guia de consulta - Dr. Ruan Sávio',
    description:
      'Project developed with the idea of ​​becoming a portfolio for a nutritionist. It was built using Vite.js and Mantine (UI library).',
    photo: ruan,
    link: 'https://ruansavio.netlify.app/',
    status: 'FINISHED',
  },
  {
    name: 'Cota Certa',
    description:
      'This project is a desktop system that was developed for a group of companies, where specifically it is to analyze and compare quotations for purchase orders where suppliers can make offers for these orders. It was developed using Node.js + Express.js, MySql database, Elelctron, Mantine and React Query.',
    photo: cotaCerta,
    link: 'https://www.figma.com/file/mLx3doFmmqtWaCnZwETLpZ/COTA-CERTA?type=design&node-id=8-29&mode=design&t=xZuOz1HnENvdphpM-0',
    status: 'FINISHED',
    gitHub: 'https://github.com/COTA-CERTA/backend',
  },
] as Project[];
