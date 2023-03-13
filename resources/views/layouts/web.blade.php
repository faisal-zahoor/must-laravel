<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
            @stack('title') | Multan University Of Science and Technology
        </title>

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <!-- Style CSS -->
        <link rel="stylesheet" href="{{ URL('css/style.css')}}" />
    </head>

    <body>
        <!-- Header -->
        @include('layouts.header')
        <!--/ Header -->

        @yield('content')

        <!-- Footer -->
        @include('layouts.footer')
        <!--/ Footer -->

        <!-- Popper -->
        <script src="{{ URL('js/popper.js') }}"></script>
        <!--/ Popper -->

        <!-- Script Js -->
        <script src="{{ URL('js/script.js') }}"></script>
        <!--/ Script Js -->

        <!-- Watch Video Modal -->
        <div class="modal fade" id="watchvideoModal" tabindex="-1" aria-labelledby="watchvideoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title fs-5" id="watchvideoModalLabel"></h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">Loading...</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Watch Video Modal -->
    </body>
</html>
