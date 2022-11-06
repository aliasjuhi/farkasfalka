import styles from '../styles/components/Layout.module.css';
import { useSignOut, useUserId } from '@nhost/react'
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import Typography  from '@mui/material/Typography';

import { useUserData } from '@nhost/react'

import { gql, useQuery } from '@apollo/client'


import {
  ChevronDownIcon,
  HomeIcon,
  LogoutIcon,
  UserIcon,
  PlusIcon
} from '@heroicons/react/outline';
import Avatar from './Avatar';

const GET_USER_QUERY = gql`
  query GetUser($id: uuid!) {
    user(id: $id) {
      id
      email
      displayName
      metadata
      avatarUrl
    }
  }
`;




const Layout = () => {
  const id = useUserId();
  const { loading, error } = useQuery(GET_USER_QUERY, {
    variables: {id},
  });

  const user = useUserData()
  //...

 
  const { signOut } = useSignOut()
  const menuItems = [
    {
      label: 'Versenyek',
      href: '/',
      icon: HomeIcon,
    },
    
    {
      label: 'Profile',
      href: '/profile',
      icon: UserIcon,
    },
    {
      label: 'Logout',
      onClick: signOut,
      icon: LogoutIcon
    }
  ]

 
  




  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <Link to="/">
            <Typography variant="h4" color='error'> FARKAS FALKA</Typography>
          </Link>

          <Typography  align="center" variant="h4" color='error'>
        
         Üdvözlünk  {user?.metadata?.firstName }{' '}
             
        </Typography>

          <Menu as="div" className={styles.menu}>
            <Menu.Button className={styles['menu-button']}>
              <Avatar src={user?.avatarUrl} alt={user?.displayName} />
              <ChevronDownIcon />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter={styles['menu-transition-enter']}
              enterFrom={styles['menu-transition-enter-from']}
              enterTo={styles['menu-transition-enter-to']}
              leave={styles['menu-transition-leave']}
              leaveFrom={styles['menu-transition-leave-from']}
              leaveTo={styles['menu-transition-leave-to']}
            >
              <Menu.Items className={styles['menu-items-container']}>
                <div className={styles['menu-header']}>
                  <Avatar src={user?.avatarUrl} alt={user?.displayName} />
                  <div className={styles['user-details']}>
                    <span>{user?.displayName}</span>
                    <span className={styles['user-email']}>{user?.email}</span>
                  </div>
                </div>

                <div className={styles['menu-items']}>
                  {menuItems.map(({ label, href, onClick, icon: Icon }) => (
                    <div key={label} className={styles['menu-item']}>
                      <Menu.Item>
                        {href ? (
                          <Link to={href}>
                            <Icon />
                            <span>{label}</span>
                          </Link>
                        ) : (
                          <button onClick={onClick}>
                            <Icon />
                            <span>{label}</span>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles['main-container']}>
          {error ? (
            <p>Something wnt wrong.</p>
          ) : ! loading ? (
            <Outlet context={{ user }} />
          ) : null }
          
        </div>
      </main>
    </div>
  );
};

export default Layout;
