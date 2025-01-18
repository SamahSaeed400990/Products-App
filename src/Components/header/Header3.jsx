import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WbIridescentIcon from "@mui/icons-material/WbIridescent";
import { Close, ExpandMore } from "@mui/icons-material";
import Links from "./Links";

export default function Header3() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt:5
        }}
      >
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "255px",
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.secondary,
            }}
          >
            <WindowIcon />
            <Typography
              sx={{
                padding: 0,
                mx: 1,
                textTransform: "capitalize",
              }}
            >
              Categories
            </Typography>
            <Box flexGrow={1}></Box>
            <ArrowForwardIosIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": { width: "220" },
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <WbIridescentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Biks</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ComputerOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electroincs</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ImportContactsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        {useMediaQuery('(min-width:1100px)') && (
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Links title={"Home"}/>
            <Links title={"Mega menu"}/>
            <Links title={"Full screen Menu"}/>
            <Links title={"Pages"}/>
            <Links title={"User account"}/>
            <Links title={"Vendor account"}/>
          </Stack>
        )}
        {
           useMediaQuery('(max-width:1000px)') && (
            <IconButton onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
           )
        }
        
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": { height: "100%" },
            
          }}
        >
            <Box
             
            sx={{ width: 450, mx: "auto", mt: 6, pt: 10, position: "relative"}}
          >
            <IconButton
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={toggleDrawer("top", false)}
            >
              <Close />
            </IconButton>
          {[
            {mainLink:"Home1" , subLink:["Link1","Link2","Link3"]},
            {mainLink:"Mega menu",subLink:["Link1","Link2","Link3"]},
            {mainLink:"Full screen menu",subLink:["Link1","Link2","Link3"]},
            {mainLink:"pages",subLink:["Link1","Link2","Link3"]},
            {mainLink:"User account",subLink:["Link1","Link2","Link3"]},
            {mainLink:"vendor account",subLink:["Link1","Link2","Link3"]},
            
          ].map((item) => { 
            return(
              <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: "initial" }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{item.mainLink}</Typography>
              </AccordionSummary>

              <List sx={{ py: 0, my: 0 }}>
               {item.subLink.map((link) => { 
                  return(
                  <ListItem key={link} sx={{ py: 0, my: 0 }}>
                  <ListItemButton>
                    <ListItemText primary= {link}/>
                  </ListItemButton>
                </ListItem>
                  )
                 })}
                
              </List>
            </Accordion>
            )
           })}
          </Box>
        </Drawer>
      </Container>
    </>
  );
}
