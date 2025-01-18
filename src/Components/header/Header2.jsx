import { Container, IconButton, InputBase, ListItem, Stack, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled,  useTheme } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';


const Search = styled('div')(({ theme }) => ({
  flexGrow:.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border:"1px solid #777",
  "&:hover":{
    border:"1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '260px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '330px',
  },
  [theme.breakpoints.down('sm')]: {
    
    width: '160px',
    fontSize:'10px',
     
    
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:"#777"
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
 
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const options = [
  'All Categories',
  'CAR',
  'Clothes',
  'Electronics'
  
];

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
  const theme = useTheme()
  return  <>
  <Container sx={{my:3,display:"flex",justifyContent:"space-between"}}>
    <Stack alignItems={"center"}>
      <ShoppingCartIcon/>
      <Typography>E-commerce</Typography>
    </Stack>
    <Search 
    sx={{
      borderRadius:"22px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
       
    }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <div>
      <List
        component="nav"
        aria-label="Device settings"
        // @ts-ignore
        sx={{bgcolor:theme.palette.myColor.main ,
           borderBottomRightRadius:"22px",
           borderTopRightRadius:"22px",
           p:0,

          }}
      >
        <ListItem
         
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            sx={{
              width: 90,
              textAlign:"center",
              "&:hover":{cursor:"pointer"}
            }}
            secondary={options[selectedIndex]}
          />
          <ExpandMore sx={{fontSize:"16px"}}/>
        </ListItem>
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
            sx={{fontSize:"13px"}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
    </Search>
    <Stack direction={"row"} alignItems={"center"}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <IconButton >
      <PersonOutlineOutlinedIcon/>
      </IconButton>
    </Stack>
  </Container>
  </>
}
