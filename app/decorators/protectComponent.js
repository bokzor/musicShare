import React from 'react';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';

export default (ComponentToBeRendered) => {
    class ProtectedComponent extends React.Component {
        constructor(props) {
            super(props);
            // we're keeping track of the current user instance
            this.state = AuthStore.getState();
            this.onChange = this.onChange.bind(this);
        }

        componentDidMount() {
            AuthStore.listen(this.onChange);

            // returns out of method is current user already exists
            if (this.state.currentUser) return;

            let jwt = localStorage.getItem('jwt');
            let unauthorized = !this.state.currentUser && !jwt;

            // automatically authenticates the user if a JWT is found
            if (jwt) AuthActions.autoLoginUser(jwt);

            // redirect to login page is theres no current user state or any JWT
            if (unauthorized) this.context.router.transitionTo('/signin');
        }
        componentWillUnmount() {
            AuthStore.unlisten(this.onChange);
        }

        onChange(state) {
            this.setState(state);
        }

        render() {
            let s = this.state;

            // we show a loading screen initally, and based on if the current user is updated or not, we either show the contents intended to be rendered, or redirec the client to the login page.

            if (s.currentUser) {
                return <ComponentToBeRendered {...this.props} currentUser={s.currentUser} />;
            } else {
               return <div>degage</div>;
            }
        }
    }

    ProtectedComponent.contextTypes = {
        router: React.PropTypes.func
    };

    return ProtectedComponent;
}