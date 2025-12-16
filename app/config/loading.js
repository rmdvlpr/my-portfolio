// Loading Animation Configuration
export const loadingConfig = {
  // Choose which loading animation to use: 'mountain' or 'portfolio'
  animationType: 'mountain', // Change to 'portfolio' for the alternative animation
  
  // Duration settings
  duration: 5000, // Total loading duration in milliseconds
  
  // Whether to show loading on every visit or just first visit per session
  showOnEveryVisit: false, // Set to true to show loading on every page load
  
  // Custom messages for mountain animation
  mountainMessages: [
    "Crafting experiences",
    "Building connections", 
    "Creating magic",
    "Almost there"
  ],
  
  // Custom words for portfolio animation
  portfolioWords: ["Design", "Code", "Create", "Inspire"],
  portfolioColors: ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"]
};

export default loadingConfig;