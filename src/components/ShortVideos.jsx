import { Container } from "@mui/material"
import  '../styles/Shorts.css'
import FlexBox from "./mui/FlexBox"
import ShortVideo from "./ShortVideo"


export default () => {
    return (
        <main className="shortVideos-page">
            <Container className="shorts-content">

                    <FlexBox className="shorts">
                        <ShortVideo/>
                        <ShortVideo/>
                        <ShortVideo/>
                        <ShortVideo/>
                    </FlexBox>

            </Container>
        </main>
    )
}