export default theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // height: '100vh'
  },
  grid: {
    height: '100%'
  },
  bgWrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  bg: {
    backgroundColor: theme.palette.common.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.5
  },

  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingBototm: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    margin:"0px 0px",
    paddingLeft:"300px",
    textAlign:"center",
    align:"center",
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  // form: {
  //   paddingLeft: '100px',
  // },
  title: {
    color: theme.palette.common.contrastText,
    marginTop: theme.spacing(3)
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(0.5)
  },
  fields: {
    marginTop: theme.spacing(5)
  },
  textField: {
    width: '100%',
    '& + & ': {
      marginTop: theme.spacing(2)
    }
  },
  progress: {
    display: 'block',
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  registerButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
  login: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  loginUrl: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  fieldError: {
    color: theme.palette.danger.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  submitError: {
    color: theme.palette.danger.main,
    alignText: 'center',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2)
  }
});
