import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export default function Links({title}) {
  return (
    <>
      <Box
        sx={{
          ":hover .show-when-hover": { display: "block" },
          ":hover ": { cursor: "pointer" },
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography>{title}</Typography>
        <ExpandMore sx={{ ml: 1, fontSize: "16px" }} />

        <Box
          className="show-when-hover"
          sx={{
            position: "absolute",
            Width: "180px",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "none",
            zIndex:2
          }}
        >
          <Paper sx={{ mt: 2 }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem>
                  <Box>
                  <ListItemButton 
                     sx={{}}
                  >
                    <ListItemText
                      primary="Dashboard"
                      sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    />
                  </ListItemButton>
                  <ListItemButton 
                     sx={{}}
                  >
                    <ListItemText
                      primary="Products"
                      sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    />
                  </ListItemButton>
                  <ListItemButton 
                     sx={{}}
                  >
                    <ListItemText
                      primary="Orders"
                      sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    />
                  </ListItemButton>
                  <ListItemButton 
                     sx={{}}
                  >
                    <ListItemText
                      primary="Profile"
                      sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    />
                  </ListItemButton>
                  </Box>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
