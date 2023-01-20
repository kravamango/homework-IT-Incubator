import React from 'react'
import s from './Error404.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Error404() {
    return (
        <div>


            <section className={s.page404}>
                <div className={"container"}>
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-12 col-sm-offset-1  text-center">
                                <div className={s.fourZeroFourBg}>
                                    <h1 className={s.textCenter}>404</h1>


                                </div>

                                <div className={s.contantBox404}>
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <a href="" className={s.link404}>Go to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Error404
