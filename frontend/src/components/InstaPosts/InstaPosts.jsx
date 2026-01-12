
const InstaPosts = () => {
     const instaPosts = [
        "./assets/images/insta-1.jpg",
        "./assets/images/insta-2.jpg",
        "./assets/images/insta-3.jpg",
        "./assets/images/insta-4.jpg",
        "./assets/images/insta-5.jpg",
        "./assets/images/insta-6.jpg",
        "./assets/images/insta-7.jpg",
        "./assets/images/insta-8.jpg"
    ];
    return (
        <section className="section insta-post">
            <ul className="insta-post-list has-scrollbar">
              {instaPosts.map((image, index) => (
                <li key={index} className="insta-post-item">
                  <img 
                    src={image} 
                    width="100" 
                    height="100" 
                    loading="lazy" 
                    alt="Instagram post"
                    className="insta-post-banner image-contain" 
                  />
                  <a href="#" className="insta-post-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </section>
    )
}

export default InstaPosts;