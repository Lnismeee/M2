import React from "react";
import "./index.css";
import "./contacts.css";
const Contact = () => {
    const handleSubmit = () => {
        console.log("Form submitted!");
    };

    return (
        <div className="contactAll">
            {/* First Container */}
            <div className="container2">
                <div className="info">
                    <h2>VỀ CHÚNG TÔI</h2>
                    <p>
                        F1GENZ BABIE chính là nơi hội tụ những thương hiệu uy
                        tín, những sản phẩm dành cho mẹ và bé chính hãng, chất
                        lượng hàng đầu tại Việt Nam. Không những thế, F1GENZ
                        BABIE mang đến cho Ba/mẹ những trải nghiệm mua sắm tuyệt
                        vời, đáng tin cậy và cam kết cung cấp các dịch vụ chăm
                        sóc khách hàng, tư vấn bán hàng, tư vấn sử dụng sản phẩm
                        và các dịch vụ giao nhận hàng tốt nhất.
                    </p>
                </div>
                <div className="image">
                    <img
                        src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/page-about-new-image-1.jpg?1697623334994"
                        alt="Contact 1"
                        style={{ maxWidth: "700px" }}
                    />
                </div>
            </div>

            {/* Second Container */}
            <div className="container2">
                <div className="image">
                    <img
                        src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/page-about-new-image-2.jpg?1697623334994p"
                        alt="Contact 2"
                        style={{ maxWidth: "700px" }}
                    />
                </div>
                <div className="info">
                    <div className="info_desc">
                        <img src="./src/assets/emoji.webp" alt="" />
                        <h2>LIÊN HỆ</h2>
                    </div>
                    <p>
                        Con càng lớn lên, thời gian con ở bên cha mẹ ngày càng
                        ít dần, những người bạn bên cạnh chơi đùa cùng con ngày
                        nào dần bị thay thế bằng những trò chơi, video trên các
                        sản phẩm công nghệ. Khi con bước sang độ tuổi thôi nôi,
                        là lúc con bị cuốn hút nhiều hơn từ những Video, trò
                        chơi trên ipad. Thời gian tiếp xúc với con đã ít rồi lại
                        còn ít hơn nữa và dần dần con chỉ có thể tìm được những
                        người bạn, niềm vui từ những trò công nghệ này. Tình
                        cảm, kỹ năng, sự năng động của đứa bé 1 tuổi cũng dần
                        giảm xuống thay vì phát triển như những đứa trẻ bình
                        thường khác. Rất may mắn cho gia đình, khi chúng tôi sớm
                        nhìn nhận ra được vấn đề với con. Nhờ những tư vấn, lời
                        khuyên từ bạn bè, người thân tôi cũng đã nhận ra được
                        mình phải làm gì để mang lại niềm vui và tuổi thơ cho
                        con trẻ.
                    </p>
                </div>
            </div>

            {/* Form and Map Container */}
            <div className="container-form">
                <div className="form-map-container">
                    <div className="form-container">
                        <h3 className="contact-heading">
                            KẾT NỐI NGAY VỚI CHÚNG TÔI{" "}
                        </h3>
                        <div className="form-row form-row-tall">
                            <input
                                type="text"
                                className="form-input form-input-tall"
                                placeholder="Tên của bạn"
                            />
                        </div>

                        <div className="form-row form-row-tall">
                            <input
                                type="text"
                                className="form-input form-input-tall"
                                placeholder="Số điện thoại của bạn"
                            />
                        </div>

                        <div className="form-row form-row-tall">
                            <input
                                type="text"
                                className="form-input form-input-tall"
                                placeholder="Email của bạn"
                            />
                        </div>

                        <div className="form-row form-row-tall form-row-extra-tall">
                            <input
                                type="text"
                                className="form-input form-input-extra-tall"
                                placeholder="Viết bình luận"
                            />
                            <div className="form-button" onClick={handleSubmit}>
                                GỬI THÔNG TIN
                            </div>
                        </div>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2569476863396!2d105.8135202114788!3d21.022402487914885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab655ff22bfb%3A0xa1ff4776a6330b1a!2smindXCoworking%20Space%20(ti%E1%BB%81n%20th%C3%A2n%20Nest%20Coworking%20Space)!5e0!3m2!1sen!2s!4v1697344020855!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
