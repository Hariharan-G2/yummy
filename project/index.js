let currentImageIndex = 0;
    const images = ['image.jpg', 'form.jpg', 'bg-3.jpg'];
    const titles = ['Welcome to YUMMY...', 'Discover Culinary Excellence', 'Indulge in Delightful Tastes'];
    const texts = [
        '"Elevate your dining experience at Yummy.<br> Secure your table to enjoy a seamless blend of exquisite flavors,<br> warm ambiance, and impeccable service. Your reservation is the key to a night of culinary delight."',
        '"Experience culinary excellence like never before. Our chefs craft dishes that delight the senses and create unforgettable memories. Reserve your table for a journey into taste perfection."',
        '"Indulge in delightful tastes and a warm ambiance at Yummy. Our commitment to excellence ensures a memorable dining experience. Secure your table for a night filled with culinary wonders."'
    ];

    function changeSlide(index) {
        document.getElementById('slider').style.animation = 'none'; 
        setTimeout(() => {
            document.getElementById('slider').style.animation = 'fadeInOut 3s'
            document.getElementById('slider').style.backgroundImage = `url('${images[index]}')`;
        }, 50);

        document.getElementById('sliderTitle').innerHTML = titles[index];
        document.getElementById('sliderText').innerHTML = texts[index];


        const bullets = document.querySelectorAll('.bullet');
        bullets.forEach((bullet, i) => {
            if (i === index) {
                bullet.classList.add('active');
            } else {
                bullet.classList.remove('active');
            }
        });
    }

    function createBullets() {
        const bulletContainer = document.getElementById('bulletContainer');
        for (let i = 0; i < images.length; i++) {
            const bullet = document.createElement('div');
            bullet.classList.add('bullet');
            bullet.addEventListener('click', () => changeSlide(i));
            bulletContainer.appendChild(bullet);
        }
    }

    createBullets();
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        changeSlide(currentImageIndex);
    }, 3000); 
	
	
	
	 const offersData = [
      {
        image: 'events-2.jpg',
        title: 'Special Weekend Dinner',
        description: 'Enjoy a delightful weekend dinner with our special menu. Exquisite dishes and a cozy atmosphere await you!'
      },
      {
        image: 'lunch_combo.jpg',
        title: 'Lunch Combo Deal',
        description: 'Grab our lunch combo deal at a special price. Choose from a variety of options to satisfy your taste buds.'
      }
     
    ];

   
    function updateOffer(offerIndex) {
      const offer = offersData[offerIndex];
      const offerElement = document.getElementById('offer1'); 
      if (offerElement) {
        offerElement.style.opacity = 0; 
        offerElement.style.transform = 'translateY(20px)';
        setTimeout(() => {
          
          offerElement.innerHTML = `
            <img src="${offer.image}" alt="${offer.title}">
            <div class="offer-content">
              <h2>${offer.title}</h2>
              <p>${offer.description}</p>
            </div>
          `;
          offerElement.style.opacity = 1; 
          offerElement.style.transform = 'translateY(0)'; 
        }, 500);
      }
    }

    
    let currentOfferIndex = 0;
    updateOffer(currentOfferIndex);

    
    setInterval(() => {
      currentOfferIndex = (currentOfferIndex + 1) % offersData.length;
      updateOffer(currentOfferIndex);
    }, 6000);