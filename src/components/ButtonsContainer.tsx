import React from 'react';
import { Button, Box } from '@material-ui/core';

const LeaveMeeting = () => {
  // TODO: Redirect to home page (later).
  return window.location.href = "/";
}

export const Tab: React.FC = () => {
  return <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>;
}

const ButtonsContainer: React.FC = () => {
  return (
    <Box style={{overflow: "hidden", position: "fixed", bottom: "20px", width: "100%", border: "3px solid #6121ff", borderRadius: "10px 10px 10px 10px", padding: "15px"}} justifyContent="center" display="flex"><Tab />
      <Button color="primary"><i className="fas fa-microphone-slash" style={{fontSize: "30px"}} title="Unmute"></i></Button><Tab />
      {/* <Button color="primary"><i className="fas fa-microphone"></i></Button> */}
      {/* <Button color="primary"><i className="fas fa-video"></i></Button> */}
      <Button color="primary"><i className="fas fa-video-slash" style={{fontSize: "30px"}} title="Play video"></i></Button><Tab />
      <Button color="primary"><i className="fas fa-share-square" style={{fontSize: "30px"}} title="Share screen"></i></Button><Tab />
      <Button color="primary"><i className="fas fa-user-friends" style={{fontSize: "30px"}} title="Participants"></i></Button><Tab />
      <Button color="primary"><i className="fas fa-comments" style={{fontSize: "30px"}} title="Chat"></i></Button><Tab />
      <Button color="primary"><i className="fas fa-cog" style={{fontSize: "30px"}} title="Settings"></i></Button><Tab />
      <Button color="primary" onClick={() => {LeaveMeeting()}}><span style={{fontSize: "30px", color: "red", border: "2px solid red", borderRadius: "10px 10px 10px 10px", padding: "5px"}} title="Leave meeting">Leave Meating</span></Button>
    </Box>
  )
}

export default ButtonsContainer;