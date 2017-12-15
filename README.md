# flexbox-carousel-FullPage
A lean responsive Flexbox Carousel/Slider with smooth transitions and text pagination created by <a href="https://www.linkedin.com/in/mohammed-nokri/">Nokri Mohammed</a>

<br />

# Version
1.0

<br />

# Tech
<ul>
    <li>Sass</li>
    <li>Css3</li>
    <li>Jquery</li>
</ul>

<br />

# Usage
```
    <div class="wrapper wrapper-flex-slider">
         <div class="container">
            <div class="child" id="child1" data-src="https://images.pexels.com/photos/225225/pexels-photo-225225.jpeg"> <!-- Slide 1 --> </div>
            <div class="child" id="child2" data-src=" https://images.pexels.com/photos/75360/bokeh-car-water-night-75360.jpeg"> <!-- Slide 2 --> </div>
            <div class="child" id="child3" data-src="https://images.pexels.com/photos/220071/pexels-photo-220071.jpeg"> <!-- Slide 3 --> </div>
            <div class="child" id="child4" data-src="https://images.pexels.com/photos/698922/pexels-photo-698922.jpeg"> <!-- Slide 4 --> </div>
        </div>

        <div id="pagination-wrap"><ul></ul></div>

        <!--controls-->
        <div class="btns" id="next"><i class="fa fa-chevron-right"></i></div>
        <div class="btns" id="previous"><i class="fa fa-chevron-left"></i></div>
    </div>
 
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
  <script src="js/Jquery.FlexSlider.js"></script>
  <script>
        $(document).ready(function () {
            $(".wrapper-flex-slider").flexSlider();
        });
  </script>
```

<br />

# Demo
<a href="https://codepen.io/NokriMohammed/pen/POMoBR">codepen.io/NokriMohammed</a>
