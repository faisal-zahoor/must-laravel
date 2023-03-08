@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner">
        <div class="container">
            <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">
                Introduction UOM
            </h1>
            <a href="student-portal.html" class="btn btn-lg btn-primary" data-aos="fade-zoom-in" data-aos-duration="300"
                data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">Apply Now</a>
            <a href="coming-soon.html" class="btn btn-lg btn-outline-light" data-bs-toggle="modal"
                data-bs-target="#watchvideoModal" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <i class="fa fa-play"></i>
                <span>Watch Video</span>
            </a>
        </div>
    </div>
    <!--/ Main Banner -->

    <!-- How to Apply -->
    <div class="how-to-apply">
        <div class="container">
            <img class="img-fluid" src="images/vission.png" alt="How to apply" data-aos="fade-up" data-aos-duration="400"
                data-aos-easing="ease-in-sine" data-aos-once="true" />
            <p data-aos="fade-up" data-aos-duration="400" data-aos-delay="100" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                We are committed to Channelizing the Passion that Transform a Dream into Reality while Inspiring those who
                Aspire for
                Excellence INTRODUCTION
            </p>
        </div>
    </div>
    <!--/ How to Apply -->

    <!-- How to Apply -->
    <div class="how-to-apply">
        <div class="container">
            <img class="img-fluid" src="images/vission.png" alt="How to apply" data-aos="fade-up" data-aos-duration="400"
                data-aos-easing="ease-in-sine" data-aos-once="true" />
            <p data-aos="fade-up" data-aos-duration="400" data-aos-delay="100" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                To Redefine Education as Training for Life by giving our students Knowledge, Insights, and Skills that go
                beyond
                Examination to make them Resourceful and Responsible Citizens of the World
            </p>
        </div>
    </div>
    <!--/ How to Apply -->
@endsection
