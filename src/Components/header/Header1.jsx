import { useContext,useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
 
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'EN',
  'AR',
 
];


 
export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] =useState(null);
  const [selectedIndex, setSelectedIndex] =useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
 
  
  return <>

    <Box sx={{bgcolor:'#2B3445' , py:"4px"}}>
      <Container>
      <Stack direction="row" alignItems={"center"}>
      <Typography 
      sx={{
        mr:2,
        p:"3px 10px",
        bgcolor:"#D23F54",
        borderRadius:"12px",
        fontSize:"10px",
        fontWeight:"bold",
        color:"#fff"

      }}>
        Hot
      </Typography>
      <Typography
      sx={{
        fontSize:"10px",
        fontWeight:300 ,
        color:"#fff"
      }}
      >
        Free Express Shipping
      </Typography>
      <Box flexGrow={1}></Box>
      <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
              </IconButton>
            )}
          </div>
      <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ p:0,m:0 }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{"&:hover":{cursor:"pointer"},px:1}}
        >
          <ListItemText 
           sx={{".MuiTypography-root": {fontSize:"10px" , color:"#fff"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"16px",color:"#fff"}}/>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{fontSize:"10px" , p:"3px 10px", minHeight:"10px"}}
            key={option}
           
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
      
      <InstagramIcon
       sx={{
            fontSize:"16px",
            color:"#fff"
          }}
      />
      <FacebookIcon
        sx={{
          fontSize:"16px",
          color:"#fff",
          mx:1
        }}
      />
      <TwitterIcon
        sx={{
          fontSize:"16px",
          color:"#fff"
        }}
      />
      
      </Stack>
      </Container>

    </Box>
     
  
  </>
}
