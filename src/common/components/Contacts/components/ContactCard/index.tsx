import { Icon } from '@iconify/react';
import { Button, Tooltip } from '@mantine/core';
import { Contact } from '../../../../api/contacts';
import colors from '../../../../styles/colors';

export default function ContactCard({ icon, label, link }: Contact) {
  return (
    <Tooltip label={`Open ${label}`}>
      <Button
        type="button"
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          border: `1px solid ${colors.primary.main}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: colors.primary.main,
          backgroundColor: 'transparent',
          outline: 'none',
          cursor: 'pointer',
          fontSize: '2rem',
        }}
        onClick={() => window.open(link, '_blank')}
      >
        <Icon icon={icon} />
      </Button>
    </Tooltip>
  );
}
