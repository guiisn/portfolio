import { Badge, Box, Button, Paper, Title } from "@mantine/core";
import { Project } from "../../../../api/projects";
import { useStyles } from "./style";


export default function ProjectCard({photo, status, name}: Project) {
    const {classes} = useStyles()

    return(
        <Paper shadow='xl' className={classes.card} radius='lg'>
            <Box sx={{width: '22rem'}}>
                <img src={photo} alt="" style={{width: '100%'}} />
            </Box>
            <Box sx={{display: 'flex', flexDirection: "column",alignItems: 'flex-start', width: '100%', gap: '1rem'}}>
                <Badge sx={status === 'FINISHED' ? {backgroundColor: 'green', color: 'white'} : {backgroundColor: 'red', color: 'white'}}>
                    {status}
                </Badge>
                <Title sx={{fontWeight: 600, fontSize: '1.5rem'}}>
                    {name}
                </Title>
                <Button 
                variant="filled" 
                color={'portfolioBlue.0'} 
                radius='lg' 
                fullWidth
                className={classes.button}
                >
                    More infos
                </Button>
            </Box>
        </Paper>
    )
}