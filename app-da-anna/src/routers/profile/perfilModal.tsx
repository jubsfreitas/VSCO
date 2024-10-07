import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
// import { Frame, Page, Text, Title } from '../../pages/Projetos/style';
import Modal from 'react-modal';
import { Formik } from 'formik';
import Input from '../../components/input';
import Button from '../../components/button';
import { User, updateProfile } from 'firebase/auth';
import UploadImage from '../../components/UploadImage';

export interface ModalEdtProjectProps {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  user: User;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */
  overflow: hidden;
  /* overflow-y: scroll; */
  position: absolute;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 948px;
  margin-bottom: 4%;

  @media screen and (max-width: 958px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  line-height: 0%;
  color: #2D3748;
  /* margin-top: -30px; */

  @media screen and (max-width: 480px) {
  }
`;

const Text = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 0%;
  color: #1b242d;

  @media screen and (max-width: 480px) {
  }
`;

const ModalPerfil: FC<ModalEdtProjectProps> = ({ open, handleClose, user }) => {
  const [image, setImage] = React.useState<string>('');

  useEffect(() => {
    if (user?.photoURL) {
      setImage(user.photoURL);
    }
  }, [user, user.photoURL]);

  const customStyles = {
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fefefe', // Cor de fundo do modal
        border: '1px solid #ccc', // Borda do modal
        borderRadius: '10px', // Bordas arredondadas
        padding: '400px', // Espaçamento interno
        // width: '500px,'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Cor de fundo da sobreposição
    },
};

  return (
    <>
      <Modal style={customStyles} isOpen={open} onRequestClose={handleClose}>
        <Page>
          <Frame
            style={{
              display: 'flex',
              height: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Title>Meu Perfil</Title>
            <Formik
              initialValues={{
                name: user?.displayName || '',
                email: user?.email || '',
                imageURL: user?.photoURL || '',
                phoneNumber: user?.phoneNumber || '',
              }}
              onSubmit={async ({ name, imageURL, phoneNumber }) => {
                await updateProfile(user, {
                  displayName: name,
                  photoURL: image,
                });
                handleClose();
              }}
            >
              {({ values, handleChange, handleSubmit }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <UploadImage
                      path="user"
                      onImgUpload={setImage}
                      name="imageURL"
                      imgSRC={image}
                      id={user?.uid}
                      width="150px"
                      height="150px"
                      br="150px"
                    />
                    <Text>Nome</Text>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nome"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <Text>Email</Text>
                    <Input
                      type="text"
                      name="email"
                      placeholder="email"
                      value={values.email}
                    />
                    <Text>Celular</Text>
                    <Input
                      type="text"
                      name="phoneNumber"
                      placeholder="celular"
                      value={values.phoneNumber}
                    />
                    <Button type="submit">Editar</Button>
                  </form>
                );
              }}
            </Formik>
          </Frame>
        </Page>
      </Modal>
    </>
  );
};

export default ModalPerfil;
