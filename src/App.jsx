import Header2 from "./Components/header/Header2"
import Header1 from "./Components/header/Header1"
import Header3 from "./Components/header/Header3"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

 
 
 

function App() {
  const [theme, colorMode] = useMode();
  

  return (
    <>
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
    <CssBaseline />
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <Header1/>
      <Header2/>
      <Header3/>
      </ThemeProvider>
     
      
    </ColorModeContext.Provider>
      
    </>
  )
}

export default App
