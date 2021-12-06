import Link from 'next/link';

const ErrorPage = () => {
    return (
        < section className="page_404" >
        <div className="container">
            <div className="row">
                <div className="col-sm-12 ">
                    <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center ">404</h1>


                        </div>

                        <div className="contant_box_404">
                            <h3 className="h2">
                                Look like you&apos;re lost
                            </h3>

                            <p>the page you are looking for not avaible!</p>

                            <a href="" className="link_404">Go to Home</a>
                            <Link href="/">
                                <a className="link_404 inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                    Go to Home
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
    )
}

export default ErrorPage
