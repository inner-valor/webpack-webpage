const pageContent = `<section id="home">
            <div class="center-container">
                <div class="home-content">
                    <div class="home-content-info">
                        <h2>Welcome</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat quae quidem iusto quia, ea pariatur perferendis, eligendi est nostrum blanditiis vitae debitis ipsa magni, eos nulla accusantium cum mollitia.</p>
                    </div>
                    <button class="menu-btn">to the menu &rightarrow;</button>
                </div>

                <div class="home-content">
                    <div class="home-content-info">
                        <h2>Delivery</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat quae quidem iusto quia, ea pariatur perferendis, eligendi est nostrum blanditiis vitae debitis ipsa magni, eos nulla accusantium cum mollitia.</p>
                    </div>
                    <button class="delivery-btn">delivery options &rightarrow;</button>
                </div>

                <div class="home-content">
                    <div class="home-content-info">
                        <h2>learn about us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat quae quidem iusto quia, ea pariatur perferendis, eligendi est nostrum blanditiis vitae debitis ipsa magni, eos nulla accusantium cum mollitia.</p>
                    </div>
                    <button class="about-btn">About us &rightarrow;</button>
                </div>

                

            </div>
        </section>`;
function homePage() {
    const page = document.querySelector('#content');
    page.innerHTML = pageContent;
}


export default homePage;

