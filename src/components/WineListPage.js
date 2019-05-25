import React, { Component } from 'react';
import {Loader} from '.';
import * as WinesService from '../services/Wines';
import {WineList} from '.';


export class WineListPage extends Component{
    state={
        loading: false,
        wines:[],
    };
  
    componentDidMount(){
      const region = this.props.match.params.regionId;
        this.setState({loading:true}, ()=>{
            WinesService.fetchWinesFrom(region).then(wines=>{
                this.setState({
                    loading: false,
                    wines,
                });
            });
        });
    }
  
    onSelectWine = id =>{
      const region = this.props.match.params.regionId;
        this.props.history.push({
          pathname: `/regions/${region}/wines/${id}`,
        });
    };
  
    render(){        
        if(this.state.loading){
            return <div className="center-align"><Loader /></div>
        }
        return(
            <WineList
                onSelectWine={this.onSelectWine}
                wines={this.state.wines}
                wine={{}} 
            />
        );
    
    }
  }