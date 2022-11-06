import styles from '../styles/pages/Profile.module.css';

import { useState } from 'react';

import { useOutletContext } from 'react-router-dom';
import Input from '../components/Input';

import { gql, useMutation } from '@apollo/client'
import { toast } from 'react-hot-toast'
import  Typography  from '@mui/material/Typography';

import { ThemeProvider, createTheme } from '@mui/material/styles';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const UPDATE_USER_MUTATION = gql`
  mutation ($id: uuid!, $displayName: String!, $metadata: jsonb) {
    updateUser(pk_columns: { id: $id }, _set: { displayName: $displayName, metadata: $metadata, avatarUrl: $avatarUrl }) {
      id
      displayName
      metadata
      avatarUrl
    }
  }
`;




const Profile = () => {
  const { user } = useOutletContext();

  const [Name, setFirstName] = useState(user?.metadata?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.metadata?.lastName ?? '');

  const isFirstNameDirty = Name !== user?.metadata?.firstName;
  const isLastNameDirty = lastName !== user?.metadata?.lastName;
  const isProfileFormDirty = isFirstNameDirty || isLastNameDirty;

  const [mutateUser, { loading: updatingProfile }] =
  useMutation(UPDATE_USER_MUTATION);

  const updateUserProfile = async e => {
    e.preventDefault();

    try {
      await mutateUser({
        variables: {
          id: user.id,
          displayName: `${Name} ${lastName}`.trim(),
          metadata: {
            Name,
            lastName,
          },
        },
      });
      toast.success('Updated successfully', { id: 'updateProfile' })
    } catch (error) {
      toast.error('Unable to update profile', { id: 'updateProfile' })
    }
  };

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Typography variant="h4" color="error">Profile</Typography>

      <div className={styles.container}>
        <div className={styles.info}>
        
          <p>Update your personal information.</p>
        </div>

       

        <div className={styles.card}>
          <form onSubmit={updateUserProfile} className={styles.form}>
            <div className={styles['form-fields']}>
              <div className={styles['input-group']}>
                <Input
                  type="text"
                  label="First name"
                  value={Name}
                  onChange={e => setFirstName(e.target.value)}
                  required
                  disabled={updatingProfile}
                />
                <Input
                  type="text"
                  label="Activision ID"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                  disabled={updatingProfile}
                />
              </div>
              <div className={styles['input-email-wrapper']}>
                <Input
                  type="email"
                  label="Email address"
                  value={user?.email}
                  readOnly
                  disabled={updatingProfile}
                />
              </div>
            </div>

            <div className={styles['form-footer']}>
              <button
                type="submit"
                disabled={!isProfileFormDirty || updatingProfile }
                className={styles.button}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
};

export default Profile;
