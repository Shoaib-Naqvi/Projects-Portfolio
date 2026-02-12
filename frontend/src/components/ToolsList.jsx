import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import stripeIcon from "../assets/Stripe-Icon.png";
import * as Icons from "./Icons";

const iconMap = {
    'React': <Icons.ReactIcon />,
    'Tailwind': <Icons.TailwindIcon />,
    'TypeScript': <Icons.TypeScriptIcon />,
    'Radix': <Icons.RadixIcon />,
    'Redux': <Icons.ReduxIcon />,
    'PostgreSQL': <Icons.PostgreSQLIcon />,
    'NestJS': <Icons.NestJSIcon />,
    'Chat gpt': <Icons.ChatGPTIcon />,
    'Rls': <Icons.RlsIcon />,
    'Fast Api': <Icons.FastAPIIcon />,
    'Python': <Icons.PythonIcon />,
    'Firebase': <Icons.FirebaseIcon />,
    'AWS EC2': <Icons.AWSEC2Icon />,
    'Node JS': <Icons.NodeJSIcon />,
    'MongoDB': <Icons.MongoDBIcon />,
    'Framer': <Icons.FramerIcon />,
    'Gsap': <Icons.GsapIcon />,
    'Neo4j': <Icons.Neo4jIcon />,
    'TensorFlow': <Icons.TensorFlowIcon />,
    'PyTorch': <Icons.PyTorchIcon />,
    'Nlp': <Icons.NLPIcon />,
    'Shadcn': <Icons.ShadcnIcon />,
    'Loveable': <Icons.LoveableIcon />,
    'ExpressJs': <Icons.ExpressJsIcon />,
    'Aws': <Icons.AwsIcon />,
    'Rest Api': <Icons.RestApiIcon />,
    'S3-compatible storage': <Icons.S3Icon />,
    'Computer Vision': <Icons.ComputerVisionIcon />,
    'Redux': <Icons.ReduxIcon />,
    'EHRs': <Icons.EHRsIcon />,
    'Stripe': <img src={stripeIcon} alt="Stripe" className="w-10 h-7 object-contain" />,
    'Render.com': <Icons.RenderIcon />,
    'Amazon': <Icons.AmazonIcon />,
    'Tiktok': <Icons.TiktokIcon />,
    'Xero': <Icons.XeroIcon />,
    'Calendly': <Icons.CalendlyIcon />,
    'Acuity': <Icons.AcuityIcon />,
    'Redix (Cache)': <Icons.RedisIcon />,
    'Redis': <Icons.RedisIcon />,
    'Shopify': <Icons.ShopifyIcon />,
    'Socket.IO': <Icons.SocketIOIcon />,
    'Google Maps': <Icons.GoogleMapsIcon />,
    'n8n': <Icons.N8NIcon />,
    'Youtube Api': <Icons.YoutubeIcon />,
    'Apify': <Icons.ApifyIcon />,
    'Sdk': <Icons.SDKIcon />,
};

const ToolsList = ({ tools }) => {
    if (!tools || tools.length === 0) return null;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <div className="mt-8">
            <h4 className="font-bold text-2xl text-white mb-6">Tools</h4>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
            >
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 hover:border-cyan-500/50 hover:bg-white/10 transition-colors duration-300 shadow-lg"
                    >
                        <span className="text-cyan-400">
                            {iconMap[tool] || <Settings size={18} />}
                        </span>
                        <span className="text-white text-base font-medium whitespace-nowrap">{tool}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ToolsList;
