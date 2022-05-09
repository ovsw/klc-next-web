const Home3About = ({ blok }) => {
  const { eyebrow_text, heading_text, intro_text, main_image } = blok;

  return (
    <section className="section-padding pt-0 about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="image_box wow fadeInLeft">
              <img
                src="assets/images/about/image_1.jpg"
                alt="img"
                className="image-fit image_1 rounded-circle"
              />
              <img
                src="assets/images/about/image_2.jpg"
                alt="img"
                className="image-fit image_2 rounded-circle"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="section-title left-align wow fadeInUp">
              <p className="subtitle">
                <i className="fal fa-book" />
                {eyebrow_text || "Eyebrow text goes here"}
              </p>
              <h3 className="title">{heading_text || "Heading goes here"}</h3>
              <p>{intro_text || "intro text goes here"} </p>
            </div>
            <ul className="about_list">
              <li className=" wow fadeInDown">
                <div className="icon">
                  <img
                    src="assets/images/icons/icon_5.png"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-2">Certified Coach</h6>
                  <p className="mb-0">
                    Quis autem vel eum iure reprehenderit quein ea voluptate
                    velit esse quam
                  </p>
                </div>
              </li>
              <li className=" wow fadeInDown">
                <div className="icon">
                  <img
                    src="assets/images/icons/icon_5.png"
                    alt="img"
                    className="image-fit"
                  />
                </div>
                <div className="text">
                  <h6 className="mb-2">Coach Certification Program</h6>
                  <p className="mb-0">
                    Quis autem vel eum iure reprehenderit quein ea voluptate
                    velit esse quam
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home3About;
