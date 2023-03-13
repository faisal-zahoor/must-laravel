@extends('layouts.web')

@push('title')
    Home
@endpush

@section('content')
    <!-- Main Banner -->
    <div class="main-banner">
        <div class="container">
            <h1 data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-once="true">Jobs At UOM
            </h1>
            <p data-aos="fade-zoom-in" data-aos-duration="300" data-aos-delay="100" data-aos-easing="ease-in-sine"
                data-aos-once="true">
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry
            </p>
        </div>
    </div>
    <!--/ Main Banner -->

    <!-- Jobs -->
    <div class="jobs" data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-sine" data-aos-once="true">
        <div class="container">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Policies</td>
                        <td>Campus</td>
                        <td>Last Update Date</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                        <div class="accordion-button">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3 class="h6 mb-0">Product Designer</h3>
                                        </td>
                                        <td>
                                            <span class="badge rounded-pill bg-primary">Lahore</span>
                                        </td>
                                        <td>10 Feb 2023</td>
                                        <td>
                                            <button class="btn btn-view-job" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                <span>View Job</span>
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#667085" stroke-width="1.67"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td>
                                            <a href="apply-now" class="btn btn-primary">Apply Now</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                Labelbox's mission is to build the best product to align with artificial intelligence. Real
                                breakthroughs in AI are reliant on the quality of the training data. Labelbox's data engines
                                enables
                                organizations to dramatically improve the quality of their training data, which makes their
                                machine
                                learning model more accurate and performant. We are determined to build software that is
                                more open,
                                easier-to-use, and singularly focused on helping our customers get to production AI faster.
                            </p>
                            <p>
                                Labelbox's mission is to build the best product to align with artificial intelligence. Real
                                breakthroughs in AI are reliant on the quality of the training data. Labelbox's data engines
                                enables
                                organizations to dramatically improve the quality of their training data, which makes their
                                machine
                                learning model more accurate and performant. We are determined to build software that is
                                more open,
                                easier-to-use, and singularly focused on helping our customers get to production AI faster.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" id="headingTwo">
                        <div class="accordion-button">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3 class="h6 mb-0">Product Designer</h3>
                                        </td>
                                        <td>
                                            <span class="badge rounded-pill bg-primary">Lahore</span>
                                        </td>
                                        <td>10 Feb 2023</td>
                                        <td>
                                            <button class="btn btn-view-job" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="true"
                                                aria-controls="collapseTwo">
                                                <span>View Job</span>
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#667085" stroke-width="1.67"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td>
                                            <a href="apply-now" class="btn btn-primary">Apply Now</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                Labelbox's mission is to build the best product to align with artificial intelligence. Real
                                breakthroughs in AI are reliant on the quality of the training data. Labelbox's data engines
                                enables
                                organizations to dramatically improve the quality of their training data, which makes their
                                machine
                                learning model more accurate and performant. We are determined to build software that is
                                more open,
                                easier-to-use, and singularly focused on helping our customers get to production AI faster.
                            </p>
                            <p>
                                Labelbox's mission is to build the best product to align with artificial intelligence. Real
                                breakthroughs in AI are reliant on the quality of the training data. Labelbox's data engines
                                enables
                                organizations to dramatically improve the quality of their training data, which makes their
                                machine
                                learning model more accurate and performant. We are determined to build software that is
                                more open,
                                easier-to-use, and singularly focused on helping our customers get to production AI faster.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <div class="accordion-header" id="headingThree">
                        <div class="accordion-button">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h3 class="h6 mb-0">Product Designer</h3>
                                        </td>
                                        <td>
                                            <span class="badge rounded-pill bg-primary">Lahore</span>
                                        </td>
                                        <td>10 Feb 2023</td>
                                        <td>
                                            <button class="btn btn-view-job" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="true"
                                                aria-controls="collapseThree">
                                                <span>View Job</span>
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#667085" stroke-width="1.67"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td>
                                            <a href="apply-now" class="btn btn-primary">Apply Now</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                Labelbox's mission is to build the best product to align with artificial intelligence. Real
                                breakthroughs in AI are reliant on the quality of the training data. Labelbox's data engines
                                enables
                                organizations to dramatically improve the quality of their training data, which makes their
                                machine
                                learning model more accurate and performant. We are determined to build software that is
                                more open,
                                easier-to-use, and singularly focused on helping our customers get to production AI faster.
                            </p>
                            <p>
                                Labelbox's mission is to build the best product to align with artificial intelligence. Real
                                breakthroughs in AI are reliant on the quality of the training data. Labelbox's data engines
                                enables
                                organizations to dramatically improve the quality of their training data, which makes their
                                machine
                                learning model more accurate and performant. We are determined to build software that is
                                more open,
                                easier-to-use, and singularly focused on helping our customers get to production AI faster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ Jobs -->

@endsection
