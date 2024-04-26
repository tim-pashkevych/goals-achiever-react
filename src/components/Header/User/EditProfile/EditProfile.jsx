import { useForm } from 'react-hook-form';
import { Button } from '../../../Button/Button';
import { Card } from './Card/Card';
import { SForm_form, STitle_h2 } from './EditProfile.styled';
import { InputList } from './InputList/InputList';
import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import { editProfileSchema } from '../../../../schemas/editProfileSchema';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { selectUser, updateUserInfoThunk } from '../../../../redux';

export const EditProfile = ({ handleCloseModal }) => {
  const [avatar, setAvatar] = useState(null);
  const curentValues = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(editProfileSchema) });

  const onSubmit = (data) => {
    const { name, email, password } = data;

    console.log('before');
    if (!name && !email && !password && !avatar) return;

    const formData = new FormData();
    if (curentValues.name !== name && name) {
      formData.append('name', name);
    }
    if (curentValues.email !== email && email) {
      formData.append('email', email);
    }
    if (password) {
      formData.append('password', password);
    }
    if (avatar) {
      formData.append('avatar', avatar);
    }
    for (const key of formData.keys()) {
      console.log(key);
    }
    dispatch(updateUserInfoThunk(formData))
      .unwrap()
      .then(() => {
        console.log('hello');
        handleCloseModal();
      });
    console.log('after');
  };
  return (
    <SForm_form onSubmit={handleSubmit(onSubmit)}>
      <STitle_h2>Edit profile</STitle_h2>
      <Card setAvatar={setAvatar} />
      <InputList register={register} errors={errors} current={curentValues} />
      <Button title={'Send'} icon={false} />
    </SForm_form>
  );
};
