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

<!-- Placeholders - Podstrony -->
<div class="container mt-4  position-relative">
<h3>If you're curious, take a look also here:</h3>
    <!-- left arrow -->
    <div class="scroll-arrow left-arrow" id="leftArrow">&#10094;</div>
    <div class="scroll-container d-flex flex-row overflow-hidden" id="cardContainer">
    <!-- Placeholders jako karty -->
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="About">
            <div class="card-body">
                <h5 class="card-title">About Me</h5>
                <p class="card-text">Some short description about me.</p>
            </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Education">
            <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">Brief summary about my education.</p>
            </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="About">
            <div class="card-body">
                <h5 class="card-title">Experience</h5>
                <p class="card-text">A bit about my work experience</p>
            </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Projects">
            <div class="card-body">
                <h5 class="card-title">Projects</h5>
                <p class="card-text">Brief description of my projects.</p>
            </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Publications">
            <div class="card-body">
                <h5 class="card-title">Skills</h5>
                <p class="card-text">A roadmap of my skills in various areas.</p>
            </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
            <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Publications">
            <div class="card-body">
                <h5 class="card-title">Publications</h5>
                <p class="card-text">Short description of my publications.</p>
            </div>
            </div>
        </div>
    </div>
    <div class="scroll-arrow right-arrow" id="rightArrow">&#10095;</div>
</div>
