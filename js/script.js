(function () {
  const categories = ['Mac', 'iPhone', 'iPad'];
  const ulCat = document.createElement('ul');
  for (let i = 0; i < categories.length; i++) {
    const liCat = document.createElement('li');
    liCat.textContent = categories[i];
    ulCat.appendChild(liCat);
  }
  document.querySelector('[data-category]').appendChild(ulCat);

  const macList = [
    'MacBook Pro',
    'MacBook Air with M2 or M3 chip',
    'MacBook Air with M3 chip',
  ];

  const iphoneList = [
    'iPhone 15',
    'iPhone 15 Plus',
    'iPhone 14',
    'iPhone 13',
    'iPhone 13 mini',
  ];

  const ipadList = [
    'iPad Pro 11-inch',
    'iPad Air 11-inch',
    'iPad 11',
    'iPad mini',
  ];

  const info = {
    'MacBook Pro':
      'MacBook Pro empowers you to take on the most demanding projects',
    'MacBook Air with M2 or M3 chip':
      'Portable design — Lightweight and less than two centimetres thin, so you can take MacBook Air anywhere you go.',
    'MacBook Air with M3 chip':
      'With M3, M3 Pro or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects',
    'iPhone 15':
      '6.1-inch Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island',
    'iPhone 15 Plus':
      'Strong and light titanium design with Action button — a fast track to your favourite feature',
    'iPhone 14':
      '48MP Main camera for super-high-resolution photos and 3x Telephoto camera',
    'iPhone 13':
      'A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming',
    'iPhone 13 mini':
      'Dual-camera system for incredible low-light photos and videos',
    'iPad Pro 11-inch':
      'Apple M4 chip delivers outrageous performance for pro workflows and all-day battery life¹',
    'iPad Air 11-inch':
      'Ultra Retina XDR display² with ProMotion, P3­ wide colour and True Tone. Optional nano-texture glass.',
    'iPad 11':
      'Pro camera with LiDAR Scanner, and landscape 12MP Ultra Wide front camera with Centre Stage',
    'iPad mini':
      'Stay connected with Wi-Fi 6E and 5G for superfast downloads and high-quality streaming³',
  };

  const button = document.querySelector('[data-button]');
  button.style.display = 'none';

  const handler = (event) => {
    const parent = document.querySelector('[data-items-list]');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    const makeItemsList = (arr) => {
      const ulitems = document.createElement('ul');

      for (let i = 0; i < arr.length; i++) {
        const liCat = document.createElement('li');
        liCat.textContent = arr[i];
        ulitems.appendChild(liCat);

        const getInfo = (event) => {
          const infoBlock = document.querySelector('[data-info]');
          const deletePreviousP = infoBlock.querySelector('p');
          if (deletePreviousP) {
            infoBlock.removeChild(deletePreviousP);
          }
          const createInfo = document.createElement('p');
          for (const key in info) {
            if (liCat.textContent === key) {
              createInfo.textContent = info[key];
              document.querySelector('[data-info]').appendChild(createInfo);
              button.style.display = 'block';
            }
          }
        };
        liCat.addEventListener('click', getInfo);
      }
      document.querySelector('[data-items-list]').appendChild(ulitems);
    };
    button.addEventListener('click', (event) => {
      alert('Congratulations, you have purchased a product');
      window.location.reload();
    });

    if (event.target.textContent === 'Mac') {
      makeItemsList(macList);
    } else if (event.target.textContent === 'iPad') {
      makeItemsList(ipadList);
    } else if (event.target.textContent === 'iPhone') {
      makeItemsList(iphoneList);
    }
  };

  ulCat.addEventListener('click', handler);
})();
