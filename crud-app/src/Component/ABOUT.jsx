import { Box, Typography, styled } from "@mui/material";


const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const ABOUT = () => {
  return (
    <Header>
      <Typography variant="h4" align="center">Final FullStack JavaScript MERN Project</Typography>
      <Typography variant="h6" >Here we are managing the following data: </Typography>

      <Typography>User Last Name</Typography>
      <Typography>User First Name</Typography>
      <Typography>Date of Birth</Typography>
      <Typography>Address1</Typography>
      <Typography>Address2</Typography>
      <Typography>City</Typography>
      <Typography>Postal Code</Typography>
      <Typography>Country</Typography>
      <Typography>Phone-Number</Typography>
      <Typography>Email</Typography>
      <Typography>User Notes</Typography>
     
    <Box style={{ display: "flex" }}></Box>
    
    </Header>
  );
};

export default ABOUT;

