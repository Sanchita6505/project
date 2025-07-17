import React from 'react';
import './App.css';

const popularCourses = [
  {
    imgSrc: 'https://imgs.search.brave.com/mnc8O18whf2GJOog9I0oaNIftIIivlobHCPHDQSSuoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNDA3MjIx/NjA5MjQvVG9wLTEw/LVdlYi1EZXZlbG9w/bWVudC1Db3Vyc2Vz/LUZvci1CZWdpbm5l/cnMtLTEud2VicA',
    price: '$149.00',
    title: 'Web-D Course for Beginners',
    instructor: 'Aditya Kaushik',
    duration: '1.49 Hrs',
    students: '30 Students',
  },
  {
    imgSrc: 'https://imgs.search.brave.com/ZYt-WaIZyyRlFZAWZXe-qJnupHj97wlyQoRKKOgShUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdG12/YW1haHM0MHV4LmNs/b3VkZnJvbnQubmV0/L3B1YmxpYy9jb3Vy/c2UvY291cnNlLTMx/NzYtTGVhcm5DUHJv/Z3JhbW1pbmcucG5n', 
    price: '$249.00',
    title: 'C++ DSA Course for Beginners',
    instructor: 'Ariv Lamba',
    duration: '1.49 Hrs',
    students: '40 Students',
  },
  {
    imgSrc: 'https://imgs.search.brave.com/rRGLnuO88yU7fvj0t_6XihsYLvu_KzVZ9SpvrGqoJOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMjExMTQx/NzUwNTcvMTBCZXN0/RGF0YVN0cnVjdHVy/ZXNhbmRBbGdvcml0/aG1zQ291cnNlcy5w/bmc',
    price: '$349.00',
    title: 'C++ DSA Course for intermediate',
    instructor: 'Ariv Lamba',
    duration: '1.49 Hrs',
    students: '20 Students',
  },
];

const instructors = [
    {
        name: 'F1 Instructor',
        designation: 'Fast teaching style',
        imgSrc: 'https://imgs.search.brave.com/nkDkUfW_4c0-1H3-TffQLbUM6dP0vayas7ebS4lJio4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a3ltaWxsbWFuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvZjEv/cGFnZXMvZHJpdmVy/LXByb2ZpbGVzL2Ry/aXZlci1mYWNlcy9j/YXJsb3Mtc2Fpbnot/ZjEtZHJpdmVyLXBy/b2ZpbGUtcGljdHVy/ZS5wbmc' 
    },
    {
      
        name: 'Charles leclerc',
        designation: 'Senior Instructor',
        imgSrc: 'https://imgs.search.brave.com/MBH7bgaVhplI-l8O_woNZnHU5xcfhO7YT8XjyMKczjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a3ltaWxsbWFuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvZjEv/cGFnZXMvZHJpdmVy/LXByb2ZpbGVzL2Ry/aXZlci1mYWNlcy9j/aGFybGVzLWxlY2xl/cmMtZjEtZHJpdmVy/LXByb2ZpbGUtcGlj/dHVyZS5wbmc'
    },
    {
        name: 'Max Verstappen',
        designation: 'Tu tu tu tu ',
        imgSrc: 'https://imgs.search.brave.com/S9AC8wSAbYc2tEBndY2cykhFshnaEoo85EX3gMgmBB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zNDAz/MjAucGNkbi5jby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/My9NYXgtVmVyc3Rh/cHBlbi5wbmc' 
    }
];

const testimonials = [
    {
        name: 'turtle',
        profession: 'offside',
        text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.',
        imgSrc: 'https://imgs.search.brave.com/b18vH4denbXn_n7pSfX1njE3jfkFDfB4-y7uPke8hMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU3LzIwMTktMDct/MTdfU0dfRHluYW1v/X0RyZXNkZW5fdnMu/X1BhcmlzX1NhaW50/LUdlcm1haW5fYnlf/U2FuZHJvX0hhbGFu/ayVFMiU4MCU5MzEy/OV8oY3JvcHBlZCku/anBn' 
    },
    {
        name: 'Neymar Jr',
        profession: 'Prince',
        text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.',
        imgSrc: 'https://imgs.search.brave.com/UbxNNqaiEX1ZkM0rktHGXroPvdnMVGenlAUDZkSMFzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkyL05leW1hcl9Q/U0cuanBn' 
    },
    {
        name: 'Achrf hakimi',
        profession: 'mom\'s boy',
        text: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.',
        imgSrc: 'https://imgs.search.brave.com/7NcS5WZkz0wA76DWA9fiHetL524ZYwIbiJOUqn4eC3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5wc2cuZnIvaW1h/Z2UvdXBsb2FkL2Nf/bGltaXQsd18zODQx/L2ZfYXZpZi9xXzg1/L3YxL2hlcm9fMjQt/MjVfMDAxNl9oYWtp/bWlfa3pkbXJ4P19h/PUJBVkFaR0U3MA'
    }
];

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <h1 className="logo">☰ eLEARNING</h1>
      <ul className="nav-links">
        <li><a href="#home" className="active">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#courses">COURSES</a></li>
        <li><a href="#pages">PAGES </a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <a href="#join" className="btn btn-primary join-now-btn">Join Now →</a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="hero">
    <div className="hero-content">
      <p className="subtitle">BEST ONLINE COURSES</p>
      <h1>The Best Online Learning Platform</h1>
      <p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
      <div className="hero-buttons">
        <a href="#readmore" className="btn btn-primary">Read More</a>
        <a href="#join" className="btn btn-light">Join Now</a>
      </div>
    </div>
    <div className="hero-slider-controls">
      <button>{"<"}</button>
      <button>{">"}</button>
    </div>
  </header>
);

const Features = () => (
  <section className="features container">
    <div className="feature-card primary-bg">
      <div className="feature-icon">🎓</div>
      <h3>Skilled Instructors</h3>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon">🌐</div>
      <h3>Online Classes</h3>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon">🏠</div>
      <h3>Home Projects</h3>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
    <div className="feature-card">
      <div className="feature-icon">📚</div>
      <h3>Book Library</h3>
      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
  </section>
);

const About = () => (
  <section className="about container">
    <div className="about-image">
      <img src="https://imgs.search.brave.com/4BeLf6liM05QByfAbzjvnewmzTe6eWHUeRgpoXSw9l8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1l/dS1ub3J0aC0xLmFt/YXpvbmF3cy5jb20v/cHkzLnZpc2l0c3dl/ZGVuLmNvbS9vcmln/aW5hbF9pbWFnZXMv/NDE3OV9EMDI2XzAw/MTAyX1JDMi1DTVNU/ZW1wbGF0ZS5qcGc" alt="About eLearning" />
    </div>
    <div className="about-content">
      <p className="section-subtitle">ABOUT US</p>
      <h2 className="section-title">Welcome to eLearning</h2>
      <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
      <p>Erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
      <ul className="about-list">
        <li>→ Skilled Instructors</li>
        <li>→ Online Classes</li>
        <li>→ International Certificate</li>
        <li>→ Skilled Instructors</li>
        <li>→ Online Classes</li>
        <li>→ International Certificate</li>
      </ul>
      <a href="#readmore" className="btn btn-primary">Read More</a>
    </div>
  </section>
);

const CoursesCategories = () => (
    <section className="courses-categories container">
        <div className="section-header">
            <p className="section-subtitle">CATEGORIES</p>
            <h2 className="section-title">Courses Categories</h2>
        </div>
        <div className="categories-grid">
            <div className="category-item large-item">
                <img src="https://imgs.search.brave.com/k7_gokLFqayKBR4y-DqfyxqV0uhwAMYU621F4Egb_W4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by91aS13ZWJzaXRl/LWNyZWF0aXZlLWRl/c2lnbmVyLXdvcmtz/cGFjZS13aXRoLXRl/bXBsYXRlLWZyYW1l/d29ya185MjYxOTkt/MzgxOTk4Mi5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw" alt="Web Design" />
                <div className="category-info">
                    <h3>Web Design</h3>
                    <p>49 Courses</p>
                </div>
            </div>
            <div className="category-item">
                <img src="https://imgs.search.brave.com/jsdXhpFY8Y7qYT1Ue7WGZuVQT_D-Cgc4tXw1zsNL3lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGRG9K/YVBzQWMvMi8wLzE2/MDB3L2NhbnZhLWdy/YXBoaWMtZGVzaWdu/LXdoaXRlLWNvbXBv/c2l0aW9uLWluc3Rh/Z3JhbS1wb3N0LUow/TGRuWVhnRGlnLmpw/Zw" alt="Graphic Design" />
                <div className="category-info">
                    <h3>Graphic Design</h3>
                    <p>49 Courses</p>
                </div>
            </div>
            <div className="category-item">
                <img src="https://imgs.search.brave.com/OfZzFYZT829tC_G1-k3D5bwE7mWX7ciC6o7urqXiZik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTcy/ODkyODA4L3Bob3Rv/L3ZpZGVvLWVkaXRp/bmctc29mdHdhcmUt/Y2xvc2UtdXAuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdf/WGV0S1ROc1puc1hr/OC1CM2VTeFV0NGRE/M0hjeUN3ZDVDanl5/ZDhTSHc9" alt="Video Editing" />
                <div className="category-info">
                    <h3>Video Editing</h3>
                    <p>49 Courses</p>
                </div>
            </div>
            <div className="category-item tall-item">
                <img src="https://imgs.search.brave.com/UoruVLbLkTCPFbLd5Ag78SJ5AHEmy4V8G0QWYd4plIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/NTU2LzE1OS9zbWFs/bC9kaWdpdGFsLW1h/cmtldGluZy1vbmxp/bmUtbWFya2V0aW5n/LWFuZC1kaWdpdGFs/LW1hcmtldGluZy1i/YWNrZ3JvdW5kLXBo/b3RvLmpwZw" alt="Online Marketing" />
                 <div className="category-info">
                    <h3>Online Marketing</h3>
                    <p>49 Courses</p>
                </div>
            </div>
        </div>
    </section>
);

const PopularCourses = () => (
    <section className="popular-courses container">
        <div className="section-header">
            <p className="section-subtitle">COURSES</p>
            <h2 className="section-title">Popular Courses</h2>
        </div>
        <div className="courses-grid">
            {popularCourses.map((course, index) => (
                <div className="course-card" key={index}>
                    <div className="course-image">
                        <img src={course.imgSrc} alt={course.title} />
                        <div className="course-buttons">
                            <a href="#readmore" className="btn-course">Read More</a>
                            <a href="#join" className="btn-course">Join Now</a>
                        </div>
                    </div>
                    <div className="course-info">
                        <p className="course-price">{course.price}</p>
                        <div className="course-rating">★★★★★ (123)</div>
                        <h3>{course.title}</h3>
                    </div>
                    <div className="course-footer">
                        <span>👤 {course.instructor}</span>
                        <span>🕒 {course.duration}</span>
                        <span>👥 {course.students}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
// Make sure 'instructors' and 'testimonials' arrays are defined or imported

const Instructors = () => (
    <section className="instructors container">
        <div className="section-header">
            <p className="section-subtitle">INSTRUCTORS</p>
            <h2 className="section-title">Expert Instructors</h2>
        </div>
        <div className="instructors-grid">
            {instructors.map((instructor, index) => (
                <div className="instructor-card" key={index}>
                    <img src={instructor.imgSrc} alt={instructor.name} />
                    <h3>{instructor.name}</h3>
                    <p>{instructor.designation}</p>
                    <div className="social-links">
                        <a href="#facebook">f</a>
                        <a href="#twitter">t</a>
                        <a href="#instagram">i</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const Testimonials = () => (
    <section className="testimonials container">
        <div className="section-header">
            <p className="section-subtitle">TESTIMONIAL</p>
            <h2 className="section-title">Our Students Say!</h2>
        </div>
        <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
                <div
                    className={`testimonial-card ${index === 1 ? 'active' : ''}`}
                    key={index}
                >
                    <img src={testimonial.imgSrc} alt={testimonial.name} />
                    <h3>{testimonial.name}</h3>
                    <p className="profession">{testimonial.profession}</p>
                    <p className="testimonial-text">{testimonial.text}</p>
                </div>
            ))}
        </div>
        <div className="testimonial-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
        </div>
    </section>
);


const Footer = () => (
    <footer className="footer">
        <div className="container footer-content">
            <div className="footer-column">
                <h4>Quick Link</h4>
                <ul>
                    <li><a href="#about">› About Us</a></li>
                    <li><a href="#contact">› Contact Us</a></li>
                    <li><a href="#privacy">› Privacy Policy</a></li>
                    <li><a href="#terms">› Terms & Condition</a></li>
                    <li><a href="#help">› FAQs & Help</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Contact</h4>
                <p>📍 123 Street, New York, USA</p>
                <p>📞 +012 345 67890</p>
                <p>✉ info@example.com</p>
                <div className="social-links-footer">
                    <a href="#twitter">t</a>
                    <a href="#facebook">f</a>
                    <a href="#youtube">y</a>
                    <a href="#linkedin">in</a>
                </div>
            </div>
            <div className="footer-column">
                <h4>Gallery</h4>
                <div className="gallery-grid">
                    <img src="https://imgs.search.brave.com/kJUxQ7mMZlUKyuK5n9d34mhMg9_QIlZ_6lJCy5AIqs0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZG1p/bi5jYXJlY291cnNl/cy5jb20vVXBsb2Fk/ZWRJbWFnZXMvSW1h/Z2VzL0hvbWVfUGFn/ZV9QaG90b3MvY2Rn/LmJvb2suNS5qcGc" alt="Gallery 1"/>
                    <img src="https://imgs.search.brave.com/5tFc5BJadm5liGB-BDNmXLSBKKpHvBYXx7nr54DepQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRp/YW5hb25saW5lLm9y/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMS9IaWdoLVNj/aG9vbC1Db3Vyc2Vz/LU9ubGluZS1pbi1J/bmRpYW5hLmpwZw" alt="Gallery 2"/>
                    <img src="https://imgs.search.brave.com/1jxuT0F9cKMYkMuLuY9JKu9gZjvn501-r2PoJO9354E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjMxMjIx/L3BuZ3RyZWUtb25s/aW5lLWVkdWNhdGlv/bi1mb3ItcHJpbWFy/eS1zY2hvb2wtc3R1/ZGVudHMtb25saW5l/LWVkdWNhdGlvbi1v/bmxpbmUtY291cnNl/cy1waG90b2dyYXBo/eS1waG90by1pbWFn/ZV8xNTU1MDM2Mi5w/bmc" alt="Gallery 3"/>
                    <img src="https://imgs.search.brave.com/4GdpZxpZKGmGtMgT_JcEOw-JpjW1e1oTrqjmYlvzgSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MjQxLzQzOS9zbWFs/bC9mb2N1c2VkLW1h/bi1wcml2YXRlLWZp/bmFuY2lhbC1hZHZp/c29yLWNvbmR1Y3Rz/LXRyYWluaW5nLWNv/dXJzZXMtZm9yLWlu/ZGl2aWR1YWxzLW9y/LWNvbXBhbmllcy1v/bmxpbmUtcGhvdG8u/SlBH" alt="Gallery 4"/>
                </div>
            </div>
            <div className="footer-column">
                <h4>Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                <p>Distributed By ThemeWagon</p>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#cookies">Cookies</a></li>
                    <li><a href="#help">Help</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                </ul>
            </div>
        </div>
    </footer>
);


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <CoursesCategories />
      <PopularCourses />
      <Instructors />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;