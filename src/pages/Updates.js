
import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'
import UpdateCard  from '../component/UpdateCard'

import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';
import {Link} from 'react-router-dom'

export default class Updates extends Component {

  constructor(props){
    super(props)
    this.state={
      updateData:{
        tags:[],
        updates:[]
      },
      category :""
    }
  }

   async componentDidMount(){

    const response = await fetch('https://raw.githubusercontent.com/LastBugStanding/covid/master/updates.json');
    const data = await response.json();
    this.setState({ updateData: data});
    
   }

    /*const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category : this.state.category })
    };
    const response = await fetch('https://curecovid19.in/readings/updates/get_updates', requestOptions); 
    const data = await response.json();
    this.setState({ updateData: data });
  }

  handleSubmit=(e) =>{
    e.preventDefault();
    console.log("value1:", e.target.value);
    var a = e.target.value;
    this.setState({
      category:(a==="ALL"?"":a)
    }, () => {console.log("value2:", this.state.category);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category : this.state.category })
    };
    fetch('https://curecovid19.in/readings/updates/get_updates', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ updateData: data }));});
  } */

  

  render() {

          return(
              <Layout>

              <Helmet>
                <title>Haberler ve Güncellemeler | News and Updates</title>
                <meta name="description" content="COVID-19 Hakkında Haberler ve Güncellemeler | News and Updates about COVID-19"  data-react-helmet="true" />
                <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
              </Helmet>




              <div className="content-w"><div className="content-i"><div className="content-box pt-0">
                <Tabs defaultIndex={3}>
                <div className="element-wrapper pb-0"><div className="element-box-tp pt-0"><div className="os-tabs-w"></div><div className="os-tabs-controls">
                <TabList className="nav nav-tabs smaller" style={{cursor:"pointer"}}>
                <Link to="/" style={{textDecoration:"none"}}><Tab className="nav-item nav-link">KKTC | TRNC</Tab></Link>
                {/* <Link to="/northcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >North Cyprus</Tab></Link>
                <Link to="/southcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >South Cyprus</Tab></Link>
                <Link to="/test" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >TEST</Tab></Link>  */}
                {/* <Link to="/analytics" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >İstatistikler | Analytics</Tab></Link> */}
                <Link to="/updates" style={{textDecoration:"none"}}><Tab className="nav-item nav-link active" >Güncellemeler | Updates</Tab></Link>
                </TabList>
                </div></div></div> </Tabs>

          </div>
          </div></div>

            <div className="element-box-tp">
            <img src="https://www.wpsitesi.com/wp-content/uploads/2016/01/reklam-ekleme.jpg" class="img-fluid" alt="#" width="500" height="150"/>
            </div>

              <div className="element-box-tp">      
                            
                            <a className="centered-load-more-link" href="https://google.com" target="_blank">   
                                <span style={{textDecoration: "underline"}}>Bu haberler ve güncellemeler size ...Reklam haber sitesi sponsorluğu ile ulaştırılmaktadır.</span>
                            </a>

                            {/* {this.state.updateData.updates.map(element=><UpdateCard data={element} key={element.id}/>)} */}
                          </div>

                  <div className="content-w"><div className="content-i"><div className="content-box pt-0">
                    <div className="row">
                      <div className="col-12 col-xxl-12">
                        <div className="element-wrapper compact pt-4">
                          <div className="element-actions d-sm-block">
                          <form className="form-inline justify-content-sm-end">
                            <label className="smaller" htmlFor="">Kategoriler | Categories</label>
                            <select className="form-control form-control-sm form-control-faded" onChange={this.handleSubmit}>
                              <option value="ALL">
                                ALL
                              </option>
                              {this.state.updateData.tags.map((element,i)=><option key={i} value={element}>
                                {element} 
                              </option>)}
                            </select>
                          </form>
                          </div>
                          <h6 className="element-header">
                            {this.state.category===""?"ALL":this.state.category}
                          </h6>
                          {this.state.updateData.updates.map(element=><UpdateCard data={element} key={element.id}/>)}
                          
                        </div>
                      </div>

                    
                  </div>
                  </div></div></div>
              </Layout>
    )
  }
}

