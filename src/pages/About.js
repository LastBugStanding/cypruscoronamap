import React from 'react'

import Helmet from 'react-helmet'

import Layout from '../component/Layout'
// import Navbar from '../component/NavBar'



export default function About() {
    return (<Layout>
              <Helmet>
                <title>Covid-19 Hakkında | About Covid-19</title>
                <meta name="description" content="Inforamtion regarding the coivd 19 provided by all sources."  />
                <meta name="theme-color" content="#008f68"   />

              </Helmet>

             <div className="content-box">
              <div className="row">
                  <div className="col-sm-6">

                    <div className="element-wrapper">
                      <div className="element-box">
                        <h5 className="form-header">
                            <small className="text-muted text-primary">by SnipeSec & SnipeNet</small>

                        </h5>
                        <div className="form-desc" style={{color: "#555"}}>
                        <p className="lead">

                        Küresel bir kriz ile karşılaştığımız bugünlerde, halkımıza bu yeni pandemi süresince COVID-19 Virüsü ile ilgili resmi kaynaklardan elde ettiğimiz bilgileri ulaştırmak amacı ile bu platformu kurduk. Eğer yanlış olduğunu düşündüğünüz bir bilgi ve ya görüşlerinizi bildirmek için bize <a href="mailto:info@snipenet.com">info@snipenet.com</a> e-mail adresinden ulaşabilirsiniz.</p>

                          <hr/>
                           <p className="lead"> We are facing a global crisis. <br/>

                           Our small contribution to our citizens and people who live in Cyprus as a whole, is to provide you with the up-to-date and reliable information about Covid-19 for TRNC and GCASC. If you think any information is missing or wrong, please be patient and let us know via <a href="mailto:info@snipenet.com">info@snipenet.com</a></p>
                        </div>
                        <h5 className="form-header">
                          Kaynaklar | Sources
                        </h5>

                        <div className="element-box-content">

                                 <div className="">
                                <ul>
                                <li id="ref-1"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/">Novel Coronavirus (2019-nCoV) Durum Rapoları | Situation Reports</a> </li>
                         <li id="ref-1"> <a href="https://www.who.int/">Dünya Sağlık Örgütü | World Health Organization </a> (DSÖ) | (WHO) </li>
                         <li id="ref-1"><a href="https://saglik.gov.ct.tr/">Kuzey Kıbrıs Türk Cumhuriyeti Sağlık Bakanlığı | TRNC Ministry of Health </a> - KKTC / TRNC </li>
                         <li id="ref-1"><a href="https://www.saglik.gov.tr/">Türkiye Cumhuriyeti Sağlık Bakanlığı | Republic of Turkey Ministry of Health </a> - Türkiye / Turkey</li>
                         </ul>
                        </div>

                                </div>

                        

                      </div>

                    </div>

                </div>

                 <div className="col-sm-6">

                    <div className="element-wrapper">


                      <div className="element-box">
                        <h1 className="form-header">SnipeSec Şirket Politikası</h1>
                        <h5 className="text-primary">
                          	Snipesec Bilişim ve Siber Güvenlik, kurulduğu günden beri yegâne amacı profesyonel bakış açısı ve dünya standartlarında bilişim ve siber güvenlik çözümleri sunmaktır. Şirketimiz, kurumların ihtiyaçlarına uygun olarak, düşük bütçeden en büyük projelere kadar çözümler üretmektedir. Kurum kültürümüzün temeli, uyum içinde çalışan ekip ruhu ve her iş ve projenin özenle yapılıp kontrol edilmesidir. 
                        </h5>
                        </div>
                        </div>
                        </div>
                      {/*  <div>

                            <p className="lead font-weight-bold">Q. Are you Official</p>
                            <p>A. No. <b style={{fontSize: "15px"}}>This is a Not-for-profit initiative by the alumni of </b> <b style={{backgroundColor: "#F5F5F5", fontSize: "16px", padding: "5px", borderRadius: "8px"}}>BITS Pilani</b> <b>and </b><b style={{backgroundColor: "#F5F5F5", fontSize: "16px", padding: "5px", borderRadius: "8px"}}>IIIT Hyderabad.</b></p>

                            <p className="lead font-weight-bold">Q. Is your Data Reliable</p>
                            <p>A. Yes. All the data is being collected from highly revered and valid sources like WHO, JHU and MofHWGOI who update the data regularly for public awareness.</p>

                            <p className="lead font-weight-bold">Q. What is coronavirus?</p>
                            <p>A. Coronavirus is a family of viruses that causes infection in humans and animals. In humans, the coronavirus mainly causes respiratory infections. The recently discovered coronavirus causes a disease called Covid 19. </p>

                            <p className="lead font-weight-bold">Q. What is Covid-19?</p>

                            <p>A. Covid-19 is an infectious disease caused by the recently discovered coronavirus in China.</p>

                            <p className="lead font-weight-bold">Q. What are the symptoms of Covid-19? </p>

                            <p>A. The major symptoms are dry cough, fever, difficulty in breathing and tiredness. Some people become infected without showing any symptoms. Most people (80%) recover from the diseases without any special treatment. It is the older people with a history of diabetes, blood pressure and other underlying medical problems who are at a risk of serious illness. </p>

                            <p className="lead font-weight-bold">Q. How does coronavirus spread? </p>

                            <p>A. People can get this virus from other people who are infected. The disease can spread through droplets from the nose or the mouth of the infected person. The droplets can land on the surface of an object. Touching these surfaces and then touching your face can also lead to getting infected.</p>

                            <p className="lead font-weight-bold">Q. Has any vaccine been developed to cure Covid-19?</p>

                            <p>A. Till now, no vaccine, or antiviral or antibacterial medicine has been developed to cure Covid-19. However, supportive care should be provided to the infected people to relieve the symptoms. </p>

                            <p className="lead font-weight-bold">Q. What should I do to stay protected from the virus? </p>

                            <p>A. There are a few simple things you need to take care of: </p>

                            <ol>

                                <li>Practice frequent hand washing. Wash hands with soap and water or use alcohol based hand rub. Wash hands even if they are visibly clean</li>

                                <li>Cover your nose and mouth with handkerchief/tissue while sneezing and coughing</li>

                                <li>See a doctor if you feel unwell (fever, difficult breathing and cough). While visiting doctor wear a mask/cloth to cover your mouth and nose</li>

                                <li>If you have these signs/symptoms please call State helpline number or Ministry of Health & Family Welfare’s 24X7 helpline at 011-23978046</li>

                            <li>Avoid participating in large gatherings. Stay at home!</li> </ol>

                            <p className="lead font-weight-bold">Q. Can coronavirus  spread through mosquitoes, cats or dogs? </p>

                            <p>A. Till date, there is no evidence that coronavirus can spread through these animals. </p>

                            <p className="lead font-weight-bold">Q. Can coronavirus spread in hot and humid areas?</p>

                            <p>A. Yes. The virus can very much spread in hot and humid climate.</p>

                        </div>

                      </div>

                    </div>

                </div> */}

              </div>
              </div>
    </Layout>)
}
