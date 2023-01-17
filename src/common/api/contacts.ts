export type Contact = {
  label: string;
  icon: string;
  link: string;
};

export default [
  {
    label: 'WhatsApp',
    icon: 'ic:baseline-whatsapp',
    link: 'https://api.whatsapp.com/send?phone=5582996138682&text=Olá%20Guilherme,%20visitei%20seu%20portfólio%20e%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20trabalho!%20',
  },
  {
    label: 'LinkedIn',
    icon: 'mdi:linkedin',
    link: 'https://www.linkedin.com/in/guiisn/',
  },
  {
    label: 'Instagram',
    icon: 'mdi:instagram',
    link: 'https://instagram.com/guilhermenuns?igshid=YmMyMTA2M2Y=',
  },
  {
    label: 'GitHub',
    icon: 'mdi:github',
    link: 'https://github.com/guiisn',
  },
] as Contact[];
