import React, { useState, useEffect, FC, useCallback } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../middlewares/firebase'
import { BtnText, Button, FileLabel, Imagem, Message } from './styles';

export const storage = getStorage(initializeApp(firebaseConfig));

type UploadImageProps = {
  name?: string;
  imgSRC?: string;
  id?: string;
  onImgUpload: (e: string) => void;
  path: string;
  width?: string;
  height?: string;
  br?: string;
  imageUser?: string | null;
  onClick?: () => void;
};

const UploadImage: FC<UploadImageProps> = ({
  imgSRC,
  onImgUpload,
  id,
  path,
  width,
  height,
  br,
  imageUser,
}) => {
  const [image, setImage] = useState<File>();
  const [imageSRC, setImageSRC] = useState<string | undefined>(imgSRC);
  const [uploadStatus, setUploadStatus] = useState<string>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImageSRC(imgSRC);
  }, [imgSRC]);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setImage(file);
      }
    },
    [],
  );

  const onButtonClick = useCallback(() => {
    inputRef.current?.focus();
    document.getElementById('file')?.click();
  }, []);

  const handleUpload = useCallback(async () => {
    if (image) {
      const storageRef = ref(storage, `images/${path}/${id}`);
      try {
        setUploadStatus('Uploading...');

        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        setImageSRC(url);
        onImgUpload(url);
        setUploadStatus('Uploaded');
      } catch (error) {
        setUploadStatus('Failed to upload');
      }
    }
  }, [image, onImgUpload, path, id]);

  useEffect(() => {
    if (image) {
      handleUpload();
    }
  }, [handleUpload, image]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2% 0 5%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <FileLabel>
          {imageUser ? (
            imageSRC ? (
              <Imagem image={imageSRC} width={width} height={height} br={br} />
            ) : (
              <Imagem image={imageUser} width={width} height={height} br={br} />
            )
          ) : (
            <Imagem image={imageSRC} width={width} height={height} br={br} />
          )}
        </FileLabel>
        <input
          ref={inputRef}
          type="file"
          id="file"
          className="file"
          onChange={handleFileChange}
          hidden
        />
        <Button type="button" onClick={onButtonClick}>
          <BtnText>Adicionar Imagem +</BtnText>
        </Button>
      </div>
      <Message>{uploadStatus}</Message>
    </div>
  );
};

export default UploadImage;
