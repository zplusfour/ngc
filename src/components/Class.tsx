import React from 'react';
import { useParams } from 'react-router-dom';
import { config as cfg } from 'dotenv';

cfg();

export const CreateClass: React.FC = () => {
  return <div>very sad</div>
}

const Class: React.FC = () => {
  var { id } = useParams<{ id: string }>();

  return <div>ID: {id}</div>
}

export default Class;