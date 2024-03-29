// import React, { useState } from 'react'
// import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';

import {Link} from 'react-router-dom'

import Global from './Global'
import Layout from '../component/Layout'

import React, { Component } from 'react'

export default class GlobalTabs extends Component {

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
                <Tabs defaultIndex={1}>
                <div className="element-wrapper pb-0"><div className="element-box-tp pt-0"><div className="os-tabs-w"></div><div className="os-tabs-controls">
                <TabList className="nav nav-tabs smaller" style={{cursor:"pointer"}}>
                <Link to="/" style={{textDecoration:"none"}}><Tab className="nav-item nav-link">KKTC | TRNC</Tab></Link>
                {/* <Link to="/northcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >North Cyprus</Tab></Link>
                <Link to="/southcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >South Cyprus</Tab></Link>
                <Link to="/test" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >TEST</Tab></Link>  */}
                {/* <Link to="/analytics" style={{textDecoration:"none"}}><Tab className="nav-item nav-link active" >İstatistikler| Analytics</Tab></Link> */}
                <Link to="/updates" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >Güncellemeler | Updates</Tab></Link>
                </TabList>
                </div></div></div>



                <TabPanel/>

                <TabPanel>
                    <Global/>
                </TabPanel>

                <TabPanel/>
            </Tabs>

          </div>
          </div></div>
        </Layout>
        )
    }
}
