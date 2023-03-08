@extends('layouts.web')

@push('title')
    Degree Overview
@endpush

@section('content')

@endsection

<!-- Main Banner -->
<div class="main-banner degree-overview-banner">
    <div class="container">
        <!-- Search Filters -->
        <div class="search-filters" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine"
            data-aos-once="true">
            <form role="search" method="get" id="search-form" action="#">
                <!-- SF Body -->
                <div class="sf-body">
                    <div class="input-group">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Search in our Programs"
                            aria-label="Search in our Programs" aria-describedby="button-addon2" />
                        <button class="btn btn-clear" type="button">Clear</button>
                        <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <!--/ SF Body -->
                <!-- SF Footer -->
                <div class="sf-footer">
                    <div class="row">
                        <div class="col-md-3">
                            <select name="levels" id="levels" class="form-select">
                                <option selected>Levels</option>
                                <option value="1">Level 1</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select name="faculty" id="faculty" class="form-select">
                                <option selected>faculty</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select name="programs" id="programs" class="form-select">
                                <option selected>Graduate</option>
                                <option value="1">Under Graduate</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!--/ SF Footer -->
            </form>
        </div>
        <!--/ Search Filters -->

        <h1 class="text-center" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100"
            data-aos-easing="ease-in-sine" data-aos-once="true">
            Lorem Ipsum is simply
        </h1>
        <p class="text-center" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="200"
            data-aos-easing="ease-in-sine" data-aos-once="true">
            Lorem Ipsum is simply dummy text of the printing
        </p>
    </div>
</div>
<!--/ Main Banner -->

<!-- Degree Overview -->
<div class="degree-overview">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2 data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-sine" data-aos-once="true">
                    Degree Overview
                </h2>

                <ul class="nav nav-tabs" id="overviewTab" role="tablist" data-aos="fade-up" data-aos-duration="400"
                    data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-once="true">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="overview-tab" data-bs-toggle="tab"
                            data-bs-target="#overview-tab-pane" type="button" role="tab"
                            aria-controls="overview-tab-pane" aria-selected="true">
                            Overview
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="fee-structure-tab" data-bs-toggle="tab"
                            data-bs-target="#fee-structure-tab-pane" type="button" role="tab"
                            aria-controls="fee-structure-tab-pane" aria-selected="false">
                            Fee Structure
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="overviewTabContent" data-aos="fade-up" data-aos-duration="400"
                    data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                    <!-- Overview Tab -->
                    <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel"
                        aria-labelledby="overview-tab" tabindex="0">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            the leap
                            into electronic typesetting,Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five
                            centuries, but also the leap into electronic typesetting,
                        </p>

                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                        </ul>
                    </div>
                    <!--/ Overview Tab -->

                    <!-- Fee Structure Tab -->
                    <div class="tab-pane fade" id="fee-structure-tab-pane" role="tabpanel"
                        aria-labelledby="fee-structure-tab" tabindex="0">
                        <table class="table table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Particular</th>
                                    <th scope="col">Fall 2022</th>
                                    <th scope="col">Spring 2023</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Admission Fee</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                </tr>
                                <tr>
                                    <td>Admission Fee</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                </tr>
                                <tr>
                                    <td>Admission Fee</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                </tr>
                                <tr>
                                    <td>Admission Fee</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                    <td>100,290 PKR</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/ Fee Structure -->
                </div>
            </div>
            <div class="offset-md-1 col-md-5">
                <div class="card card-admission-form" data-aos="fade-up" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <a href="student-portal.html" class="btn btn-primary">Apply Now</a>
                    <a href="javascript:void(0)" class="btn btn-light">Download Admission Form</a>
                    <p class="text-center mb-0">Need Help About this Program? <a href="contact-us.html"> Get In
                            Touch</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<!--/ Degree Overview -->

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
                <a href="degree-overview.html" class="text-white fw-600 btn-icon" data-aos="fade-up"
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
                                <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
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
                                <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
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
                                <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
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

<!-- CTA Wrap -->
<div class="cta-wrap" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
    data-aos-easing="ease-in-sine" data-aos-once="true">
    <div class="container">
        <!-- Call to Action -->
        <div class="call-to-action">
            <img src="images/cta-img.png" alt="Cta Img" width="120" height="56" />
            <h2 class="h5 fw-500">Still have questions?</h2>
            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <a href="contact-us.html" class="btn btn-primary">Get in touch</a>
        </div>
        <!--/ Call to Action -->
    </div>
</div>
<!--/ CTA Wrap -->
@endsection
