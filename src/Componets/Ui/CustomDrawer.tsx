import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface CustomDrawerProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  onClose,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          maxwidth: 600,
          width: isMobile ? "100%" : 600,
          borderTopLeftRadius:'12px',
          borderEndStartRadius:'12px'
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderBottom: "1px solid #ddd",
          background: "#F6F8F8",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            color: "#202020",
            fontWeight: "500",
          }}
        >
          Add Speaker
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: 2 }}>{children}</Box>
    </Drawer>
  );
};

export default CustomDrawer;
