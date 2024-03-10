import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import {CssBaseline , ThemeProvider , createTheme} from '@mui/material'
import '@fortawesome/fontawesome-free/css/all.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)

