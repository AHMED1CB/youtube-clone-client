import Header from "./Header"
import FlexBox from "./mui/FlexBox"
import Navbar from "./Navbar"
import Videos from "./Videos"


export default () => {


    return (
        <>
          <Header/>
          <FlexBox center={false} styles={{width:'100%'}} className="page-container">
                <Navbar/> 
                <Videos/>
          </FlexBox>

        </>
    )

}