import React from "react";
import line from "../../../assets/img/line.png";
import "./Contact.scss";
import github from "../../../assets/img/github.png";
import linkedin from "../../../assets/img/linkedin.png";
import xing from "../../../assets/img/xing.png";

function Contact() {
  return (
    <div className="contact">
      <div className="content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          voluptates dicta, libero hic in voluptas. Et perferendis hic voluptate
          vel, eius facere dolore quisquam doloremque tenetur deleniti deserunt
          adipisci sit?
        </p>
        <img src={line} alt="" />
        <form action="">
          <input type="text" placeholder="ENTER YOUR NAME*" required />
          <input type="email" placeholder="ENTER YOUR EMAIL*" required />
          <input type="number" placeholder="PHONE NUMBER" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="YOUR MESSAGE*"
            required
          ></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
      <div className="icon-box contact-footer">
        <a href="https://github.com/zizi0400">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/zahra-salar">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://www.xing.com/profile/zahra_salar">
          <img src={xing} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
