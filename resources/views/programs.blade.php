@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner degree-overview-banner">
        <div class="container">
            <!-- Search Filters -->
            <div class="search-filters" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                <form role="search" method="get" id="program-search-form" action="#">
                    <!-- SF Body -->
                    <div class="sf-body">
                        <div class="input-group">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search in our Programs"
                                aria-label="Search in our Programs" aria-describedby="button-addon2" readonly />
                            <button class="btn btn-clear" type="button">Clear</button>
                            <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <!--/ SF Body -->
                    <!-- SF Footer -->
                    <div class="sf-footer">
                        <div class="row">
                            <!-- don't change id's of select elements, they binded to api calls -->
                            <div class="col-md-3">
                                <select name="levels" id="levels" class="form-select autocomplete-wizard">
                                    <option selected>Levels</option>
                                    <option>Loading...</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select name="faculties" id="faculties" class="form-select autocomplete-wizard">
                                    <option selected>Faculties</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select name="departments" id="departments" class="form-select autocomplete-wizard">
                                    <option selected>Departments</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <select name="programs" id="programs" class="form-select" readonly>
                                    <option selected>Programs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--/ SF Footer -->
                </form>
            </div>
            <!--/ Search Filters -->
        </div>
    </div>
    <!--/ Main Banner -->

    <!-- News and Events -->
    <div class="news-events">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <h2 data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-sine" data-aos-once="true">
                        Degree Programs
                    </h2>
                </div>
                <div class="col-md-3">
                    <select name="relevant" id="relevant" class="form-select" data-aos="fade-up" data-aos-duration="400"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        <option selected="">Most Relevant</option>
                        <option value="1">Careers</option>
                    </select>
                </div>
            </div>

            <div class="row" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-one.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-two.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-three.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-four.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-five.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-six.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-seven.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/news-events/news-eight.jpg" alt="Arts Society" width="280"
                        height="217" />
                    <h3 class="h5">Arts Society</h3>
                    <p class="small">Lorem Ipsum is simply dummy text of the printing and</p>
                    <a href="/degree-overview.html" class="btn btn-outline-secondary">Learn More</a>
                </div>
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
