import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Toaster } from 'sonner'
import { Helmet, HelmetProvider } from "react-helmet-async"
import "./global.css"
import { ThemeProvider } from "./components/Theme/theme-provider"


export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}