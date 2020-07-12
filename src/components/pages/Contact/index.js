import React, { Component } from 'react';
import "./style.css";
export default class Contact extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please reach out if you would like to get in contact!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in:
                  {siteData.linkedinId}
                  <br/>
                    Twitter:
                  {siteData.twitterId}  
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}