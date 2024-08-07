document.addEventListener("DOMContentLoaded", function() {
    const cottages = {
        'cottage23': {
            title: 'COTTAGE 23',
            location: '101/23 Bauddaloka Road, Kurunegala, 60000 Kurunegala, Sri Lanka',
            info: 'Cottage 23 is a luxury apartment located in the middle of Kurunegala town.\n\nFree from urban noise, Cottage 23 is a privacy-protected property equipped with:\n A/C\n TV\n Fan\n Kitchen\n Hot Water & Hot Tub\n Washing Machine\n Refrigerator\n Gas Cooker\n and other necessary amenities (e.g., Rice Cooker).\n\n Fully tiled, it features one Queen size double bed, a single bed, and a rooftop terrace.\n\nOccupants can enjoy a garden rich with trees.\n Free parking is available.\n\nThe host is a professional who loves providing friendly accommodation.\n\n The neighborhood is decent, with no noises or interference, ensuring privacy.\n\nOffering garden views, the apartment features a private entrance, sun terrace, free Wifi, and free private parking. \n\nEach air-conditioned unit includes a \ndesk,\n kettle,\n oven,\n microwave,\n safety deposit box,\n flat-screen TV,\n balcony,\n and private bathroom with a hot tub. \n\nThere is also a dining area and a fully equipped kitchen with a toaster,\n fridge,\n and stovetop.\n\n Bed linen and towels are provided in each unit.\n\nBoth bicycle and car rental services are available at the apartment, and cycling can be enjoyed nearby.',
            facilities: `<br>
                <div class="facility">
                    <i class="fas fa-parking"></i> Free on-site parking
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-shuttle-van"></i> Airport shuttle (free)
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-wifi"></i> Free Wifi
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-snowflake"></i> Air conditioning
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-users"></i> Family rooms
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-umbrella-beach"></i> Balcony
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-eye"></i> View
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-hot-tub"></i> Hot tub
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-bath"></i> Private Bathroom
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-clock"></i> Check-In 6:00 AM
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-clock"></i> Check-Out 3:00 PM
                </div>`,
            locationDetails: 'Set within 43 km of Kandy Royal Botanic Gardens.\n\n Within 43 km of Kandy City Center Shopping Mall in Kurunegala, Cottage 23 offers accommodation with seating area.\n\n There is a private entrance at the apartment for the convenience of those who stay.\n\nThe location is within walking distance of supermarkets and food outlets',
            view360: 'https://www.google.com/maps/embed?pb=!3m2!1sen!2slk!4v1721208606074!5m2!1sen!2slk!6m8!1m7!1szJR-uuWRjdZ7FsVGgMUOgg!2m2!1d7.483433189633043!2d80.35567112153298!3f228.68765!4f0!5f0.7820865974627469',
            imageCounts: {
                apartment: 7,
                exterior: 11,
                rooms: 20,
                kitchen: 18,
                bathroom: 11
            },
            contact: 'Whatsapp:\n 071 774 9955'
        },
        'metrostay': {
            title: 'Metro Stay',
            location: ' 101 / 3 Bauddhaloka Mawatha, Kurunegala, 60000 Kurunegala, Sri Lanka ',
            info: ' Metro Stay features rooms with air conditioning and a private bathroom in Kurunegala.\n\n Private parking is available on site at this recently renovated property. \n\nThe apartment provides garden views,\n a sun terrace,\n a 24-hour front desk,\n and free WiFi\n is available throughout the property.\n\nEach unit is equipped with a fully equipped kitchen with \na microwave,\n a seating area,\n a flat-screen TV,\n a washing machine,\n and a private bathroom with walk-in shower \nand free toiletries.\n\n A fridge,\n a stovetop \nand kitchenware are also provided,\n as well as a kettle.\n\nAt the apartment complex, each unit is equipped with bed linen and towels.\n\nA bicycle rental service is available at the apartment.',
            facilities: `<br>
                <div class="facility">
                    <i class="fas fa-parking"></i> Free on-site parking
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-bath"></i> Private bathroom
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-wifi"></i> Free WiFi
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-eye"></i> View
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-snowflake"></i> Air conditioning
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-users"></i> Family rooms
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-smoking-ban"></i> Non-smoking rooms
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-bath"></i> Bath
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-fan"></i> Air-conditioned with fans
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-tachometer-alt"></i> Tiled floor
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-bed"></i> Two queen size beds for four
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-utensils"></i> Fully Equipped Modern Pantry
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-soap"></i> Washing machine
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-parking"></i> Free ample parking
                </div>
                <div class="facility">
                    <i class="fas fa-clock"></i> Check-In 14:00 PM
                </div> <br><br>
                <div class="facility">
                    <i class="fas fa-clock"></i> Check-Out 11:00 AM
                </div>`,
            locationDetails: 'Located in the heart of the town, 1 Km way from the Clock tower of Kurunegala City.\n\n Calm and quite, green environment.\n\n Isolated Building in a 15 perches land.\n\n 100% privacy assured.\n\n Close proximity to all the key places of the city,\n Food stalls (200 m),\n super markets ( 200 m),\n stores (100m),\n Gas/Fuel Stations (150m),\n Wine/Liquor shops (150m).',
            view360: 'https://www.google.com/maps/embed?pb=!3m2!1sen!2slk!4v1721277781125!5m2!1sen!2slk!6m8!1m7!1shOdgOIIGCyUeLWXE529EnA!2m2!1d7.483327072930331!2d80.35573875637508!3f242.15569!4f0!5f0.7820865974627469',
            imageCounts: {
                apartment: 5,
                exterior: 6,
                rooms: 23,
                kitchen: 7,
                bathroom: 5
            },
            contact: 'Whatsapp:\n 071 977 9955'
        },
        'vindy': {
            title: 'WINDY HANTHANA',
            location: 'No 75, Paradaise Park, Thapodarama Mawatha, Hanthana, Kandy, Kandy, Sri Lanka',
            info: 'Windy Hanthana provides accommodation with seating area.\n\nThis property offers access to a terrace,\n free private parking,\n free WiFi.\n\n The accommodation provides a 24-hour front desk and a shared kitchen for guests. \n\n The guest house offers certain units that feature a balcony and mountain view, and the units come with a private bathroom and a wardrobe.\n\nAt the guest house, every unit includes bed linen and towels.\n\n A selection of options including warm dishes and juice is served for the Asian breakfast.\n\nGuests can also relax in the garden or in the shared lounge area.',
            facilities: `<br>
            <div class="facilities">
                <div class="facility">
                    <i class="fas fa-house"></i> Entire House
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-users"></i> Sleeps 14
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-bed"></i> 7 Bedrooms
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-bath"></i> 7 Bathrooms
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-bed"></i> 10 Beds
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-snowflake"></i> Air Conditioning
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-umbrella-beach"></i> Balcony
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-child"></i> Kid Friendly
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-crib"></i> Crib
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-utensils"></i> Kitchen
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-iron"></i> Ironing Board
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-wifi"></i> Free WiFi
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-parking"></i> Free Parking
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-smoking-ban"></i> Smoke Free
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-clock"></i> Check-in Time: 2:00 PM
                </div><br><br>
                <div class="facility">
                    <i class="fas fa-clock"></i> Check-out Time: 11:00 AM
                </div>
            </div>`,
            locationDetails: 'Set within 3.4 km of Bogambara Stadium and 3.5 km of Ceylon Tea Museum in Kandy. \n\n Kandy railway station is 3.7 km from the guest house, while Kandy City Center Shopping Mall is 4.3 km away. \n\n The nearest airport is Victoria Reservoir Kandy Seaplane Base Airport, 27 km from Windy Hanthana.',
            view360: 'https://www.google.com/maps/embed?pb=!3m2!1sen!2slk!4v1721277584804!5m2!1sen!2slk!6m8!1m7!1sU1aRUbkpNjQNrh9-WElJeg!2m2!1d7.278350025911004!2d80.62723367731914!3f186.23708!4f0!5f0.7820865974627469',
            imageCounts: {
                apartment: 7,
                exterior: 7,
                rooms: 21,
                kitchen: 5,
                bathroom: 8
            },
            contact: 'Whatsapp:\n 070 227 9955'
        }
    };

    //load map
    function loadIframe(url) {
        const mapContainer = document.getElementById('mapContainer');
        if (!mapContainer) {
            console.error('mapContainer element not found');
            return;
        }
        mapContainer.innerHTML = '';
        let iframe = document.createElement('iframe');
        iframe.width = "100%";
        iframe.height = "450";
        iframe.style.border = "0";
        iframe.allowFullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.src = url;
        mapContainer.appendChild(iframe);
        iframe.addEventListener('click', open360ViewModal);
    }
    
    //to enlarge image
    function createGallerySection(title, pathBase, count) {
        const section = document.createElement('div');
        const header = document.createElement('p');
        const captionText = document.getElementById("caption");
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        header.innerText = title;
        section.appendChild(header);

        for (let i = 1; i <= count; i++) {
            const img = document.createElement('img');
            img.src = `${pathBase}${i}.jpg`;
            img.alt = title;
            img.style.width = '70px'; 
            img.style.height = '70px';
            img.style.cursor = 'pointer'; 
            img.onclick = function() {
                showModal(img.src);
                captionText.innerHTML = title;
            };
            section.appendChild(img);
        }

        return section;
    }

    //updated table
    function updateTable(set) {
        const data = cottages[set];
        if (data) {
            document.getElementById('cottage-title').innerText = data.title;
            document.getElementById('cottage-location').innerText = data.location;
            document.getElementById('cottage-info').innerText = data.info;
            document.getElementById('facilities').innerHTML = data.facilities;
            document.getElementById('location').innerText = data.locationDetails;
            loadIframe(data.view360);

            // Update gallery
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = ''; 
           if (set === 'cottage23') {
                imageContainer.appendChild(createGallerySection('Apartment', 'images/cottage23/apartment/', data.imageCounts.apartment));
                imageContainer.appendChild(createGallerySection('Exterior', 'images/cottage23/exterior/', data.imageCounts.exterior));
                imageContainer.appendChild(createGallerySection('Rooms', 'images/cottage23/rooms/', data.imageCounts.rooms));
                imageContainer.appendChild(createGallerySection('Kitchen', 'images/cottage23/kitchen/', data.imageCounts.kitchen));
                imageContainer.appendChild(createGallerySection('Bathroom', 'images/cottage23/bathroom/', data.imageCounts.bathroom));
            } else if (set === 'metrostay') {
                imageContainer.appendChild(createGallerySection('Apartment', 'images/MetroStay/apartment/', data.imageCounts.apartment));
                imageContainer.appendChild(createGallerySection('Exterior', 'images/MetroStay/exterior/', data.imageCounts.exterior));
                imageContainer.appendChild(createGallerySection('Rooms', 'images/MetroStay/rooms/', data.imageCounts.rooms));
                imageContainer.appendChild(createGallerySection('Kitchen', 'images/MetroStay/kitchen/', data.imageCounts.kitchen));
                imageContainer.appendChild(createGallerySection('Bathroom', 'images/MetroStay/bathroom/', data.imageCounts.bathroom));
            } else if (set === 'vindy') {
                imageContainer.appendChild(createGallerySection('Apartment', 'images/Windy/apartment/', data.imageCounts.apartment));
                imageContainer.appendChild(createGallerySection('Exterior', 'images/Windy/exterior/', data.imageCounts.exterior));
                imageContainer.appendChild(createGallerySection('Rooms', 'images/Windy/rooms/', data.imageCounts.rooms));
                imageContainer.appendChild(createGallerySection('Kitchen', 'images/Windy/kitchen/', data.imageCounts.kitchen));
                imageContainer.appendChild(createGallerySection('Bathroom', 'images/Windy/bathroom/', data.imageCounts.bathroom));
            }

            document.getElementById('contact').innerText = data.contact;
        } else {
            console.error('No data found for the selected cottage');
        }
    }

    //image enlarged
    function showModal(src) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const caption = document.getElementById('caption');

        modal.style.display = "block";
        modalImg.src = src;
        caption.innerText = src; 
    }

    document.querySelector('.close').onclick = function() {
        document.getElementById('imageModal').style.display = "none";
    };
    document.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    window.updateTable = updateTable;
});
