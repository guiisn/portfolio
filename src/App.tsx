import { Box, MantineProvider } from '@mantine/core'
import Contacts from './common/components/Contacts'
import Experiences from './common/components/Experiences'
import Footer from './common/components/Footer'
import Home from './common/components/Home'
import Projects from './common/components/Projects'
import GlobalTheme from './common/styles/theme'
import { indexStyles } from './style'
function App() {
  const {classes} = indexStyles()

  return (
   <Box sx={{maxWidth: '100vw', display: 'flex', flexDirection: 'column'}}>
    <MantineProvider theme={GlobalTheme} >
      <Home />
      <Projects />
      <Experiences />
      <Contacts />
      <Footer />
   </MantineProvider>
   </Box>
  )
}

export default App
