// import React, { useState } from 'react'
// import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';

import {Link} from 'react-router-dom'

import Home from './Home'
import Layout from '../component/Layout'

import React, { Component } from 'react'

export default class CountryTabs extends Component {

    constructor(props){
        super(props)
        this.state={
            flag:false
        }
    }

    render() {
        return (
            <Layout>
            <div className="content-w"><div className="content-i"><div className="content-box pt-0">
            <Tabs defaultIndex={0}>
                <div className="element-wrapper pb-0"><div className="element-box-tp pt-0"><div className="os-tabs-w"></div><div className="os-tabs-controls">
                <TabList className="nav nav-tabs smaller" style={{cursor:"pointer"}}>
                <Link to="/" style={{textDecoration:"none"}}><Tab className="nav-item nav-link active">KKTC | TRNC</Tab></Link>
              {/*  <Link to="/northcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >North Cyprus</Tab></Link>
                <Link to="/southcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >South Cyprus</Tab></Link>
                <Link to="/test" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >Test</Tab></Link>  */}
                {/* <Link to="/analytics" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >İstatistikler | Analytics</Tab></Link> */}
                <Link to="/updates" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >Güncellemeler | Updates</Tab></Link>
                </TabList>
                </div></div></div>

                {/* <Home/>
             */}
                <TabPanel>
                    <Home/>
                </TabPanel>
                <TabPanel/>

                <TabPanel/>
            </Tabs>

          </div>
          </div></div>
        </Layout>
        )
    }
}


// export default function CountryTabs() {

//     let [flag] = useState(0);

//     return (

//     )
// }
