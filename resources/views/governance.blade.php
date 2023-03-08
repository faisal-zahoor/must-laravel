@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner">
        <div class="container">
            <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">Governance
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

    <!-- Message from Director -->
    <div class="message-from-director">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Message from Director
            </h2>

            <div class="row" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div class="col-md-3">
                    <img class="img-fluid" src="images/renee.jpg" alt="Renee" width="400" height="288" />
                </div>
                <div class="col-md-9">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    </p>
                    <h3 class="h7 fw-500">— Renee Wells</h3>
                    <h4 class="h7 fw-500">Director</h4>
                </div>
            </div>
        </div>
    </div>
    <!--/ Message from Director -->

    <!-- Message from Director -->
    <div class="message-from-director">
        <div class="container">
            <h2 data-aos="fade-up" data-aos-duration="400" data-aos-delay="0" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Message from Director
            </h2>

            <div class="row" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200"
                data-aos-easing="ease-in-sine" data-aos-once="true">
                <div class="col-md-9">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    </p>
                    <h3 class="h7 fw-500">— Renee Wells</h3>
                    <h4 class="h7 fw-500">Director</h4>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="images/renee.jpg" alt="Renee" width="400" height="288" />
                </div>
            </div>
        </div>
    </div>
    <!--/ Message from Director -->
@endsection
