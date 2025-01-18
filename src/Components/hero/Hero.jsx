import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
// @ts-ignore
import heroImg2 from "../../Assets/banner-16.jpg";
// @ts-ignore
import heroImg3 from "../../Assets/banner-17.jpg";
// @ts-ignore
import heroSlider1 from "../../Assets/banner-15.jpg";
// @ts-ignore
import heroSlider2 from "../../Assets/banner-25.jpg"
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const slider=[
  {text:'MEN', img: heroSlider1},
  {text:'WEMEN', img: heroSlider2},
]
export default function Hero() {
  const theme = useTheme()
  return (
    <>
      <Container sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          // loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
         {slider.map((item) => {  
           return(
            <SwiperSlide key={item.link}>
           <img
            
           src={item.img}  
           />
           <Box
            
           sx={{
             [theme.breakpoints.up('sm')]: {
                position:"absolute"  , left:'10%' , textAlign:"left"
             },
             [theme.breakpoints.down('sm')]: {
                 py:4
             },
           }}
            >
             <Typography sx={{ color: "#222", fontSize: "18px" }} variant="h3">
              LIFESTYLE COLECTION
             </Typography>
             <Typography sx={{ color: "#222",   my: 1 , fontWeight:400 , }} variant="h4">
                {item.text}
             </Typography>
             <Stack direction={'row'} alignItems={"center"}
               sx={{
                justifyContent:{xs:"center" , sm:"left"}
               }}
             >
               <Typography sx={{ color: "#333", mr:1 }} variant="h5">
                SALE UP TO
             </Typography>
             <Typography sx={{ color: "#D23F57" }} variant="h5">
               30% OFF
             </Typography>

             </Stack>
             <Button 
               sx={{
                 background:"#222",
                 py:1,
                 px:4,
                 mt:2,
                 color:"#fff",
                 "&:hover":{
                   bgcolor:"#151515"
                 }
               }}>
                 Shop Now
             </Button>
           </Box>
         </SwiperSlide>
           )
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.7%" }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={heroImg3} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "30px",
              }}
            >
              <Typography sx={{ color: "#2B3445", fontSize: "18px" }}>
                NEW ARRIVALS
              </Typography>
              <Typography sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}>
                SUMMER
              </Typography>
              <Typography sx={{ color: "#2B3445" }}>SALE 20% OFF</Typography>
              <Link
                underline="none"
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "0.4s",
                  "&:hover": { color: "#D23F57" },
                }}
              >
                Shop Now
                <ArrowForwardIosOutlinedIcon sx={{ fontSize: "14px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={heroImg2} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "30px",
              }}
            >
              <Typography sx={{ color: "#2B3445", fontSize: "18px" }}>
                GEMING 4K
              </Typography>
              <Typography sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}>
                DESKTOP &
              </Typography>
              <Typography sx={{ color: "#2B3445" }}>LAPTOP</Typography>
              <Link
                underline="none"
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "0.4s",
                  "&:hover": { color: "#D23F57" },
                }}
              >
                Shop Now
                <ArrowForwardIosOutlinedIcon sx={{ fontSize: "14px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}
