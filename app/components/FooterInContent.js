import React from 'react';
import {Link} from 'react-router';

class FooterInContent extends React.Component {
  render() {
    return (
      <div className="row m-t-lg m-b-lg">
        <div className="col-sm-6">
          <div className="bg-primary wrapper-md r">
            <Link to="/">
              <span className="h4 m-b-xs block"><i className=" icon-user-follow i-lg"/> Login or Create account</span>
              <span className="text-muted">Save and share your playlist with your friends when you log in or create an account.</span>
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="bg-black wrapper-md r">
            <Link to="/">
              <span className="h4 m-b-xs block"><i className="icon-cloud-download i-lg"/> Download our app</span>
              <span className="text-muted">Get the apps for desktop and mobile to start listening music at anywhere and anytime.</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterInContent;