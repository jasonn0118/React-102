import React, { Component } from 'react';
import { Loader } from '.';
import * as WinesService from '../services/Wines';
import {Wine, CommentModal } from '.';


export class WinePage extends Component{
    state = {
      loading: false,
      selectedWine: null,
      commentModalOpen: false,
    }
  
    componentDidMount(){
      const id = this.props.match.params.WineId;
      this.setState({loading:true},()=>{
        WinesService.fetchWine(id).then(wine=>{
          this.setState({
            loading:false,
            selectedWine: wine,
          });
        });
      });
    }
    closeCommentModal = () => {
      this.setState({ commentModalOpen: false });
    };
  
    openCommentModal = () => {
      this.setState({ commentModalOpen: true });
    };
  
    render() {
      if (this.state.loading) {
        return (
          <div className="center-align">
            <Loader />
          </div>
        );
      }
      return (
        <div>
          <Wine
            host={WinesService.host}
            wine={this.state.selectedWine}
            openCommentModal={this.openCommentModal}
          />
          <CommentModal
            wine={this.state.selectedWine}
            isOpen={this.state.commentModalOpen}
            closeCommentModal={this.closeCommentModal}
          />
        </div>
      );
    }
  
  
  }
  