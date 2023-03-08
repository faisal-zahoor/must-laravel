<header>
    {{-- Top Bar --}}
    @include('layouts.topbar')
    {{--/ Top Bar --}}
    
    <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="images/common/uom-logo-white.svg" alt="Multan University Logo" width="200" height="52" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Must
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="vision-and-mission">
                                    <div class="di-icon">
                                        <i class="fa-solid fa-hand-peace"></i>
                                    </div>
                                    <div class="di-txt">Vision and mission</div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="leadership">
                                    <div class="di-icon">
                                        <i class="fa-regular fa-handshake"></i>
                                    </div>
                                    <div class="di-txt">Leadership</div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="introduction">
                                    <div class="di-icon">
                                        <i class="fa-solid fa-info"></i>
                                    </div>
                                    <div class="di-txt">Introduction</div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="governance">
                                    <div class="di-icon">
                                        <i class="fa-solid fa-user-shield"></i>
                                    </div>
                                    <div class="di-txt">Governance</div>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="apply-now">Admission</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="academics">Academics</a>
                    </li>
                </ul>
                <a href="apply-now" class="btn btn-primary">Apply Now</a>
            </div>
        </div>
    </nav>
</header>