import styles from '../styles/pages/Dashboard.module.css';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as React from 'react';
import QuadsModal from '../modal/QuadsModal';
import TrioModal from '../modal/TrioModal';
import DuoModal from '../modal/DuoModal';

//MuI 

import Stack from '@mui/material/Stack';
import  Typography  from '@mui/material/Typography';
import Divider from '@mui/material/Divider';




const Dashboard = () => {
  const { user } = useOutletContext();

  return (
   <div>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>

      
        <Typography  align="center" color="white">
        <h2 className={styles.title}>Versenyek</h2>
         Üdvözlünk  {user?.metadata?.firstName }{' '}
            👋 Foglalj egy helyet a versenyen.  

          

        </Typography>
        <p className={styles['info-text']}> 
        </p>
        <Stack divider={<Divider orientation="vertical" color="error" flexItem />} 
        direction="row-reverse" spacing={10}
        justifyContent="center"
        >
      <QuadsModal/>
      <TrioModal/>
      <DuoModal/>
      </Stack>
      <div>

       

      </div>


      </div>
   
  );
};

export default Dashboard;
