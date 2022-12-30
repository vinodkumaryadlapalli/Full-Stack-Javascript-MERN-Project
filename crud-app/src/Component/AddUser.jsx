import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

{/* Here i am declaring the user names */}
const initialValue = {
    lastname: '',
    firstname: '',
    dob: '',
    address1: '',
    address2:'',
    city:'',
    postalcode:'',
    country:'',
    phonenumber:'',
    email:'',
    usernotes:''
,
}


const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
        background: #747552;
        border-radius: 20%;
`;
 
{/*Here i am declaring the const variable and assigning function values to it */}
const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const {lastname,firstname, dob,address1,address2,city,postalcode,country,phonenumber,email,usernotes } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    {/* Her i am entering input values in to the container layout */}
    return (
        <Container >
            <Typography variant="h5" text-align="center">ENTER DETAILS</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstname' value={firstname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dob' value={dob} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address1</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address1' value={address1} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address2</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address2' value={address2} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='postalcode' value={postalcode} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='country' value={country} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone-Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phonenumber' value={phonenumber} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">User Notes</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='usernotes' value={usernotes} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="success" onClick={() => addUserDetails()}>ADD USER</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;