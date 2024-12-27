import React, { useState, useRef, useEffect } from "react";
import { CaretDown } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import featuresData from "@config/features/featureCarousel.json"; // Adjust path as necessary

const FeaturesCarousel: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentFeature = featuresData.find((feature) => feature.id === activeFeature);

  const handleFeatureClick = (id: number) => {
    if (id === activeFeature) return;
    setProgress(0);
    setActiveFeature(id);
  };

  useEffect(() => {
    const duration = currentFeature?.duration || 5000;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min((elapsedTime / duration) * 100, 100);

      setProgress(progress);

      if (progress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setActiveFeature((prev) => {
          const nextFeature = prev + 1;
          return nextFeature > featuresData.length ? 1 : nextFeature;
        });
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [activeFeature, currentFeature?.duration]);

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Features
          </h2>
          <p className="text-lg text-foreground-hsl/30">
            Explore the powerful features to supercharge your experience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12">
          {/* Sidebar for feature cards */}
          <div className="space-y-6">
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
                initial={false}
                animate={activeFeature === feature.id ? "expanded" : "collapsed"}
                className={`relative rounded-lg shadow-md border border-border-color-primary transition-all duration-300 ease-in-out ${
                  activeFeature === feature.id
                    ? "ring-2 ring-primary-color"
                    : "hover:ring-1 hover:ring-gray-300"
                } overflow-hidden`}
              >
                <button
                  onClick={() => handleFeatureClick(feature.id)}
                  className="w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <motion.div
                      variants={{
                        expanded: { rotate: 180 },
                        collapsed: { rotate: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CaretDown className="h-6 w-6 text-foreground-hsl" />
                    </motion.div>
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFeature === feature.id ? "auto" : "0px",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeFeature === feature.id ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        delay: activeFeature === feature.id ? 0.1 : 0,
                      }}
                      className="text-sm text-foreground-hsl/55"
                    >
                      {feature.description}
                    </motion.p>
                    {/* Progress bar */}
                    {activeFeature === feature.id && (
                      <div className="mt-3 h-[4px] rounded-full bg-cards-bg">
                        <motion.div
                          className="h-full rounded-full bg-primary-color"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {/* Video display */}
          <div className="relative aspect-[16/9] w-full rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover rounded-lg"
                  muted
                  playsInline
                  autoPlay
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                >
                  <source src={currentFeature?.videoUrl} type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
