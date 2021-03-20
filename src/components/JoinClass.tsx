import React from 'react';
import { Container, Input, TextField } from '@material-ui/core';

export const Redirect = (url: string) => {return window.location.href = `/class/join/${url}`};

const JoinClass: React.FC = () => {
  const [id, setId] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Redirect(id);
  }

  return (
    <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField name="roomId" id="roomId" label="Room ID" variant="filled" onChange={e => setId(e.target.value)}/><br />
        <Input type="submit" value="Submit"/>
      </form>
    </Container>
  )
}

export default JoinClass;