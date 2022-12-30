import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

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
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

{/*Here we are declaring variable type and assigning functons to it*/}
const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { lastname, firstname, dob,address1,address2,city,postalcode,country,phonenumber,email,usernotes} = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    {/*Here  i am buiding layout using*/}
    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
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
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;