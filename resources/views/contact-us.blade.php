@extends('layouts.web')

@push('title')
    Contact Us
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner auth-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">
                        Contact Us
                    </h1>
                    <p data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100" data-aos-easing="ease-in-sine"
                        data-aos-once="true">
                        Email or call us. We'd love to hear from you
                    </p>
                    <div class="ab-icon-text" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="200"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <span><i class="fa fa-envelope"></i></span>
                        <p>
                            <a href="mailto:myemail@uom.com">myemail@uom.com</a>
                        </p>
                    </div>
                    <div class="ab-icon-text" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="300"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <span><i class="fa fa-phone"></i></span>
                        <p>
                            <a href="tel:01234556789">01234556789</a>
                        </p>
                    </div>
                    <div class="ab-icon-text" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="400"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <span><i class="fa fa-map-pin"></i> </span>
                        <p>7 Perry Road (Park Row), Bristol, <br />United Kingdom</p>
                    </div>
                </div>
                <div class="col-md-5 ab-content-right">
                    <!-- Card Login -->
                    <div class="card-login" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="400"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <!-- CL Head -->
                        <div class="cl-head">
                            <img src="images/contact/contact-icon.png" alt="Contact" />
                            <h2 class="h6 fw-500">Contact Us</h2>
                        </div>
                        <!--/ CL Head -->
                        <!-- CL Body -->
                        <div class="cl-body">
                            <p>Our friendly team would love to hear from you.</p>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="firstName" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="firstName"
                                            placeholder="First Name" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="lastName" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="you@company.com" />
                            </div>

                            <div class="mb-3">
                                <label for="phoneNumber" class="form-label">Phone number</label>
                                <input type="tel" class="form-control" id="phoneNumber"
                                    placeholder="+1 (555) 000-0000" />
                            </div>

                            <div class="mb-4">
                                <div class="mb-3">
                                    <label for="messageTextarea" class="form-label">Message</label>
                                    <textarea class="form-control" id="messageTextarea" rows="3"></textarea>
                                </div>
                            </div>

                            <div class="mb-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="rememberMe" />
                                    <label class="form-check-label" for="rememberMe">
                                        You agree to our friendly <a href="coming-soon">privacy policy</a>.
                                    </label>
                                </div>
                            </div>

                            <a href="javascript:void(0)" class="btn btn-primary d-block">Send</a>
                        </div>
                        <!--/ CL Body -->
                    </div>
                    <!--/ Card Login -->
                </div>
            </div>
        </div>
    </div>
    <!--/ Main Banner -->

    <!-- CTA Wrap -->
    <div class="cta-wrap" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300" data-aos-easing="ease-in-sine"
        data-aos-once="true">
        <div class="container">
            <!-- Call to Action -->
            <div class="call-to-action">
                <img src="images/cta-img.png" alt="Cta Img" width="120" height="56" />
                <h2 class="h5 fw-500">Still have questions?</h2>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <a href="contact-us" class="btn btn-primary">Get in touch</a>
            </div>
            <!--/ Call to Action -->
        </div>
    </div>
    <!--/ CTA Wrap -->
@endsection
