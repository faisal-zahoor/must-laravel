@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner v2 -->
    <div class="main-banner-v2">
        <div id="mainBannerIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#mainBannerIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#mainBannerIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#mainBannerIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" style="background-image: url('images/banner.jpg')">
                    <div class="container">
                        <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine"
                            data-aos-once="true">
                            Empowering <br />
                            Tomorrow's Leaders
                        </h1>
                        <p data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100"
                            data-aos-easing="ease-in-sine" data-aos-once="true">
                            We committed to provide our students the knowledge, skills, <br />
                            and resources they need to become leaders in their chosen fields.
                        </p>
                        <a href="apply-now" class="btn btn-lg btn-primary" data-aos="fade-zoom-in"
                            data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-in-sine"
                            data-aos-once="true">Apply Now</a>
                        <a href="coming-soon" class="btn btn-lg btn-outline-light" data-bs-toggle="modal"
                            data-bs-target="#watchvideoModal" data-aos="fade-zoom-in" data-aos-duration="300"
                            data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                            <i class="fa fa-play"></i>
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
                <div class="carousel-item" style="background-image: url('images/banner.jpg')">
                    <div class="container">
                        <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine"
                            data-aos-once="true">
                            Empowering <br />
                            Tomorrow's Leaders
                        </h1>
                        <p data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100"
                            data-aos-easing="ease-in-sine" data-aos-once="true">
                            We committed to provide our students the knowledge, skills, <br />
                            and resources they need to become leaders in their chosen fields.
                        </p>
                        <a href="addmissions" class="btn btn-lg btn-primary" data-aos="fade-zoom-in"
                            data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-in-sine"
                            data-aos-once="true">Apply Now</a>
                        <a href="coming-soon" class="btn btn-lg btn-outline-light" data-bs-toggle="modal"
                            data-bs-target="#watchvideoModal" data-aos="fade-zoom-in" data-aos-duration="300"
                            data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                            <i class="fa fa-play"></i>
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
                <div class="carousel-item" style="background-image: url('images/banner.jpg')">
                    <div class="container">
                        <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine"
                            data-aos-once="true">
                            Empowering <br />
                            Tomorrow's Leaders
                        </h1>
                        <p data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100"
                            data-aos-easing="ease-in-sine" data-aos-once="true">
                            We committed to provide our students the knowledge, skills, <br />
                            and resources they need to become leaders in their chosen fields.
                        </p>
                        <a href="addmissions" class="btn btn-lg btn-primary" data-aos="fade-zoom-in"
                            data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-in-sine"
                            data-aos-once="true">Apply Now</a>
                        <a href="coming-soon" class="btn btn-lg btn-outline-light" data-bs-toggle="modal"
                            data-bs-target="#watchvideoModal" data-aos="fade-zoom-in" data-aos-duration="300"
                            data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                            <i class="fa fa-play"></i>
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ Main Banner v2 -->

    <!-- How to Apply -->
    <div class="how-to-apply">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 hta-content-left" data-aos="fade-right" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <img class="img-fluid" src="images/how-to-apply.png" alt="How to apply" width="483"
                        height="368" />
                </div>
                <div class="offset-lg-1 col-lg-6 hta-content-right" data-aos="fade-left" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <h2>How To Apply</h2>
                    <p>Unlock Your Potential: Step-by-Step Guide to Applying for University Of Multan</p>
                    <a href="addmissions" class="text-primary fw-600 btn-icon">
                        <span>Apply Now</span>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!--/ How to Apply -->

    <!-- Why UOM -->
    <div class="how-to-apply">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 hta-content-left" data-aos="fade-right" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <img class="img-fluid" src="images/why-uom.png" alt="Why UOM" width="483" height="368" />
                </div>
                <div class="offset-lg-1 col-lg-6 hta-content-right" data-aos="fade-left" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <h2>Why UOM?</h2>
                    <p>
                        Our university stands out for its exceptional academic programs, supportive campus community, and
                        opportunities
                        for personal growth and development. Our faculty members are experts in their fields and committed
                        to providing
                        students with an exceptional learning experience.
                    </p>
                    <a href="about" class="text-primary fw-600 btn-icon">
                        <span>Learn More</span>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!--/ Why UOM -->

    <!-- Getting Started -->
    <div class="getting-started">
        <div class="container">
            <div class="row">
                <div class="col-md-6 gs-content-left" data-aos="fade-right" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <span class="text-primary h7 fw-500 caption">We’ve helped thousands of students</span>
                    <h2>We’re only just getting started on our journey</h2>

                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="display-1 text-primary">01</h3>
                            <h4 class="h6">Campuses</h4>
                        </div>
                        <div class="col-md-6">
                            <h3 class="display-1 text-primary">80%</h3>
                            <h4 class="h6">Employment Rate</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="display-1 text-primary">50+</h3>
                            <h4 class="h6">Degree Program</h4>
                        </div>
                        <div class="col-md-6">
                            <h3 class="display-1 text-primary">600+</h3>
                            <h4 class="h6">Faculty Members</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 gs-content-right text-right" data-aos="fade-left" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <img class="img-fluid" src="images/getting-started.jpg" alt="Getting Started" width="556"
                        height="560" />
                </div>
            </div>
        </div>
    </div>
    <!--/ Getting Started -->

    <!-- What Sets us Apart -->
    <div class="sets-us-apart">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-sine" data-aos-once="true">What Sets
                us Apart</h2>
            <p data-aos="fade-up" data-aos-duration="400" data-aos-delay="100" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Our university stands out for several reasons, but listing some of them.
            </p>

            <div class="row">
                <div class="col-md-3" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <div class="card card-rating">
                        <img src="images/set-us-apart-one.svg" alt="Set us Apart" height="120" width="114" />
                        <h3>Technol</h3>
                        <p>ogically Equipped Campus</p>
                    </div>
                </div>
                <div class="col-md-3" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <div class="card card-rating">
                        <img src="images/set-us-apart-sec.svg" alt="Set us Apart" height="120" width="114" />
                        <h3>Highly</h3>
                        <p>Qualified Faculty</p>
                    </div>
                </div>
                <div class="col-md-3" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <div class="card card-rating">
                        <img src="images/set-us-apart-sec.svg" alt="Set us Apart" height="120" width="114" />
                        <h3>ENTREPR</h3>
                        <p>ENURIAL AND FIELD ORIENTED LEARNING</p>
                    </div>
                </div>
                <div class="col-md-3" data-aos="fade-up" data-aos-duration="400" data-aos-delay="500"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <div class="card card-rating">
                        <img src="images/set-us-apart-sec.svg" alt="Set us Apart" height="120" width="114" />
                        <h3>National</h3>
                        <p>Standard Sporting Facilities</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--/ What Sets us Apart -->

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
                        See what you have, Get what you want.
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
                    <a href="/degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society.jpg" alt="Arts & Society" width="380"
                                height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Society of Media and Arts</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-8" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="/degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-two.jpg" alt="Arts & Society Two"
                                width="787" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Debating Society</h3>
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
                                <h3 class="h4">Sports</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="500"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="/degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-four.jpg" alt="Arts & Society four"
                                width="380" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Blood Donor Society </h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="/degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-five.jpg" alt="Arts & Society five"
                                width="380" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Dramatics Club</h3>
                            </div>
                            <!--/ Iot Content -->
                        </div>
                        <!--/ Img Overlay Text -->
                    </a>
                </div>

                <div class="col-md-4" data-aos="fade-up" data-aos-duration="400" data-aos-delay="600"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="/degree">
                        <!-- Img Overlay Text -->
                        <div class="img-overlay-text">
                            <span class="arrow-icon">
                                <i class="fa fa-arrow-right"></i>
                            </span>

                            <img class="img-fluid" src="images/arts-society-five.jpg" alt="Arts & Society five"
                                width="380" height="337" />
                            <!-- Iot Content -->
                            <div class="iot-content">
                                <h3 class="h4">Must Volunteers club</h3>
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

    <!-- News and Events -->
    <div class="news-events">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                News and Events
            </h2>

            <ul class="nav nav-tabs" id="newsEventsTab" role="tablist" data-aos="fade-up" data-aos-duration="400"
                data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="news-tab" data-bs-toggle="tab" data-bs-target="#news-tab-pane"
                        type="button" role="tab" aria-controls="news-tab-pane" aria-selected="true">
                        News
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="campus-tab" data-bs-toggle="tab" data-bs-target="#campus-tab-pane"
                        type="button" role="tab" aria-controls="campus-tab-pane" aria-selected="false">
                        Campus News
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="event-tab" data-bs-toggle="tab" data-bs-target="#event-tab-pane"
                        type="button" role="tab" aria-controls="event-tab-pane" aria-selected="false">
                        Events
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="newsEventsTabContent">
                <!-- News Tab -->
                <div class="tab-pane fade show active" id="news-tab-pane" role="tabpanel" aria-labelledby="news-tab"
                    tabindex="0">
                    <h1>Comming soon!</h1>
                </div>
                <!--/ News Tab -->
                <!-- Campus Tab -->
                <div class="tab-pane fade" id="campus-tab-pane" role="tabpanel" aria-labelledby="campus-tab"
                    tabindex="0">
                    <h1>Comming soon!</h1>

                </div>
                <!--/ Campus Tab -->

                <!-- Events Tab -->
                <div class="tab-pane fade" id="event-tab-pane" role="tabpanel" aria-labelledby="event-tab"
                    tabindex="0">
                    <div class="row" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <div class="col-md-3">
                            <img class="img-fluid" src="images/events/government-of-punjab-visit 1.jpg" alt="Visit"
                                width="280" height="217" />
                            <h3 class="h5">Gov of Punjab visit</h3>
                            <p class="small">The Government of Punjab’s committee consisting of </p>
                            <a href="event" class="btn btn-outline-secondary">See More</a>
                        </div>


                        <div class="col-md-3">
                            <img class="img-fluid" src="images/events/hec-vist-1.jpg" alt="visit" width="280"
                                height="217" />
                            <h3 class="h5">HEC Visit</h3>
                            <p class="small">The Higher Education Commission Visits the Multan </p>
                            <a href="event" class="btn btn-outline-secondary">Learn More</a>
                        </div>
                    </div>
                </div>
                <!--/ Events Tab -->
            </div>
        </div>
    </div>
    <!--/ News and Events -->


    <!-- Message from Director -->
    <div class="message-from-director">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Message from Director
            </h2>

            <!-- Glide Carousel - Director -->
            <div class="glide director" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <div class="row">
                                <div class="col-md-3">
                                    <img class="img-fluid" src="images/renee.jpg" alt="Renee" width="288"
                                        height="288" />
                                </div>
                                <div class="col-md-9">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been
                                        the industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a galley
                                        of type and scrambled it to make a type specimen book. It has survived not only five
                                        centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was
                                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages,
                                        and more recently with desktop publishing software like Aldus
                                    </p>
                                    <h3 class="h7 fw-500">— Renee Wells</h3>
                                    <h4 class="h7 fw-500">Director</h4>
                                </div>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div class="row">
                                <div class="col-md-3">
                                    <img class="img-fluid" src="images/renee.jpg" alt="Renee" width="288"
                                        height="288" />
                                </div>
                                <div class="col-md-9">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been
                                        the industry's standard dummy text ever since the 1500s, when an unknown printer
                                        took a galley
                                        of type and scrambled it to make a type specimen book. It has survived not only five
                                        centuries,
                                        but also the leap into electronic typesetting, remaining essentially unchanged. It
                                        was
                                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages,
                                        and more recently with desktop publishing software like Aldus
                                    </p>
                                    <h3 class="h7 fw-500">— Renee Wells</h3>
                                    <h4 class="h7 fw-500">Director</h4>
                                </div>
                            </div>
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
            <!--/ Glide Carousel - Director -->
        </div>
    </div>
    <!--/ Message from Director -->

    <!-- Testimonials -->
    <div class="testimonials">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Testimonials
            </h2>

            <!-- Glide Carousel - Testimonial -->
            <div class="glide testimonial" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <div class="card-testimonial">
                                <div class="ct-content">
                                    <div class="ct-stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>

                                    <p>
                                        I am so grateful to have attended my university. The professors are knowledgeable
                                        and
                                        supportive, and the facilities are top-notch.
                                    </p>

                                    <h3 class="h7 fw-500">— Renee Wells</h3>
                                    <h4 class="h7 fw-500">Student</h4>
                                </div>
                                <img class="img-fluid" src="images/renee-2.jpg" alt="Renee" width="334"
                                    height="434" />
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div class="card-testimonial">
                                <div class="ct-content">
                                    <div class="ct-stars">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>

                                    <p>
                                        I am so grateful to have attended my university. The professors are knowledgeable
                                        and
                                        supportive, and the facilities are top-notch.
                                    </p>

                                    <h3 class="h7 fw-500">— Renee Wells</h3>
                                    <h4 class="h7 fw-500">Student</h4>
                                </div>
                                <img class="img-fluid" src="images/renee-2.jpg" alt="Renee" width="334"
                                    height="434" />
                            </div>
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
            <!--/ Glide Carousel - Testimonial -->
        </div>
    </div>
    <!--/ Testimonials -->

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

    <!-- CTA Wrap -->
    <div class="cta-wrap" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
        data-aos-easing="ease-in-sine" data-aos-once="true">
        <div class="container">
            <!-- Call to Action -->
            <div class="call-to-action">
                <img src="images/cta-img.png" alt="Cta Img" width="120" height="56" />
                <h2 class="h5 fw-500">Still have questions?</h2>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <a href="/contact-us" class="btn btn-primary">Get in touch</a>
            </div>
            <!--/ Call to Action -->
        </div>
    </div>
    <!--/ CTA Wrap -->
@endsection
