import React from 'react';

interface Props {
  params: { id: string; photoId: string };
}

const UserPhoto = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      User: {id} | UserPhoto Id: {photoId}
    </div>
  );
};

export default UserPhoto;
