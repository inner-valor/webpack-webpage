import img from './imgs/Map_of_North_America.jpg';

const pageContent = `<section id="delivery">
            <div class="center-container">
                <div class="delivery-container">
                    <form action="">
                        <div class="delivery-option">
                            <div>
                                <label for="pickup">request pickup:</label>
                                <input type="radio" name="delivery" id="pickup" required>
                            </div>
                            <div>
                                <label for="deliver">deliver here:</label>
                                <input type="radio" name="delivery" id="deliver" required>
                            </div>
                            <div>
                                <label for="schedule">schedule:</label>
                                <input type="time" name="schedule" id="schedule" required>
                            </div>
                        </div>
                        <div class="customer-info">
                            <div>
                                <label for="name">name:</label>
                                <input type="text" name="name" id="name" required>
                            </div>
                            <div>
                                <label for="address">address:</label>
                                <input type="text" name="address" id="address" required>
                            </div>
                            <div>
                                <button type="button">order</button>
                            </div>
                        </div>
                    </form> 
                </div>

                <div class="location">
                    <h1>Map</h1>
                    <div id="map">
                        <img src="${img}" alt="map">
                    </div>
                </div>

            </div>
        </section>`;
function deliveryPage() {
    const page = document.querySelector('#content');
    page.innerHTML = pageContent;
}


export default deliveryPage;