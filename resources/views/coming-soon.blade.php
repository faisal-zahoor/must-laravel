@extends('layouts.web')

@push('title')
    Coming Soon
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner not-found-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-lg-7 col-xl-5">
                    <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">
                        Coming Soon!
                    </h1>
                    <p class="lead" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        We are waiting on a few final details before making this information available. Please check back
                        later:
                    </p>
                    <a href="javascript:void(O)" class="btn btn-lg btn-outline-light" data-aos="fade-zoom-in"
                        data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                        <i class="fa fa-arrow-left"></i>
                        <span>Go Back</span>
                    </a>
                    <a href="index.html" class="btn btn-lg btn-primary" data-aos="fade-zoom-in" data-aos-duration="300"
                        data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">Take me Home</a>
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
                <a href="contact-us.html" class="btn btn-primary">Get in touch</a>
            </div>
            <!--/ Call to Action -->
        </div>
    </div>
    <!--/ CTA Wrap -->
@endsection
