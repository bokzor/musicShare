import React from 'react';

export default (ComponentToBeRendered) => {
    class ProtectedComponent extends React.Component {
        constructor(props) {
            super(props);
            // we're keeping track of the current user instance
            this.state = { currentUser: AuthStore.getCurrentUser() };
            this._updateState = this._updateState.bind(this);
        }
        componentDidMount() {
            this._unsubscribe = AuthStore.listen(this._updateState);

            // returns out of method is current user already exists
            if (this.state.currentUser) return;

            let jwt = localStorage.getItem('jwt');
            let unauthorized = !this.state.currentUser && !jwt;

            // automatically authenticates the user if a JWT is found
            if (jwt) AuthActions.autoLoginUser(jwt);

            // redirect to login page is theres no current user state or any JWT
            if (unauthorized) this.context.router.transitionTo('/login');
        }
        componentWillUnmount() {
            this._unsubscribe();
        }
        _updateState(state) {
            // once AuthActions.autoLoginUser returns success and authenticates, the current user state is updated
            this.setState({ currentUser: state.currentUser });
        }
        render() {
            let s = this.state;

            // we show a loading screen initally, and based on if the current user is updated or not, we either show the contents intended to be rendered, or redirec the client to the login page.

            if (s.currentUser) {
                return <ComponentToBeRendered {...this.props} currentUser={s.currentUser} />;
            } else {
                return <Spinner fullScreen={true} />;
            }
        }
    }

    ProtectedComponent.contextTypes = {
        router: React.PropTypes.func
    };

    return ProtectedComponent;
}