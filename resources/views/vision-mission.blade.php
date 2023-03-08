@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner">
        <div class="container">
            <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">
                Vision & Mission UOM
            </h1>
            <a href="student-portal.html" class="btn btn-lg btn-primary" data-aos="fade-zoom-in" data-aos-duration="300"
                data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-once="true">Apply Now</a>
            <a href="coming-soon.html" class="btn btn-lg btn-outline-light" data-bs-toggle="modal"
                data-bs-target="#watchvideoModal" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <i class="fa fa-play"></i>
                <span>Watch Video</span>
            </a>
        </div>
    </div>
    <!--/ Main Banner -->

    <!-- Our Vision Mission -->
    <div class="our-vision-mission">
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                <img class="img-fluid" src="images/Our-Vision_2022-1.jpg" alt="Our Mission" width="100%" height="auto" />
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <p>
                    To Redefine Education as Training for Life by giving our students Knowledge, Insights, and Skills that
                    go beyond
                    Examination to make them Resourceful and Responsible Citizens of the World
                </p>
            </div>
        </div>
    </div>
    <!--/ Our Vision Mission -->

    <!-- Our Vision Mission -->
    <div class="our-vision-mission">
        <div class="container">
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                <img class="img-fluid" src="images/Our-Mission_2022-1.jpg" alt="Our Mission" width="100%"
                    height="auto" />
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <p>
                    To Redefine Education as Training for Life by giving our students Knowledge, Insights, and Skills that
                    go beyond
                    Examination to make them Resourceful and Responsible Citizens of the World
                </p>
            </div>
        </div>
    </div>
    <!--/ Our Vision Mission -->
@endsection
