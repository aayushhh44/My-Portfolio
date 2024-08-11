import React from "react";
import Navbar from "../components/Navbar";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-8 mt-16 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src="/assets/AAYUSH .jpg"
                    alt="Aayush Poudel"
                  />
                  <div>
                    <a
                      href="/"
                      rel="author"
                      className="text-xl font-poppins font-bold text-gray-900 dark:text-white"
                    >
                      Aayush Poudel
                    </a>
                    <p className="text-base font-poppins text-gray-500 dark:text-gray-400">
                      Frontend | Backend Developer
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time className="font-poppins"
                        pubdate
                        datetime="2024-08-11"
                        title="August 11th, 2024"
                      >
                        Aug 11, 2024
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                My Experience as a React Developer
              </h1>
            </header>
            <p className="lead font-poppins text-xl my-2">
              Over the past few years, my journey as a React developer has been nothing short of transformative. Starting with basic concepts, I've grown to appreciate the power and flexibility of React, allowing me to create dynamic, responsive, and user-friendly web applications.
            </p>
            <p className="font-poppins my-2">
              My first introduction to React was both exciting and overwhelming. The idea of building user interfaces using components was new to me, but it quickly became clear how beneficial this approach was. I started with small projects, gradually understanding the importance of state management, props, and the component lifecycle.
            </p>
            <p className="font-poppins my-2">
              As I delved deeper into React, I realized that mastering this library required a good grasp of JavaScript fundamentals. Concepts like closures, event handling, and asynchronous operations became second nature. I also explored React's ecosystem, including tools like React Router for routing and Redux for state management.
            </p>
            <figure className="flex justify-center my-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
                alt="React Development"
              />
            </figure>
            <h2 className="text-2xl my-4">The Challenges and Triumphs</h2>
            <p className="font-poppins">
              Like any developer, I faced my fair share of challenges. Debugging state issues, optimizing performance, and managing complex component hierarchies were some of the hurdles I encountered. However, each challenge presented an opportunity to learn and improve.
            </p>
            <p className="font-poppins my-4">
              One of the most rewarding aspects of being a React developer is the vibrant community and the abundance of resources available. From Stack Overflow to GitHub repositories, there’s a wealth of knowledge that has helped me overcome obstacles and stay updated with the latest best practices.
            </p>
            <p>
              A significant milestone in my React journey was integrating third-party libraries like GSAP for animations and Tailwind CSS for styling. These tools have allowed me to bring my creative visions to life, making my projects not only functional but also visually appealing.
            </p>
            <h2 className="text-2xl font-poppins my-4">Why I Love React</h2>
            <p className="font-poppins">
              What makes React special to me is its ability to make complex UI interactions simple and intuitive. The component-based architecture encourages code reuse and modularity, which aligns perfectly with my approach to development. Additionally, React's continuous evolution, with features like hooks and concurrent mode, ensures that it remains a cutting-edge tool in the front-end landscape.
            </p>
            <h3 className="font-poppins text-2xl my-2">Advice for Aspiring React Developers</h3>
            <p className="font-poppins">
              For those just starting out, my advice is to focus on understanding the core concepts of React and JavaScript. Build small projects, experiment with new ideas, and don't shy away from exploring the vast ecosystem that surrounds React. Consistency is key, and with time, you'll find yourself becoming more confident and proficient in your React development journey.
            </p>
            <p className="my-2 font-poppins">
              Remember, the path to mastery is a marathon, not a sprint. Embrace the challenges, celebrate your successes, and most importantly, enjoy the process of creating something meaningful with React.
            </p>
            <blockquote className="my-4 font-poppins">
              <p className="italic">
                "The more you learn, the more you realize how much you don't know. Embrace that journey, and React will become an indispensable tool in your developer toolkit."
              </p>
            </blockquote>
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  className="mb-5 rounded-lg"
                  alt="hero"
                />
            
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <p>My First React Project</p>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                A reflection on my first project built with React, highlighting the lessons learned and the growth experienced.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 5 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://www.crio.do/blog/content/images/size/w600/2021/03/Machine-learning-projects.png"
                  className="mb-5 rounded-lg"
                  alt="hero 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">Understanding React Hooks</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                An in-depth look at how React hooks have transformed the way we manage state and side effects in functional components.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 10 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png"
                  className="mb-5 rounded-lg"
                  alt="hero 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">Building Reusable Components</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Tips and techniques for creating modular, reusable components in React, ensuring maintainability and scalability.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 7 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://media.licdn.com/dms/image/D5612AQEk_fp-S3Fe8A/article-cover_image-shrink_720_1280/0/1697777573828?e=2147483647&v=beta&t=UnTQEb19FQUep5WfJ6X4O_-XlJQfV2C_Z0eBaD2Dssk"
                  className="mb-5 rounded-lg"
                  alt="hero"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">State Management in React</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Exploring different state management solutions in React, from built-in hooks to external libraries like Redux and MobX.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
