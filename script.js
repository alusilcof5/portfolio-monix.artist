
    // Enhanced Filter System
    const filterBtns = document.querySelectorAll('.filter-btn');
    const artworkCards = document.querySelectorAll('.artwork-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        
        artworkCards.forEach((card, index) => {
          const category = card.dataset.category;
          
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 100);
          } else {
            card.classList.remove('visible');
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });

    // Enhanced Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-up, .artwork-card').forEach(el => {
      observer.observe(el);
    });

    // Initialize artwork cards visibility
    setTimeout(() => {
      artworkCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 150);
      });
    }, 500);

    // Smooth scroll for internal links
    document.querySelectorAll('a[href]="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero img');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0001})`;
      }
    });
