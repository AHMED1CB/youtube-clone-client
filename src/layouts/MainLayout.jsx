import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import FlexBox from "../components/mui/FlexBox"
import Navbar from "../components/Navbar"
import { UserProvider } from "../contexts/User"


export default () => {
    return (
        <>
        <UserProvider>
            <Header/>
              <FlexBox center={false} styles={{width:'100%'}} className="page-container">
                    <Navbar/>
                    <Outlet/>
              </FlexBox>
        </UserProvider>

        </>
    )

}