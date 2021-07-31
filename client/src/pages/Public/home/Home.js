import React,{Component} from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../../common/movieData';
import { ImageList,ImageListItem,ImageListItemBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    body:{
        paddingTop: 100
    },
    MoviesHeading: {
        textAlign: 'center',
        background: '#000',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
     },
     title: {
        color: theme.palette.primary.light,
     }
 });


 class Home extends Component{

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres:[],
            artists:[],
        };
    }

    movieNameChangeHandler = event => {
        this.setState({movieName: event.target.value});
    }

    genreSelectHandler = event => {
        this.setState({genres: event.target.value});
    }

    artistSelectHandler = event => {
        this.setState({artists: event.target.value});
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <div className={classes.body}>
                <div className={classes.MoviesHeading}>
                    <b>Movies</b>
                </div>
                <div className="flex-container">
                </div>
                        <ImageList cellHeight={320} cols={6} className={classes.gridListMain}>
                            {moviesData.map(movie => (
                                <ImageListItem className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <Link to={`movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <ImageListItemBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                    </Link>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    {/* <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                <Typography className={classes.title} color="textSecondary">
                                    FIND MOVIES BY:
                                </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName"> Movie Name </InputLabel>
                                    <Input id="movieName" onChange={this.movieNameChangeHandler}></Input>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-choice"> Genres </InputLabel>
                                    <Select
                                    multiple
                                    input={<Input id="select-multiple-choice"></Input>}
                                    renderValue={selected => selected.join(',')}
                                    value={this.state.genres}
                                    onChange={this.genreSelectHandler}>
                                        <MenuItem value="0">None
                                        </MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key = {genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1}></Checkbox>
                                                <ListItemText primary={genre.name}></ListItemText>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-choice"> Artists </InputLabel>
                                    <Select
                                    multiple
                                    input={<Input id="select-multiple-choice"></Input>}
                                    renderValue={selected => selected.join(',')}
                                    value={this.state.artists}
                                    onChange={this.artistSelectHandler}>
                                        <MenuItem value="0">None
                                        </MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key = {artist.id} value={artist.first_name +' ' +artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name +' '+ artist.last_name) > -1}></Checkbox>
                                                <ListItemText primary={artist.first_name + ' ' + artist.last_name}></ListItemText>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                    id="releaseStartDate"
                                    label="Release Start Date"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{shrink:true}}>
                                    </TextField>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                    id="releaseEndDate"
                                    label="Release End Date"
                                    type="date"
                                    defaultValue=""
                                    InputLabelProps={{shrink:true}}>
                                    </TextField>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                <Button variant="contained" color="primary">Apply</Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div> */}
                </div>
            </div>
        )

        }
    }

export default withStyles(styles)(Home);