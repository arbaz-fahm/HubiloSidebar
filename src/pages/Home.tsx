import React, { useState } from "react";
import { Button, TextField, InputAdornment, Box } from "@mui/material";
import CustomDrawer from "../Componets/Ui/CustomDrawer";
import SpeakerList from "../Componets/SpeakerList";

const speakers = [
  {
    id: 1,
    name: "Eleanor Pena",
    title: "President of Sales",
    organization: "XYZ Organisation",
    imageSrc: "/public/Avatar.png",
  },
  {
    id: 2,
    name: "Esther Howard",
    title: "Marketing Coordinator",
    organization: "XYZ Organisation",
    imageSrc: "/public/Avatar.png",
  },
  {
    id: 3,
    name: "Albert Flores",
    title: "Nursing Assistant",
    organization: "XYZ Organisation",
    imageSrc: "/public/Avatar.png",
  },
  {
    id: 4,
    name: "JohnDoe",
    title: "Marketing Head",
    organization: "XYZ Organisation",
    imageSrc: "/public/Avatar.png",
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    title: "Web Designer",
    organization: "XYZ Organisation",
    imageSrc: "/public/Avatar.png",
  },
  {
    id: 6,
    name: "JohnDoe",
    title: "Marketing Head",
    organization: "XYZ Organisation",
    imageSrc: "/public/Avatar.png",
  },
];

const Home: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpeakers, setSelectedSpeakers] = useState<number[]>([]);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedSpeakers((prev) =>
      prev.includes(id)
        ? prev.filter((speakerId) => speakerId !== id)
        : [...prev, id]
    );
  };

  const filteredSpeakers = speakers.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchTerm) ||
      speaker.title.toLowerCase().includes(searchTerm) ||
      speaker.organization.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-white">
      <Button
        variant="contained"
        onClick={toggleDrawer(true)}
        sx={{
          backgroundColor: "#E4875D",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "21px",
          textTransform: "capitalize",
          color: "#FFFFFF",
          padding: "8px",
          marginLeft: "calc(120px)",
          marginTop: "calc(60px)",
          "&:hover": {
            backgroundColor: "#D1754B",
          },
        }}
      >
        Add Speaker
      </Button>

      <CustomDrawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <TextField
          placeholder="Search..."
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "#E9E9E9",
                borderWidth: "1px",
              },
              "&:hover fieldset": {
                borderColor: "#E9E9E9",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#E9E9E9",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="/public/search.svg"
                  alt="Search"
                  style={{ width: "24px", height: "24px" }}
                />
              </InputAdornment>
            ),
          }}
        />

        {/* Speaker List */}
        <Box
          sx={{
            maxHeight: "400px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            scrollbarWidth: "none",
          }}
        >
          <SpeakerList
            speakers={filteredSpeakers}
            selectedSpeakers={selectedSpeakers}
            onCheckboxChange={handleCheckboxChange}
          />
        </Box>

        {/* Sticky Panel */}
        {selectedSpeakers.length > 0 && (
          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "#FFF",
              padding: 2,
              zIndex: 1000,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <button
                onClick={() => alert(`Speakers added successfully`)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#E9E9E9",
                  color: "#8F8F8F",
                  border: "none",
                  borderRadius: "8px",
                  marginRight: "8px",
                }}
              >
                Add
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  color: "#E4875D",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight:'600'
                }}
              >
                Cancel
              </button>
            </Box>
            <button
              style={{
                padding: "8px 16px",
                color: "#E4875D",
                border: "none",
                borderRadius: "8px",
                fontWeight:'600'
              }}
            >
              Create a Speaker
            </button>
          </Box>
        )}
      </CustomDrawer>
    </div>
  );
};

export default Home;
