import { Box, Title } from '@mantine/core';
import contacts, { Contact } from '../../api/contacts';
import ContactCard from './components/ContactCard';
import { useStyles } from './style';

export default function Contacts() {
  const { classes } = useStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.content}>
        <Title className={classes.title}>Contacts</Title>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {contacts.map((contact: Contact) => (
          <ContactCard
            icon={contact.icon}
            label={contact.label}
            key={contact.label}
            link={contact.link}
          />
        ))}
      </Box>
    </Box>
  );
}
