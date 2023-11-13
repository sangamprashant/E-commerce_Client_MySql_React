import React from "react";
import storyStyle from "./CSS/OURSTORY.module.css";
function OurStory() {
  return (
    <div
      className="background-image overflow-scroll"
      style={{ height: "100vh", paddingTop: "100px" }}
    >
      <div class={`${storyStyle.box}`}>
        <div class={`${storyStyle.curve}`}></div>

        <div id={`${storyStyle.container}`}>
          <h1>Prashant Srivastav</h1>
          <p>
            Also known as sangamprashant, Prashant Srivastav is an accomplished
            software developer hailing from the vibrant city of Lucknow. He goes
            by the pronouns "he/him" and has made quite a name for himself in
            the world of technology and development. Prashant is a passionate
            and dedicated individual who strives to craft robust web and mobile
            applications. Let's delve a little deeper into his background and
            achievements.
          </p>

          <h2>About Me</h2>
          <p>
            Prashant's journey in web development began in 2022, and since then,
            he has been on a relentless quest for knowledge and mastery of his
            craft. He is currently honing his skills in Next.js, a popular React
            framework, showcasing his commitment to staying updated with the
            latest technologies. His ultimate goal is to become a proficient web
            developer, which is a testament to his dedication and ambition in
            the field.
          </p>

          <h2>Skills</h2>
          <p>
            Prashant's skill set is truly impressive, encompassing a wide range
            of technologies and languages. He is well-versed in Java, React,
            JavaScript, the MERN stack (MongoDB, Express, React, Node.js),
            Android, PHP, HTML, and CSS. His toolbox also includes expertise in
            HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React, Next.js,
            Node.js, MongoDB, Firebase, Python, and Java. This extensive skill
            set is a testament to his versatility and adaptability as a
            developer.
          </p>

          <h2>Languages</h2>
          <p>
            Prashant is not only proficient in various programming languages but
            is also multilingual. He is highly skilled in both Hindi and
            English, earning five stars for Hindi and four and a half stars for
            English. This linguistic diversity allows him to connect with a
            broader audience and collaborate effectively with people from
            different linguistic backgrounds.
          </p>

          <h2>Social Links</h2>
          <p>
            Prashant is well-connected in the digital world, with links to his
            various social media profiles. You can find him on YouTube,
            Instagram, Gmail, and LinkedIn, where he likely shares his knowledge
            and experiences with a wider community.
          </p>

          <h2>GitHub Profile</h2>
          <p>
            His GitHub profile showcases his active involvement in open-source
            projects and personal repositories. Some of his popular repositories
            include "demo.psm" (an HTML project), "sangam_prashant" (a personal
            profile in CSS), "get.connect" (another HTML project), "Tic-Tac-Toe"
            (a JavaScript-based game), "ManupulateText" (JavaScript), and
            "NewsApp--Oh-MyNewsApp--Oh-My" (JavaScript). These projects reflect
            his commitment to continuous learning and contribution to the
            developer community.
          </p>

          <p>
            Prashant Srivastav, with his rich skill set, dedication, and passion
            for web development, is undoubtedly an emerging talent in the
            software development world. He is on a journey to sharpen his
            abilities and contribute significantly to the ever-evolving world of
            technology. Keep an eye on his journey, as he's sure to achieve
            remarkable milestones in the field of web and mobile application
            development. You can learn more about him and his work on his
            website:
            <a href="https://www.academicqueries.me">academicqueries.me</a>.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default OurStory;
