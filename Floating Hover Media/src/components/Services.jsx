import { motion } from 'framer-motion'
import { fadeIn, textVariants } from '../utils/framer-motion'

import image1 from '/service-1.jpg'
import image2 from '/service-2.jpg'
import image3 from '/service-3.jpg'
import image4 from '/service-4.jpg' 
import HoverPreviewCard from './HoverPreviewCard'


const services = [
  {
    id: 1,
    title: "Search Engine Optimization",
    description: "Boost your online visibility with smart SEO strategies that bring the right audience to your business.",
    list: [
      { item: "On-page & off-page SEO" },
      { item: "Keyword research & planning" },
      { item: "Performance tracking & reporting" }
    ],
    img: image1,
    url: ""
  },
  {
    id: 2,
    title: "Email Campaigns",
    description: "Reach your customers directly with engaging email campaigns that increase trust and sales.",
    list: [
      { item: "Custom newsletter design" },
      { item: "Automated campaign setup" },
      { item: "Analytics & optimization" }
    ],
    img: image2,
    url: ""
  },
  {
    id: 3,
    title: "Content Strategy",
    description: "Create powerful content that tells your brand story and connects with your audience.",
    list: [
      { item: "Blog writing & editing" },
      { item: "Social media content" },
      { item: "SEO-friendly articles" }
    ],
    img: image3,
    url: ""
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description: "Grow your brand presence with creative social campaigns designed to engage and convert.",
    list: [
      { item: "Targeted ad campaigns" },
      { item: "Community management" },
      { item: "Creative post design" }
    ],
    img: image4,
    url: ""
  },
];



const Services = () => {
  return (
    <section className="w-full bg-accent">
      <div className="container-lg">
        {/* vertical section */}
        <div className="relative py-15 md:pt-32 max-w-[600px] mx-auto">
          {/* vertical line */}
          <span className="hidden md:block h-full min-h-[300px] w-[1px] absolute left-28 -top-2 z-0 bg-zinc-700"></span>

          <div className="text-light z-50 bg-accent relative py-3">
            <h4 className="text-[18px]">Services</h4>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-6xl font-bold uppercase my-2">
              <span>Our marketing</span> <br />
              <span>Services</span>
            </motion.h2>
          </div>

          <div className="md:ml-32 text-gray max-w-[400px] relative right-0 z-50">
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              Consumers today rely heavily on digital means to research products. We research a brand of bldend engaging with it, according to the meanwhile, 51% of consumers say they use Google to research products before buying.
            </motion.p>
          </div>
        </div>

        <hr className="w-full h-[1px]  text-zinc-700 my-14" />

        {/* All Services */}
        {
          services && services.map((data, index) => (
            <>
              <HoverPreviewCard key={index} data={data} />


              <hr className="w-full h-[1px] text-zinc-700 my-14" />
            </>
          ))
        }
      </div>
    </section>
  )
}

export default Services