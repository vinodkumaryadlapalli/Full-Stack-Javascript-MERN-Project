import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
 
  margin: 30px 0 0 30px;
  width: 95%;
`;
{/*Here i am adding styling to the Thead*/}
const THead = styled(TableRow)`
     & > th {
    font-size: 20px;
    margin:2px;
    background: #7155a1;
    color: #302f30;
    
  }
`;
{/*Here i am chaniging the fontsize of the table row*/}
const TRow = styled(TableRow)`
  & > td {
  font-size: 19px;
  }
`;
{/*Here we are declaring variable type and assigning functons to it*/}
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>LAST NAME</TableCell>
          <TableCell>FIRST NAME</TableCell>
          <TableCell>DATE OF BIRTH</TableCell>
          <TableCell>ADDRESS1</TableCell>
          <TableCell>ADDRESS2</TableCell>
          <TableCell>CITY</TableCell>
          <TableCell>POSTAL CODE</TableCell>
          <TableCell>COUNTRY</TableCell>
          <TableCell>PHONE-NUMBER</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>USER NOTES</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.lastname}</TableCell>
            <TableCell>{user.firstname}</TableCell>
            <TableCell>{user.dob}</TableCell>
            <TableCell>{user.address1}</TableCell>
            <TableCell>{user.address2}</TableCell>
            <TableCell>{user.city}</TableCell>
            <TableCell>{user.postalcode}</TableCell>
            <TableCell>{user.country}</TableCell>
            <TableCell>{user.phonenumber}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.usernotes}</TableCell>
            <TableCell>
              <Button
                color="success"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
            
              <Button
                
                color="warning"
                variant="contained"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
