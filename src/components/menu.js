import meal1 from './imgs/Avocado-Chicken-Salad.png';
import meal2 from './imgs/EggFriedRice.png';
import meal3 from './imgs/Split-Lobster-Herb-Butter.png';
import meal4 from './imgs/sweet+potato+soup.png';
import drink1 from './imgs/caramel-milkshake.png';
import drink2 from './imgs/Frappe.png';
import drink3 from './imgs/strawberry.png';
import drink4 from './imgs/Chocolate.png';

const pageContent = `<section id="menu">
            <div class="center-container">
                <div class="menu-content">
                    <div class="menu-content-info">
                        <h2>Main Course</h2>
                        <div class="menu-card">
                            <img src="${meal1}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                        <div class="menu-card">
                            <img src="${meal2}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                        <div class="menu-card">
                            <img src="${meal3}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                        <div class="menu-card">
                            <img src="${meal4}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                    </div>

                    <div class="menu-content-info">
                        <h2>Drinks</h2>
                        <div class="menu-card">
                            <img src="${drink1}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                        <div class="menu-card">
                            <img src="${drink2}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                        <div class="menu-card">
                            <img src="${drink3}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                        <div class="menu-card">
                            <img src="${drink4}" alt="temp img">
                            <div class="menu-desc">
                                <h3 class="item-name">name</h3>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipis?</p>
                                <p class="price">$55</p>
                            </div>
                            <button>order</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>`;
function menuPage() {
    const page = document.querySelector('#content');
    page.innerHTML = pageContent;
}


export default menuPage;