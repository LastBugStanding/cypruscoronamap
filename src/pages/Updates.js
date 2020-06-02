
import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'
import UpdateCard  from '../component/UpdateCard'

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

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category : this.state.category })
    };
    const response = await fetch('https://curecovid19.in/readings/updates/get_updates', requestOptions); /* burada ki link değişirse çalışmaz çünkü bu da options olarak istek atıyor. büyük ihtimalle CORS kullanıyor */
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
  }

  render() {

          return(
              <Layout>

              <Helmet>
                <title>Updates | curecovid19</title>
                <meta name="description" content="COVID-19 Hakkında Haberler ve Güncellemeler | News and Updates about COVID-19"  data-react-helmet="true" />
                <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
              </Helmet>

                  <div className="content-w"><div className="content-i"><div className="content-box pt-0">
                    <div className="row">
                      <div className="col-12 col-xxl-12">
                        <div className="element-wrapper compact pt-4">
                          <div className="element-actions d-sm-block">
                          <form className="form-inline justify-content-sm-end">
                            <label className="smaller" htmlFor="">Categories</label>
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

                          <div className="element-box-tp">
                            {this.state.updateData.updates.map(element=><UpdateCard data={element} key={element.id}/>)}

                            <a className="centered-load-more-link" href="https://google.com" target="_blank">
                                <span style={{textDecoration: "underline"}}>Reklam haber sitesi</span>
                            </a>
                          </div>
                        </div>
                      </div>

                    
                  </div>
                  </div></div></div>
              </Layout>
    )
  }
}
