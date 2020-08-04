import React from 'react'
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';

import { makeStyles } from '@material-ui/core/styles';

import './dashboard.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      marginBottom: '2vh',
      marginTop: '2vh'

    },
    list:{
        marginBottom: '1vh'
    }
  }));


function Dashboard({theme}) {
    const classes = useStyles();
    const date = `${returnDay(new Date().getDay())}, ${new Date().getDate()} ${returnMonth(new Date().getMonth())} ${new Date().getFullYear()}`;

    return (
        <ThemeProvider theme={theme}>
            <div className = "dashboard">

                <div>
                    <Typography className={classes.title} variant="OVERLINE" color='primary'>
                            {date}
                    </Typography>
                    
                    <div className="top">
                        <Typography className={classes.title} variant="h3" color='primary'>
                            Pied Paper
                        </Typography>
                    </div>
                    

                    <div className= "smallbar">
                        <Typography className={classes.title} variant="h5" color='primary'>
                            Truth-based news aggregator
                        </Typography>
                    </div>

                    <div className= "smallbar">
                        <Typography className={classes.list} variant="subtitle2" color='primary'>
                            General
                        </Typography>
                        <Typography className={classes.list} variant="subtitle2" color='primary'>
                            World
                        </Typography>

                        <Typography className={classes.list} variant="subtitle2" color='primary'>
                            Business
                        </Typography>
                        <Typography className={classes.list} variant="subtitle2" color='primary'>
                            Entertainment
                        </Typography>
                        <Typography className={classes.list} variant="subtitle2" color='primary'>
                            Covid
                        </Typography>
                    </div>
                </div>
                

                <div className= "info">
                     <Typography className={classes.info} variant="subtitle1" color='primary'>
                          About
                      </Typography>


                      <Typography className={classes.info} variant="subtitle1" color='primary'>
                          Team
                      </Typography>
                </div>

            </div>
        </ThemeProvider>
    )
}

function returnDay(day){
    switch (day){
      case 0: return "Sunday";
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      default: return;
    }
  }
  
  function returnMonth(month){
    switch (month){
      case 0: return "January";
      case 1: return "February";
      case 2: return "March";
      case 3: return "April";
      case 4: return "May";
      case 5: return "June";
      case 6: return "July";
      case 7: return "August";
      case 8: return "September";
      case 9: return "October";
      case 10: return "November";
      case 11: return "December";
      default: return;
    }
  }

export default Dashboard
