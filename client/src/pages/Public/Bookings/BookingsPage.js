import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import {
  getShows
} from '../../../store/actions';
import styles from './styles';

class BookingsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       shows:[],
       columns:[
        {
          field: 'id',
          headerName: 'id',
          width: 200,
          hide:true
        },
        {
          field: 'movie_name',
          headerName: 'Movie name',
          width: 200,
        },
        {
          field: 'location',
          headerName: 'Location',
          width: 200,
        },
        {
          field: 'language',
          headerName: 'Language',
          width: 200,
        },
        {
          field: 'showdate',
          headerName: 'Showdate',
          width: 200,
        },
        {
          field: 'showtime',
          headerName: 'Showtime',
          width: 200,
        },
        {
          field: 'tickets',
          headerName: 'Tickets',
          type: 'number',
          width: 110,
        },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 110,
        }
       ],
    }
  }
  
  componentDidMount() {
    const {
      match,
    } = this.props;
    this.props.getShows(match.params.id).then((shows) => {
      let tempshows = shows.map((show) => {
        show['id'] = show._id
        return show;
    });
      this.setState({shows:tempshows});
    })
    
  }

  render() {
    return (
      <div style={{ paddingTop: 100 }}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        id={Math.random()}
        rows={this.state.shows}
        columns={this.state.columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </div>
      // <Container maxWidth="xl" >
      //   <Grid container spacing={2} style={{ height: '100%' }}>
      //     <Grid item lg={9} xs={12} md={12}>
            
      //     </Grid>
      //   </Grid>
      // </Container>
    );
  }
}

BookingsPage.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getShows: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = { getShows };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(BookingsPage));
