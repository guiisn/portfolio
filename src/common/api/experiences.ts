export type Experience = {
  name: string;
  link?: string;
  period: string;
  office: string;
  techs?: string
};

export default [
  {
    name: 'A&M Solutions, Remote',
    link: 'https://www.aemsolutions.com.br/',
    period: '08/2021 - 11/2021',
    office: 'Frontend Developer',
    techs: "React.js, Typescript, TailwindCSS",
  },
  {
    name: 'RDS Digital, Remote',
    link: 'https://www.rdsdigital.com.br/',
    period: '11/2021 - 02/2021',
    office: 'FullStack Developer',
    techs: "React.js, Typescript, MaterialUI, Express.js, MongoDB, Docker",
  },
  {
    name: 'Mundiale, Remote',
    link: 'https://www.mundiale.com.br/',
    period: '01/2021 - 03/2022',
    office: 'FullStack Developer',
    techs: "Next.js, Typescript, MaterialUI, Express.js, MongoDB",
  },
  {
    name: 'Flatmatch, Remote',
    link: 'https://www.flatmatch.com.br/',
    period: 'Freelancer',
    office: 'Mobile Developer',
    techs: "React Native, Typescript, OAuth",
  },
  {
    name: 'Lara, Remote',
    link: 'https://parceladolara.com.br/',
    period: '05/2022 - the moment',
    office: 'Frontend Developer',
    techs: "Vite.js, Typescript, MaterialUI, GraphQL, ReactQuery",
  },
] as Experience[];
