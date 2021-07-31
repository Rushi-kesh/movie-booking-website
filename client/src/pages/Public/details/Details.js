import React, { Component } from 'react';
import moviesData from '../../../common/movieData';
import './Details.css'
import { Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [
                {
                   id: 1,
                   stateId: "star1",
                   color: "black"
                },
                {
                   id: 2,
                   stateId: "star2",
                   color: "black"
                },
                {
                   id: 3,
                   stateId: "star3",
                   color: "black"
                },
                {
                   id: 4,
                   stateId: "star4",
                   color: "black"
                },
                {
                   id: 5,
                   stateId: "star5",
                   color: "black"
                }
             ]
        }
    }

    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.match.params.id;
        })[0];
        this.setState({ currentState });
    }


    starClickHandler = (id) => {
        let staricons = [];

        for(let star of this.state.starIcons) {
            if(star.id<=id) {
                star.color="yellow";
            } else {
                star.color="black";
            }
            staricons.push(star);
        }
        this.setState({starIcons:staricons});
    }

    render() {
        let movie = this.state.movie;
        let opts = {
            height: "300",
            width: "700",
            playerVars:{
                autoplay: 1
            }
        };
        return (
            <div className = "body">
            <div className="details">
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img alt="poster" src={movie.poster_url}></img>
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title}</Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Genre: </span><span>{movie.genres.join(",")}</span></Typography>
                            <Typography><span className="bold"> Duration: </span><span>{movie.duration}</span></Typography>
                            <Typography><span className="bold"> Release Date: </span><span>{new Date(movie.release_date).toDateString()}}</span></Typography>
                            <Typography><span className="bold"> Rating: </span><span>{movie.critics_rating}</span></Typography>
                            <Typography><span className="bold"> Plot: <a href={movie.wiki_url}> Wiki Link </a></span><span>{movie.storyline}</span></Typography>
                            <Typography className="trailerContainer"><span className="bold">Trailer:</span></Typography>
                            <YouTube
                            videoId={movie.trailer_url.split("?v=")[1]}
                            opts={opts}
                            onReady={this._onReady}
                            ></YouTube>
                        </div>
                    </div>
                    <div className="rightDetails">
                        <Typography>
                            <span className="bold">Artists:</span>
                        </Typography>
                        <GridList cols={2}>
                            {movie.artists.map(artist => (
                                <GridListTile><img alt="profile" src={artist.profile_url}></img>
                                <a href={artist.wiki_url} target="noopener noreferrer">
                                <GridListTileBar title={artist.first_name + " " + artist.last_name}></GridListTileBar>
                                </a>
                                </GridListTile>
                            ))}
                        </GridList>
                        <br></br>
                        <center>
                        <Link to={`/movie/booking/`+movie.id}>
                            <Button variant="contained" color="primary">
                            Book Show
                            </Button>
                        </Link>
                        </center>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Details;