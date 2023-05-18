import React from "react";

const ContactUs = () => {
  return (
    <>
      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n              hr.divider-vertical {\n                position: absolute;\n                right: 0;\n                top: 0;\n                width: 1px;\n                background-image: linear-gradient(180deg, transparent, hsl(0, 0%, 40%), transparent);\n                background-color: transparent;\n                height: 100%;\n              }\n            ",
                  }}
                />{" "}
                {/* Background image */}
                <div
                  className="p-5 bg-image"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1507838153414-b4b713384a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw5NjI0M3wwfDF8c2VhcmNofDJ8fG11c2ljfGVufDB8fHx8MTY3MDEyNDIzNg&ixlib=rb-4.0.3&q=80&w=1080")',
                    height: 300,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                  aria-controls="#picker-editor"
                />{" "}
                {/* Background image */}
                <div
                  className="card mx-4 mx-md-5 shadow-5-strong"
                  style={{
                    marginTop: "-100px",
                    background: "hsla(0, 0%, 100%, 0.8)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div className="card-body py-5 px-md-5">
                    <div className="row mb-5">
                      <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-phone fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">+91 234 544 89</h6>
                        <hr className="divider-vertical d-none d-lg-block" />
                      </div>
                      <div className="col-lg-4 col-md-6 mb-5 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-envelope fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">contactus@gmail.com</h6>
                        <hr className="divider-vertical d-none d-lg-block" />
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-map-marker-alt fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">
                          Lucknow, Uttar Pradesh
                        </h6>
                        <hr className="divider-vertical d-none d-lg-block" />
                      </div>
                    </div>
                    <form>
                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-6">
                          <form>
                            {/* Name input */}
                            <div className="form-outline mb-4">
                              {" "}
                              <input
                                type="text"
                                id="form4Example1"
                                className="form-control"
                              />{" "}
                              <label
                                className="form-label"
                                htmlFor="form4Example1"
                                style={{ marginLeft: 0 }}
                              >
                                Name
                              </label>
                              <div className="form-notch">
                                <div
                                  className="form-notch-leading"
                                  style={{ width: 9 }}
                                />
                                <div
                                  className="form-notch-middle"
                                  style={{ width: "42.4px" }}
                                />
                                <div className="form-notch-trailing" />
                              </div>
                            </div>{" "}
                            {/* Email input */}
                            <div className="form-outline mb-4">
                              {" "}
                              <input
                                type="email"
                                id="form4Example2"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form4Example2"
                                style={{ marginLeft: 0 }}
                              >
                                Email address
                              </label>
                              <div className="form-notch">
                                <div
                                  className="form-notch-leading"
                                  style={{ width: 9 }}
                                />
                                <div
                                  className="form-notch-middle"
                                  style={{ width: "88.8px" }}
                                />
                                <div className="form-notch-trailing" />
                              </div>
                            </div>{" "}
                            {/* Message input */}
                            <div className="form-outline mb-4">
                              {" "}
                              <textarea
                                className="form-control"
                                id="form4Example3"
                                rows={4}
                                defaultValue={""}
                              />{" "}
                              <label
                                className="form-label"
                                htmlFor="form4Example3"
                                style={{ marginLeft: 0 }}
                              >
                                Message
                              </label>
                              <div className="form-notch">
                                <div
                                  className="form-notch-leading"
                                  style={{ width: 9 }}
                                />
                                <div
                                  className="form-notch-middle"
                                  style={{ width: 60 }}
                                />
                                <div className="form-notch-trailing" />
                              </div>
                            </div>{" "}
                            {/* Submit button */}
                            <button
                              type="submit"
                              className="btn  btn-primary btn-block"
                              aria-controls="#picker-editor"
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </section>
            {/**/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
