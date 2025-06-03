import logo from "../../assets/whiteLogo.svg";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { shades } from "../../theme";

const quickLinks = [
  { title: "About", url: "/about" },
  { title: "Content policy", url: "/policies/content-policy" },
  { title: "Terms of Use", url: "terms" },
];

const Footer = () => {
  const { pathname } = useLocation();

  if (["/", "/policies/content-policy", "/about", "/terms"].includes(pathname))
    return (
      <Box
        p="30px 5% 20px"
        backgroundColor={shades.secondary[900]}
        color="white"
      >
        {/* header logo*/}
        <Box>
          <img width="130px" style={{ color: "red" }} src={logo} alt="" />
        </Box>
        {/* content grid items*/}
        <Box
          my="50px"
          sx={{
            display: { xs: "flex", sm: "grid" },
            flexDirection: { xs: "column-reverse" },
            gap: "30px",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {/* Quick Links */}
          <Box>
            <Typography mb="10px" fontWeight="bold">
              Quick Links
            </Typography>
            {quickLinks.map((node, idx) => (
              <Link key={idx} to={node.url} target="_blank">
                <Typography mt="2px" fontSize="15px">
                  {node.title}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* About */}
          <Box>
            <Typography mb="10px" fontWeight="bold">
              About
            </Typography>
            <Typography fontSize="13px">
              DALL·E is an AI system developed by OpenAI that can create
              original, realistic images and art from a short text description.
              DALL·E was trained by learning the relationship between images and
              the text used to describe them. It uses a process called
              diffusion, which starts with a pattern of random dots and
              gradually alters that pattern towards a final output.
            </Typography>
          </Box>
        </Box>
      </Box>
    );

  return null;
};

export default Footer;
