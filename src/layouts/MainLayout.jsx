import Footer from "../components/Footer"
import { MenuBar } from "../components/MenuBar"

export const MainLayout = ({children}) => {
  return (
    <>
      <MenuBar />
      { children }
      <Footer />
    </>
  )
}
