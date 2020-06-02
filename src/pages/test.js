// import React, { useState } from 'react'
// import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';

import {Link} from 'react-router-dom'

import Global from './Global'
import Layout from '../component/Layout'

import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

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
                <Link to="/" style={{textDecoration:"none"}}><Tab className="nav-item nav-link">Cyprus</Tab></Link>
                <Link to="/northcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >North Cyprus</Tab></Link>
                <Link to="/southcyprus" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >South Cyprus</Tab></Link>
                <Link to="/test" style={{textDecoration:"none"}}><Tab className="nav-item nav-link active" >TEST</Tab></Link>
                <Link to="/analytics" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >Analytics</Tab></Link>
                <Link to="/world" style={{textDecoration:"none"}}><Tab className="nav-item nav-link" >World</Tab></Link>
                </TabList>
                </div></div></div>



                <Helmet>
                 <title>Cyprus Covid 19 Dashboard</title>
                  <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
                </Helmet>


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
