import { useForm } from 'react-hook-form';
import { Button } from '../../../Button/Button';
import { Card } from './Card/Card';
import { SForm_form, STitle_h2 } from './EditProfile.styled';
import { InputList } from './InputList/InputList';
import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import { editProfileSchema } from '../../../../schemas/editProfileSchema';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import {
  selectIsUserLoading,
  selectUser,
  updateUserInfoThunk,
} from '../../../../redux';

export const EditProfile = ({ handleCloseModal }) => {
  const [avatar, setAvatar] = useState(null);
  const curentValues = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectIsUserLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(editProfileSchema),
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    const { name, email, password } = data;

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

    dispatch(updateUserInfoThunk(formData))
      .unwrap()
      .then(() => {
        handleCloseModal();
      });
  };
  return (
    <SForm_form onSubmit={handleSubmit(onSubmit)}>
      <STitle_h2>Edit&nbsp;&nbsp;profile</STitle_h2>
      <Card setAvatar={setAvatar} />
      <InputList
        register={register}
        errors={errors}
        current={curentValues}
        dirtyFields={dirtyFields}
      />
      <Button title={'Send'} icon={false} isLoading={isLoading} />
    </SForm_form>
  );
};
