<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Quản lý</title>
        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        <script async type='text/javascript' src='http://171.244.2.102:8851/javascripts/api/viz_v1.js'></script>
    </head>
    <body>
        <div id="app">
            <noscript>
                <div class="app flex-row align-items-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-6 p-3">
                                <h1 class="text-center text-md-left">
                                    <i class="fa fa-warning fa-2x"></i>
                                </h1>
                                <h4 class="pt-3">Browser not Support</h4>
                                <p class="text-muted">
                                    Try other browser which have Javascript Support. Recommendation is
                                    <a href="https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjw6-_eBRBXEiwA-5zHaa78eJ_HfOScWr1D4PzHFZY2k2zRHc9pcHZ9gvAaHbljCsSC1gv0jBoCKIUQAvD_BwE&gclsrc=aw.ds">
                                        Google Chrome
                                    </a>
                                    or
                                    <a href="https://www.mozilla.org/en-US/">
                                        Mozilla Firefox
                                    </a>
                                    <br>
                                    <a class="btn btn-primary mt-3" href="{{ url()->current() }}">
                                        Reload Page
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </noscript>
        </div>
        <script defer src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
