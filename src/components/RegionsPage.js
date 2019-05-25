import React, { Component } from 'react';
import * as WinesService from '../services/Wines';
import {Loader} from '.';
import {Regions} from '.';

export class RegionsPage extends Component{
    state={
      loading: false,
      regions:[],
  };
  
  componentDidMount(){
      this.setState({loading:true}, ()=>{
          WinesService.fetchRegions().then(regions=>{
              this.setState({
                  loading: false,
                  regions,
              });
          });
      });
  }
  
  onSelectRegion = (region)=>{
      this.props.history.push({
          pathname: `/regions/${region}`
      });
  };
  
  render(){        
      if(this.state.loading){
          return <div className="center-align"><Loader /></div>
      }
      return(
          <Regions
              onSelectRegion={this.onSelectRegion}
              regions={this.state.regions}
              region={{}} />
      );
  
  }
  } 
  