import euContribuinte from '../../assets/euContribuinte.png';
import iCer from '../../assets/iCer.png';

export type Project = {
  name: string;
  description: string;
  photo: string;
  link?: string;
  status: 'UNDER DEVELOPMENT' | 'FINISHED';
};

export default [
  {
    name: 'iCer- Gerenciamento de Clínica',
    description: 'teste',
    photo: iCer,
    link: 'https://www.figma.com/file/1i1alDNmgDXGjme3mgWiPX/HACKATHON?node-id=0%3A1&t=88rC3t9LmhGmFvbk-0',
    status: 'UNDER DEVELOPMENT',
  },
  {
    name: 'euContribuinte',
    description: 'teste',
    photo: euContribuinte,
    link: 'https://www.figma.com/file/wTYOzEbj1CDQjFgNxZPm29/ACE-6?node-id=0%3A1&t=pciCrcR3noboiRv7-0',
    status: 'FINISHED',
  },
] as Project[];
