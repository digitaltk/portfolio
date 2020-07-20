import {
  BlogBuilder
} from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
    title: "How I Became Me",
    image: "img",
    description: "It took me years to figure out what i really wanted, from trying many study options to finally deciding on how software development is what i really wanted",
  })
  .addHeading("Roadmap to Web Development/Software Development")
  .addParagraph(
    "Deciding on this journey took years of practise as well as commitment"
  );

const blog1 = new BlogBuilder({
    title: "Where To Start?",
    image: "img",
    description: "Coming soon",
  })
  .addHeading("Which is the right path?")
  .addParagraph(
    "Coming soon "
  );

const blog3 = new BlogBuilder({
    title: "The Books",
    image: "img",
    description: "What would be the recommended books",
  })
  .addHeading("Which Books To Go For?")
  .addParagraph(
    "Coming soon "
  );

const blog4 = new BlogBuilder({
    title: "Recommended Youtubers",
    image: "img",
    description: "Recommended Youtubers",
  })
  .addHeading("Youtube Channels I Would Recommended")
  .addParagraph(
    "Coming soon "
  );

const blog5 = new BlogBuilder({
    title: "Programming Bedtime Stories",
    image: "img",
    description: "Did You Know?",
  })
  .addHeading("Javascript Frameworks")
  .addParagraph(
    "Coming soon "
  );



bloglist.push(blog1);
bloglist.push(blog);
bloglist.push(blog3);
bloglist.push(blog4);
bloglist.push(blog5);

export default bloglist;