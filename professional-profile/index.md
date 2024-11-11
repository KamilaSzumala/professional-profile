---
layout: page
---


<div class="container mt-4">
    <div class="row align-items-center">
        <div class="col-12 col-md-8">
            <h2>Hello! I'm Kamila Szumała and welcome in my portfolio website!</h2>
            <div class="contact-info">
                <p>Get in touch with me:</p>
                <p>Phone number: <a href="tel:site.contact.phone">{{ site.contact.phone }}</a></p>
                <p>Email: <a href="mailto:site.contact.email_1">{{ site.contact.email_1 }}</a> | <a href="mailto:site.contact.email_2">{{ site.contact.email_2 }}</a></p>
                <p>LinkedIn: <a href="{{ site.social_links.linkedin }}">{{ site.social_links.linkedin }}</a></p>
            </div>
        </div>
        <!-- image -->
        <div class="col-12 col-md-4 text-center img-container">
            <img src="{{ site.image }}" class="rounded-circle img-fluid profile-image" alt="Your Photo">
        </div>
    </div>
</div>

<!-- Short description -->
<div class="container mt-4">
    <div class="row">
    <div class="col">
        <p class="description">{{ site.description }}</p>
    </div>
    </div>
</div>

<!-- Placeholders -->
<div class="container mt-4  position-relative">
<h3>If you're curious, take a look also here:</h3>
    <!-- left arrow -->
    <div class="scroll-arrow left-arrow" id="leftArrow">&#10094;</div>
    <div class="scroll-container d-flex flex-row overflow-hidden" id="cardContainer">
    <!--  -->
         <div class="col-md-3">
            <a href="{{ '/about/' | relative_url }}" class="card-link">
                <div class="card">
                    <div class="icon-container">
                        <i class="fa-solid fa-puzzle-piece icon"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">About Me</h5>
                        <p class="card-text">Some short description about me.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-3">
            <a href="{{ '/education/' | relative_url }}" class="card-link">
                <div class="card">
                    <div class="icon-container">
                        <i class="fa-solid fa-graduation-cap icon"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Education</h5>
                        <p class="card-text">Brief summary about my education.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-3">
            <a href="{{ '/experience/' | relative_url }}" class="card-link">
                <div class="card">
                    <div class="icon-container">
                        <i class="fa-solid fa-briefcase icon"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Experience</h5>
                        <p class="card-text">A bit about my work experience</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-3">
            <a href="{{ '/projects/' | relative_url }}" class="card-link">
                <div class="card">
                    <div class="icon-container">
                        <i class="fa-solid fa-dna icon"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Projects</h5>
                        <p class="card-text">Brief description of my projects.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-3">
            <a href="{{ '/skills/' | relative_url }}" class="card-link">
                <div class="card">
                    <div class="icon-container">
                        <i class="fa solid fa-code icon"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Skills</h5>
                        <p class="card-text">A roadmap of my skills in various areas.</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-3">
            <a href="{{ '/skills/' | relative_url }}" class="card-link">
                <div class="card">
                    <div class="icon-container">
                        <i class="fa solid fa-newspaper icon"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Publications</h5>
                        <p class="card-text">Short description of my publications.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="scroll-arrow right-arrow" id="rightArrow">&#10095;</div>
</div>
