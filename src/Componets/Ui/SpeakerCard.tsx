import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Box,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SpeakerCardProps {
  name: string;
  title: string;
  organization: string;
  imageSrc: string;
  checked: boolean;
  onChange: () => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  organization,
  imageSrc,
  checked,
  onChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
        borderColor: checked ? "green" : "lightgray",
        borderWidth: "2px",
        borderStyle: "solid",
        marginBottom: "16px",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          marginRight: isMobile ? 0 : 2,
          marginBottom: isMobile ? 2 : 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={imageSrc}
          alt={name}
          style={{
            width: isMobile ? "80px" : "60px",
            height: isMobile ? "80px" : "60px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>

      <CardContent
        sx={{
          flex: 1,
          padding: isMobile ? "0" : "0 16px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#373F66",
          }}
        >
          {name}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent={isMobile ? "center" : "flex-start"}
          flexDirection={isMobile ? "column" : "row"}
          mb={isMobile ? 1 : 0}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#717693",
            }}
          >
            {title}
          </Typography>
          {!isMobile && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1, backgroundColor: "gray", height: "16px" }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#717693",
            }}
          >{organization}</Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent={isMobile ? "center" : "flex-start"}
          mt={isMobile ? 2 : 1}
        >
          <IconButton size="small" color="primary">
            <img
              src="/public/black_edit.svg"
              alt="Edit"
              style={{ width: "20px", height: "20px" }}
            />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#E4875D", ml: 1 }}>
            Edit Speaker
          </Typography>
        </Box>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          mt: isMobile ? 2 : 0,
        }}
      >
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            "&.Mui-checked": {
              color: "green",
            },
          }}
        />
      </Box>
    </Card>
  );
};

export default SpeakerCard;
