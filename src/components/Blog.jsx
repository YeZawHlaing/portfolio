import { motion } from "framer-motion";

const Blog = () => (
  <motion.section
    id="blog"
    className="p-10 bg-gray-100 dark:bg-gray-800"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
  >
    <h2 className="text-3xl font-bold mb-4">Blog</h2>
    <p>Coming soon...</p>
  </motion.section>
);

export default Blog;
