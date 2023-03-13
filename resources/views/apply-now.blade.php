@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner auth-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">
                        Student Portal
                    </h1>
                    <p data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100" data-aos-easing="ease-in-sine"
                        data-aos-once="true">
                        Lorem Ipsum is simply dummy text of the printing <br />
                        and typesetting industry
                    </p>
                </div>
                <div class="col-md-5 ab-content-right">
                    <!-- Card Login -->
                    <div class="card-login" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="200"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <!-- CL Head -->
                        <div class="cl-head">
                            <img src="images/contact/student.png" alt="Student" />
                            <h2 class="h6 fw-500">Student Portal</h2>
                        </div>
                        <!--/ CL Head -->
                        <!-- CL Body -->
                        <div class="cl-body">
                            <h4 class="fw-600">Log in to your account</h4>
                            <p>Welcome back! Please enter your details.</p>

                            <div class="mb-2">
                                <label for="userName" class="form-label">User Name</label>
                                <input type="email" class="form-control" id="userName"
                                    placeholder="olivia@untitledui.com" />
                            </div>

                            <div class="mb-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword" />
                            </div>

                            <div class="mb-4">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="rememberMe" />
                                            <label class="form-check-label" for="rememberMe"> Remember for 30 days </label>
                                        </div>
                                    </div>
                                    <div class="col-md-5 text-right">
                                        <a href="coming-soon" class="forgot-password">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>

                            <a href="coming-soon" class="btn btn-primary d-block">Continue</a>
                            <a href="javascript:void(0)" class="btn btn-outline-secondary d-block">
                                <img src="images/contact/google-icon.png" alt="Google Icon" />
                                <span>Sign in with Google</span>
                            </a>

                            <p class="signup-text">Don’t have an account?<a href="coming-soon" class="fw-600"> Sign
                                    up</a></p>
                        </div>
                        <!--/ CL Body -->
                    </div>
                    <!--/ Card Login -->
                </div>
            </div>
        </div>
    </div>
    <!--/ Main Banner -->

    <!-- Degree Program -->
    <div class="degree-program">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-sine" data-aos-once="true">
                        Degree Programs
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="400" data-aos-delay="100" data-aos-easing="ease-in-sine"
                        data-aos-once="true">
                        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                </div>
                <div class="col-md-6 text-right">
                    <a href="degree" class="text-white fw-600 btn-icon" data-aos="fade-up"
                        data-aos-duration="400" data-aos-easing="ease-in-sine" data-aos-once="true">
                        <span>See More</span>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <!-- Glide Carousel -->
            <div class="glide" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <!-- Img Overlay Text -->
                            <div class="img-overlay-text">
                                <img class="img-fluid" src="images/hrm.jpg" alt="hrm" width="584" height="383" />
                                <!-- Iot Content -->
                                <div class="iot-content">
                                    <h3 class="h4">HRM</h3>
                                    <p>
                                        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been.
                                    </p>
                                    <a href="/degree" class="btn btn-outline-secondary">Learn More</a>
                                </div>
                                <!--/ Iot Content -->
                            </div>
                            <!--/ Img Overlay Text -->
                        </li>

                        <li class="glide__slide">
                            <!-- Img Overlay Text -->
                            <div class="img-overlay-text">
                                <img class="img-fluid" src="images/hrm.jpg" alt="hrm" width="584"
                                    height="383" />
                                <!-- Iot Content -->
                                <div class="iot-content">
                                    <h3 class="h4">HRM</h3>
                                    <p>
                                        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been.
                                    </p>
                                    <a href="/degree" class="btn btn-outline-secondary">Learn More</a>
                                </div>
                                <!--/ Iot Content -->
                            </div>
                            <!--/ Img Overlay Text -->
                        </li>

                        <li class="glide__slide">
                            <!-- Img Overlay Text -->
                            <div class="img-overlay-text">
                                <img class="img-fluid" src="images/hrm.jpg" alt="hrm" width="584"
                                    height="383" />
                                <!-- Iot Content -->
                                <div class="iot-content">
                                    <h3 class="h4">HRM</h3>
                                    <p>
                                        lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been.
                                    </p>
                                    <a href="/degree" class="btn btn-outline-secondary">Learn More</a>
                                </div>
                                <!--/ Iot Content -->
                            </div>
                            <!--/ Img Overlay Text -->
                        </li>
                    </ul>
                </div>

                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <i class="fa fa-chevron-left"></i>
                    </button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <i class="fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <!--/ Glide Carousel -->
        </div>
    </div>
    <!--/ Degree Program -->

    <!-- Campus Life -->
    <div class="campus-life">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Campus Life
            </h2>

            <div class="row">
                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society.jpg" alt="Arts & Society" width="380"
                                height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Arts Society</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-8" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-two.jpg" alt="Arts & Society Two"
                                width="787" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Arts Society</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="/degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-three.jpg" alt="Arts & Society Three"
                                width="380" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Arts Society</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="500"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-four.jpg" alt="Arts & Society four"
                                width="380" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Arts Society</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-five.jpg" alt="Arts & Society five"
                                width="380" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Arts Society</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!--/ Campus Life -->

    <!-- Our Locations -->
    <div class="our-locations">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Our Locations
            </h2>

            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="100" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.521570173625!2d71.41253750000001!3d30.107885499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b317f7db39afd%3A0x7b2b10425df4c7bd!2sMultan%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sus!4v1677047050851!5m2!1sen!2sus"
                    width="100%" height="300" style="border: 0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
    <!--/ Our Locations -->

    <!-- Accredited -->
    <div class="startups">
        <div class="container">
            <h2 class="text-center" data-aos="fade-up" data-aos-duration="400" data-aos-delay="0"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                Globally Accredited
            </h2>

            <div class="startups-img-wrap" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div>
                    <img class="img-fluid" src="/images/accredited/hec.png" alt="Layers" />
                </div>
                <div>
                    <img class="img-fluid" src="/images/accredited/pakistan-vetrinary-medical-concil.png"
                        alt="Sisyphus" />
                </div>
                <div>
                    <img class="img-fluid" src="/images/accredited/nceac.png" alt="Circooles" />
                </div>
                <div>
                    <img class="img-fluid" src="/images/accredited/pharmacy-council-of-pakistan.png" alt="Catalog" />
                </div>
                <div>
                    <img class="img-fluid" src="/images/accredited/government-of-punjab.png" alt="Catalog" />
                </div>
            </div>
        </div>
    </div>
    <!--/ Accredited -->

@endsection
