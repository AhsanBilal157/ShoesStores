import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Paper,
    TextField,
    Button,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {


        margin: 50


    },
    paper: {

        width: 400,
        margin: '0 auto',
        textAlign: 'center',
        padding: 15,
        marginTop: 25

    },
    input: {
        width: '95%',
        marginBottom: 10,



    }
}));

function Login() {

    const classes = useStyles();
    return (<div className={classes.root} >

        <Paper elevation={3}
            className={
                classes.paper
            } >
            <h1 > Login </h1>

                <form className={
                        classes.root
                    }
                    noValidate autoComplete="off" >
                    <
                        TextField label="Enter Email"
                        className={classes.input}
                    /> <
                        TextField label="Enter Password"
                        className={classes.input}
                    />

                    

                    <br />
                    <Button variant="contained"
                    className={classes.input} style={{backgroundColor:"darkred",color:"white"}}>
                        Log In

                    </Button>


                </form>


                </Paper>






            </ div >
            );
}

            export default Login;