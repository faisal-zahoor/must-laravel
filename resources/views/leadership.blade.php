@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner">
        <div class="container">
            <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">Leadership
                UOM</h1>
            <a href="apply-now" class="btn btn-lg btn-primary" data-aos="fade-zoom-in" data-aos-duration="300"
                data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-once="true">Apply Now</a>
            <a href="coming-soon" class="btn btn-lg btn-outline-light" data-bs-toggle="modal"
                data-bs-target="#watchvideoModal" data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <i class="fa fa-play"></i>
                <span>Watch Video</span>
            </a>
        </div>
    </div>
    <!--/ Main Banner  -->

    <!-- How to apply -->
    <div class="how-to-apply">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 hta-content-left" data-aos="fade-right" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <img class="img-fluid" src="images/Universitylogo/government-logo.png" alt="leading" width="300"
                        height="300" />
                </div>
                <div class="offset-lg-1 col-lg-6 hta-content-right" data-aos="fade-left" data-aos-duration="400"
                    data-aos-easing="ease-in-sine" data-aos-once="true">
                    <h2>Government of Punjab</h2>
                    <p>
                        Multan University (HU) has been granted Charter by Govt. of Punjab (Pb. Ord. LIX of 2002)as an
                        Autonomous Degree
                        Awarding University. Our Degrees are accredited by the Higher Education Commission (HEC), Pharmacy
                        Council of
                        Pakistan (PCP), Pakistan Engineering Council (PEC), and all other relevant accreditation bodies. HU
                        has evolved
                        into a premier institution of higher learning in the country. Recognized by the Higher Education
                        Commission
                        (HEC) as a “W4” Category (highest rank) university.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!--/ How to apply -->
@endsection
