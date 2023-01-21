var header = document.getElementsByTagName("header");
header[0].setAttribute("class", "bg-color");
header[0].innerHTML +=
`
        <div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="text-white">
						<h1 class="fs-4">Omkar Hospital Bilaspur</h1>
					</div>
				</div><!---end-column-->
				<div class="col-md-6 d-flex align-items-center justify-content-end">
					<div>
						<a href="#" class="text-white mx-2"><i class="fa-brands fa-facebook-f"></i></a>
						<a href="#" class="text-white mx-2"><i class="fa-brands fa-twitter"></i></a>
						<a href="#" class="text-white mx-2"><i class="fa-brands fa-linkedin-in"></i></a>
						<a href="#" class="text-white mx-2"><i class="fa-brands fa-instagram"></i></a>
					</div>
				</div><!---end-column-->
			</div><!---end-row-->
		</div><!---end-container-->
	`;
var nav=document.getElementsByTagName("nav");
	nav[0].innerHTML+=`
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<div>
						<img src="image/logo.png" alt="logo" width="105" class="navbar-brand">
					</div><!---end-logo-->
				</div><!---end-column-->
				<div class="col-md-9 d-flex align-items-center justify-content-end">
					<div>
						<ul class="nav nav-pills">
							<li class="nav-item fw-bolder"><a href="#" class="nav-link color">Home</a></li>
							<li class="nav-item fw-bolder"><a href="#" class="nav-link color">About</a></li>
							<li class="nav-item fw-bolder dropdown">
								<a href="#" class="nav-link color dropdown-toggle" data-bs-toggle="dropdown">Department </a>
								<ul class="dropdown-menu">
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">ICU UNIT</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Gynecological and Obstetric</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item"> Orthopedic and Trauma Unit</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">General Surgery</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Neuro Surgery</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Urosurgery</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Oncosurgery</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Pediatrics</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Maxillofacial Surgery</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item">Chest & TB</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item"> Medical Unit</a></li>
									<li class="border-bottom fs-5"><a href="#" class="dropdown-item"> Special Facilities</a></li>
								</ul>
							</li>
							<li class="nav-item fw-bolder"><a href="#" class="nav-link color">Our Doctor</a></li>
							<li class="nav-item fw-bolder"><a href="#" class="nav-link color">Gallery</a></li>
							<li class="nav-item fw-bolder"><a href="#" class="nav-link color">Contact</a></li>
							<li class="nav-item fw-bolder"><a href="#" class="nav-link bg-color text-white rounded">Appointment</a></li>
						</ul>
					</div>
				</div><!---end-column-->
			</div><!---end-row-->
		</div><!---end-container-->
	`;
	
var section=document.getElementsByTagName("section");
	section[0].innerHTML+=`
		<div>
			<div id="demo" class="carousel slide" data-bs-ride="carousel">

				<!-- The slideshow/carousel -->
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="image/slider-1.jpg" alt="slider-1" class="d-block w-99">
					</div>
					<div class="carousel-item">
						<img src="image/slider-2.jpg" alt="slider-2" class="d-block w-99">
					</div>
					<div class="carousel-item">
						<img src="image/slider-3.jpg" alt="slider-3" class="d-block w-99">
					</div>
					<div class="carousel-item">
						<img src="image/slider-4.jpg" alt="slider-4" class="d-block w-99">
					</div>
					<div class="carousel-item">
						<img src="image/slider-5.jpg" alt="slider-5" class="d-block w-99">
					</div>
					<div class="carousel-item">
						<img src="image/slider-6.jpg" alt="slider-6" class="d-block w-99">
					</div>
				</div>

				<!-- Left and right controls/icons -->
				<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
				<span class="carousel-control-prev-icon"></span></button>
				<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
				<span class="carousel-control-next-icon"></span></button>
			</div>
		</div>
	`;
	
	section[1].innerHTML+=`
		<div class="bg-color2 p-3">
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex justify-content-center align-items-center">
						<div>
							<img src="image/ambulance.png" alt="ambulance" width="268" height="119">
						</div>
					</div><!---end-column-->
					<div class="col-md-6 d-flex justify-content-center align-items-center">
						<div>
							<h2 class="px-5">24 hours Emergency Ambulance</h2>
							<a href="#" class="bg-color text-white rounded-pill text-decoration-none fs-5" id="em_call"><span><i class="fa-solid fa-mobile"></i></span> &nbsp;Emergency Call</a>
						</div>
					</div><!---end-column-->
				</div><!---end-row-->
			</div><!---end-container-->
		</div>
	`;
	document.getElementById("em_call").style.padding="7px 220px";
	
	section[2].innerHTML=`
		<div class="container">
			<div class="row px-5 mt-4">
				<div class="col-md-6">
					<div>
						<h2 class="fw-bolder pt-3">Welcome to Omkar Hospital Bilaspur</h2>
						<p class="mt-2 fs-5">
							The world perceives us as a low-cost Indian healthcare service provider; what we are engaged in is a passionate journey to establish ourselves as the lowest-cost, high-quality healthcare service provider in the world.
						</p>
						<p class="fs-5">
							At <b>Omkar Hospital</b>, we are convinced that 'quality' and 'lowest cost' are not mutually exclusive when it comes to healthcare delivery. In fact, we are well on our way to demonstrate that we are not running our institution as just another number-only business, but are attractively placed to create an affordable, globally-benchmarked quality-driven healthcare services model.
						</p>
					</div>
				</div><!---end-column-->
				<div class="col-md-6">
					<div>
						<img src="image/hospital.jpg" alt="hospital" class="img-thumbnail">
					</div>
				</div><!---end-column-->
				<p class="fs-5 mt-5">
					At <b>Omkar Hospital</b>, we will continue to trust what has worked for us in the past. We will keep our model predominantly asset-light; we will reinvest our accruals; we will engage with governments for land and help them achieve affordable healthcare promises made to their constituencies; we will rent premises from private owners and create small-to-large clinics within existing hospitals. As a result of this flexible approach, we will commission hospitals, medical facilities, and clinics across the breadth of this country, getting closer to patients and taking the promise of quality affordable healthcare to the doorstep of the country's millions.
				</p>
				<p class="fs-5">
					It is this exciting prospect that stokes my motivation to do bigger and better for the glory of the country that is mine
				</p>
			</div><!---end-row-->
		</div><!---end-container-->
	`;
	
	section[3].innerHTML=`
		<div class="container">
			<h2 class="text-center pt-5">Centre of Excellence Department</h2>
			<div class="row px-5 mt-5">
				<div class="col-md-3">
					<div>
						<div class="card">
							<img class="card-img-top" src="image/service-1.jpg" alt="service-1" width="261" height="200">
							<div class="card-body p-0 bg-color2 py-2 h-334">
								<h4 class="h5 card-title bg-color text-white text-center py-2">ICU UNIT</h4>
								<p class="card-text px-1 text-justify">
									An intensive care unit (ICU), also known as an intensive therapy unit or intensive treatment unit (ITU) or critical care unit (CCU), is a special department of a hospital or health care facility that provides intensive care medicine.
								</p>
								<span class="d-flex justify-content-center">
									<a href="#" class="btn rounded-pill bg-color text-white">Read More</a>
								</span>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
				<div class="col-md-3">
					<div>
						<div class="card">
							<img class="card-img-top" src="image/service-2.jpg" alt="service-2" width="261" height="200">
							<div class="card-body p-0 bg-color2 py-2 h-334">
								<h4 class="h5 card-title bg-color text-white text-center py-2">Gynecological and Obstetric</h4>
								<p class="card-text px-1 text-justify">
									woman starts her journey as a daughter fulfilling the expectations of her family. She then becomes a wife, and supports the needs of her family. As a mother, then she becomes an epitome of sacrifice and surrenders completely for the needs of her child.
								</p>
								<span class="d-flex justify-content-center">
									<a href="#" class="btn rounded-pill bg-color text-white">Read More</a>
								</span>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
				<div class="col-md-3">
					<div>
						<div class="card">
							<img class="card-img-top" src="image/service-3.jpg" alt="service-3" width="261" height="200">
							<div class="card-body p-0 bg-color2 py-2 h-334">
								<h4 class="h5 card-title bg-color text-white text-center py-2">Orthopedic and Trauma Unit</h4>
								<p class="card-text px-1 text-justify">
									Trauma and orthopaedic surgeons diagnose and treat a wide range of conditions of the musculoskeletal system. This includes bones and joints and their associated structures that enable movement - ligaments, tendons, muscles and nerves. Trauma and orthopaedic surgery is often abbreviated to T&O surgery.
								</p>
								<span class="d-flex justify-content-center">
									<a href="#" class="btn rounded-pill bg-color text-white">Read More</a>
								</span>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
				<div class="col-md-3">
					<div>
						<div class="card">
							<img class="card-img-top" src="image/service-4.jpg" alt="service-4" width="261" height="200">
							<div class="card-body p-0 bg-color2 py-2 h-334">
								<h4 class="h5 card-title bg-color text-white text-center py-2">Surgical Unit</h4>
								<p class="card-text px-1 text-justify">
									The surgical intensive care unit (SICU) is where you receive care if you're critically ill and in need of surgery or recovering from surgery.7﻿ You may be too unstable to be treated on a regular nursing floor, or ICU-level monitoring may be the protocol for a particular procedure
								</p>
								<div class="d-flex justify-content-center align-items-end">
									<a href="#" class="btn rounded-pill bg-color text-white">Read More</a>
								</div>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
			</div><!---end-row-->
			<div class="mt-5 text-center">
				<a href="#" class="text-white text-decoration-none bg-color rounded-pill px-5 py-2 fs-5">View All Treatments</a>
			</div>
		</div><!---end-container-->
	`;
	
	section[4].innerHTML+=`
		<div class="bg-color3 mt-5">
			<div class="container">
				<div class="row p-5">
					<div class="col-md-8">
						<div>
							<p class="fs-5">If you have any emergency Doctor’s need, simply call our 24 hour emergency</p>
							<h2 class="fs-3 fw-bold">24 hour Emergency, Trauma and Ambulance services available. Best services for Critical patient.</h2>
						</div>
					</div><!---end-column-->
					<div class="col-md-4">
						<div class="text-center">
							<p class="fs-5">Help line & Emergency Contact</p>
							<h2 class="fw-bold"><i class="fa-solid fa-phone-volume"></i>   8285366803</h2>
						</div>
					</div><!---end-column-->
				</div><!---end-row-->
			</div><!---end-container-->
		</div>
	`;
	
	section[5].innerHTML+=`
		<div class="container">
			<h2 class="text-center mt-5">Experience Doctors</h2>
			<div class="row pt-4 px-5">
				<div class="col-md-3">
					<div>
						<div class="card border-dashed p-1 border-dark ">
							<img src="image/doctor-1.jpg" alt="doctor-1" height="253">
							<div class="card-body p-0">
								<h5 class="card-title p-3">Dr. Abhishek Mishra</h5>
								<p class="card-text px-3"><i class="fa-solid fa-graduation-cap"></i>  MBBS, DNB</p>
								<p class="card-text px-3"><i class="fa-solid fa-user-doctor"></i>  Orthopedician & Joint</p> 
								<div class="bg-color text-center fs-4">
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-facebook-f"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-twitter"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 		fa-linkedin-in"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 	fa-instagram"></i></a>
								</div>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
				<div class="col-md-3">
					<div>
						<div class="card border-dashed p-1 border-dark ">
							<img src="image/doctor-1 (1).jpg" alt="doctor-1(1)" height="253">
							<div class="card-body p-0">
								<h5 class="card-title p-3">Dr. Shweta Sablani Mishra</h5>
								<p class="card-text px-3"><i class="fa-solid fa-graduation-cap"></i>  MBBS, MD</p>
								<p class="card-text px-3"><i class="fa-solid fa-user-doctor"></i>   Obstetrics & Gynecology</p>  
								<div class="bg-color text-center fs-4">
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-facebook-f"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-twitter"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 		fa-linkedin-in"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 	fa-instagram"></i></a>
								</div>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
				<div class="col-md-3">
					<div>
						<div class="card border-dashed p-1 border-dark ">
							<img src="image/doctor-1 (2).jpg" alt="doctor-1(2)" height="253">
							<div class="card-body p-0">
								<h5 class="card-title p-3">Dr. Aditya Kesharwani</h5>
								<p class="card-text px-3"><i class="fa-solid fa-graduation-cap"></i>  MBBS, MS</p>
								<p class="card-text px-3"><i class="fa-solid fa-user-doctor"></i>  Laproscopic Surgeon</p> 
								<div class="bg-color text-center fs-4">
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-facebook-f"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-twitter"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 		fa-linkedin-in"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 	fa-instagram"></i></a>
								</div>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
				<div class="col-md-3">
					<div>
						<div class="card border-dashed p-1 border-dark ">
							<img src="image/doctor-1 (3).jpg" alt="doctor-1(3)" height="253">
							<div class="card-body p-0">
								<h5 class="card-title p-3">Dr. Abhishek Mishra</h5>
								<p class="card-text px-3"><i class="fa-solid fa-graduation-cap"></i>  MBBS, DCH</p>
								<p class="card-text px-3"><i class="fa-solid fa-user-doctor"></i>    Pediatrician / Child Specialist</p> 
								<div class="bg-color text-center fs-4">
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-facebook-f"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands fa-twitter"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 		fa-linkedin-in"></i></a>
									<a href="#" class="text-white mx-2"><i class="fa-brands 	fa-instagram"></i></a>
								</div>
							</div>
						</div><!---end-card-->
					</div>
				</div><!---end-column-->
			</div><!---end-row-->
		</div><!---end-container-->
	`;
	
	section[6].innerHTML+=`
		<div class="bg-color mt-3 py-3">
			<div class="container">
				<div class="row px-5">
					<div class="col-md-9">
						<div class="text-white">
							<h2 class="fs-4">24 hour Emergency, Trauma and Ambulance services available</h2>
						</div>
					</div><!---end-column-->
					<div class="col-md-3 d-flex align-items-center">
						<div>
							<a href="#" class="text-black text-decoration-none bg-white fs-4 py-1 px-2 rounded"><i class="fa-solid fa-phone"></i> Book Appointment</a>
						</div>
					</div><!---end-column-->
				</div><!---end-row-->
			</div><!---end-container-->
		</div>
	`;
	
var footer=document.getElementsByTagName("footer");
	footer[0].innerHTML=`
		<div class="bg-black">
			<div class="container pt-5">
				<div class="row px-5">
					<div class="col-md-3">
						<div class="text-white">
							<h5>About</h5>
							<ul class="list-unstyled">
								<li>
									<img src="image/logo.png" alt="logo" height="114" class="bg-white w-100">
									<p class="lh-sm">
										Welcome to Omkar Multispecialty Hospital, your number one source for all things Medical Services. We're dedicated to giving you the very best of your Health Treatments, with a focus on Gynecological and Obstetric Treatment, ICU Treatment, Orthopedic and Trauma Treatment, laparoscopic Treatment, Endoscopy and abdominal examination and treatment, Heart diseases and respiratory diseases Treatments and All Medical Treatments.
									</p>
								</li>
								<li>
									<div class="fs-4">
										<a href="#" class="text-white mx-2"><i class="fa-brands fa-facebook-f"></i></a>
										<a href="#" class="text-white mx-2"><i class="fa-brands fa-twitter"></i></a>
										<a href="#" class="text-white mx-2"><i class="fa-brands fa-linkedin-in"></i></a>
										<a href="#" class="text-white mx-2"><i class="fa-brands fa-instagram"></i></a>
									</div>
								</li>
							</ul>
						</div>
					</div><!---end-column-->
					<div class="col-md-3">
						<div class="text-white">
							<h5>Useful Links</h5>
							<ul class="list-unstyled">
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Home</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none">  About</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Doctors</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none">  Gallery</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Contact us</a></li>
							</ul>
						</div>
					</div><!---end-column-->
					<div class="col-md-3">
						<div class="text-white">
							<h5>Department</h5>
							<ul class="list-unstyled">
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> ICU UNIT</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Gynecological and Obstetric</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Orthopedic and Trauma Unit</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Surgical Unit</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Medical Unit</a></li>
								<li class="py-2"><i class="fa-solid fa-angle-right"></i><a href="#" class="text-white text-decoration-none"> Special Facility</a></li>
							</ul>
						</div>
					</div><!---end-column-->
					<div class="col-md-3">
						<div class="text-white">
							<h5>Contact Us</h5>
							<ul class="list-unstyled">
								<li class="py-2"><a href="#" class="text-white text-decoration-none"><i class="fa-solid fa-location-dot"></i> Uslapur Opposite Indian Oil Petrol Pump Bilaspur, Chhattisgarh 495001</a></li>
								<li class="py-2"><a href="#" class="text-white text-decoration-none"><i class="fa-solid fa-phone"></i> 82853 66803</a></li>
								<li class="py-2"><a href="#" class="text-white text-decoration-none"><i class="fa-solid fa-phone"></i> 82853 66803</a></li>
								<li class="py-2"></i><a href="#" class="text-white text-decoration-none"><i class="fa-solid fa-envelope"></i> omkarhospital@gmail.com</a></li>
							</ul>
						</div>
					</div><!---end-column-->
				</div><!---end-row-->
			</div><!---end-container-->
			<p class="text-white text-center border-top py-1">Copyright © 2020. Design & Developed by Omkar Hospital</p>
		</div>
	`;