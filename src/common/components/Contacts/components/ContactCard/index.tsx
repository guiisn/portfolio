import { Box, Tooltip } from "@mantine/core";
import { Contact } from "../../../../api/contacts";
import colors from "../../../../styles/colors";
import { Icon } from '@iconify/react';


export default function ContactCard({icon,label,link}: Contact) {
    return(
        <Tooltip label={`Open ${label}`}>
            <button type="button" style={{width: '6rem', height: '6rem', borderRadius: '50%', border: `1px solid ${colors.primary.main}`, display: 'flex', justifyContent: 'center', alignItems: 'center', color: colors.primary.main, backgroundColor: 'transparent', outline: 'none', cursor: 'pointer', fontSize: '3rem'}} onClick={() => window.open(link, '_blank')}>
            <Icon icon={icon} />
        </button>
        </Tooltip>
    )
}