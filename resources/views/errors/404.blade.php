@extends('layouts.web')

@push('title')
    404
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner not-found-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-lg-7 col-xl-5">
                    <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">
                        404 not found
                    </h1>
                    <p class="lead" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100"
                        data-aos-easing="ease-in-sine" data-aos-once="true">
                        Sorry, the page you are looking for doesn't exist. Here are some helpful links:
                    </p>
                    <a href="javascript:void(0)" class="btn btn-lg btn-outline-light" data-aos="fade-zoom-in"
                        data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">
                        <i class="fa fa-arrow-left"></i>
                        <span>Go Back</span>
                    </a>
                    <a href="/" class="btn btn-lg btn-primary" data-aos="fade-zoom-in" data-aos-duration="300"
                        data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">Take me Home</a>
                </div>
            </div>
        </div>
    </div>
    <!--/ Main Banner -->
@endsection
