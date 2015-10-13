import React from 'react';

class Signup extends React.Component {
    render() {
        return (
            <section id="content" className="m-t-lg wrapper-md animated fadeInDown">
                <div className="container aside-xl">
                    <a className="navbar-brand block" href="index.html"><span className="h1 font-bold">Musik</span></a>
                    <section className="m-b-lg">
                        <header className="wrapper text-center">
                            <strong>Sign up to find interesting thing</strong>
                        </header>
                        <form action="index.html">
                            <div className="form-group">
                                <input placeholder="Name" className="form-control rounded input-lg text-center no-border"/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email" className="form-control rounded input-lg text-center no-border"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" className="form-control rounded input-lg text-center no-border"/>
                            </div>
                            <div className="checkbox i-checks m-b">
                                <label className="m-l">
                                    <input type="checkbox" checked=""/><i></i> Agree the <a href="#">terms and policy</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded"><i className="icon-arrow-right pull-right"></i><span className="m-r-n-lg">Sign up</span></button>
                            <div className="line line-dashed"></div>
                            <p className="text-muted text-center"><small>Already have an account?</small></p>
                            <a href="signin.html" className="btn btn-lg btn-info btn-block btn-rounded">Sign in</a>
                        </form>
                    </section>
                </div>
            </section>
        );
    }
}

export default Signup;