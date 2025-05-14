import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import FlexBox from "../components/mui/FlexBox"
import Navbar from "../components/Navbar"


export default () => {
    return (
        <>
        <Header/>
          <FlexBox center={false} styles={{width:'100%'}} className="page-container">
                <Navbar/>
                <Outlet/>
          </FlexBox>

        </>
    )

}