export const profile = {
  name: "Suraj Kapare",
  fullName: "Suraj Ravindra Kapare",
  role: "Data Scientist",
  location: "Washington, DC",
  email: "kaparesuraj4@gmail.com",
  linkedin: "https://www.linkedin.com/in/surajkapare/",
  github: "https://github.com/SURAJ20-k",
  photo: "/images/suraj-kapare.png",
  resume: "/resume/Suraj_Kapare_Data_Scientist.pdf",
  analystResume: "/resume/Suraj_Kapare_Data_Analyst.pdf",
  description: "Data scientist with an engineering foundation. Explore Suraj Kapare’s work in predictive modeling, interpretable computer vision, customer analytics, and cloud NLP.",
};

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  source: string;
};

export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  dates: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  question: string;
  approach: string;
  result: string;
  scope: string;
  images: ProjectImage[];
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    id: "urban-aesthetics",
    number: "01",
    category: "COMPUTER VISION · INTERPRETABLE ML",
    title: "What makes a place feel beautiful?",
    description: "Turning visual impressions into interpretable features with LLM scoring, image segmentation, and statistical analysis.",
    dates: "Jan–May 2026",
    tags: ["Claude", "SAM", "Regression", "Python"],
    metric: "800",
    metricLabel: "images evaluated",
    question: "Can explicit visual properties help explain how people judge the aesthetics of a place?",
    approach: "Contributed to a GWU capstone combining Claude-based scoring, Segment Anything (SAM), and regression. The framework used Christopher Alexander’s 15 properties of wholeness to connect visual structure with human aesthetic ratings.",
    result: "Evaluated 400 urban and 400 landscape images. In the supplied results, adding SAM features increased landscape R² from 0.518 to 0.576, while urban R² rose from 0.394 to 0.427. Claude’s property scores explained more of the signal, but also tended to score images higher than people did.",
    scope: "Graduate team capstone. The work examines associations with human ratings; it does not establish causal effects or a universal measure of beauty.",
    githubUrl: "https://github.com/aniruddh996/aesthetic-property-analysis",
    images: [
      { src: "/images/capstone-agreement.png", width: 1782, height: 738, alt: "Scatterplots comparing average Claude property scores with human attractiveness ratings: urban Pearson r 0.609 and landscape r 0.687.", caption: "Claude scores track human ratings, with different agreement across urban and landscape scenes.", source: "Team capstone presentation · slide 7" },
      { src: "/images/capstone-importance.png", width: 2190, height: 827, alt: "Feature-importance charts for all images, urban scenes, and landscapes using Claude property scores and SAM structural features.", caption: "Interpretable visual properties dominate the feature rankings; structural features add context.", source: "Team capstone presentation · slide 9" },
      { src: "/images/capstone-model-comparison.png", width: 1332, height: 583, alt: "Five-fold cross-validation R squared: all images 0.468 versus 0.487, urban 0.394 versus 0.427, landscape 0.518 versus 0.576 for Claude alone versus Claude plus SAM.", caption: "SAM provides the largest reported R² gain for landscape images: +0.058.", source: "Team capstone presentation · slide 12" },
    ],
  },
  {
    id: "passenger-satisfaction",
    number: "02",
    category: "PREDICTIVE MODELING · CUSTOMER INSIGHTS",
    title: "Finding the signals behind a better flight.",
    description: "Connecting passenger feedback to satisfaction drivers, then comparing an interpretable baseline with gradient boosting.",
    dates: "Sep–Dec 2024",
    tags: ["LightGBM", "Scikit-learn", "Pandas"],
    metric: "96%",
    metricLabel: "reported model accuracy",
    question: "Which passenger and service factors are most informative for predicting satisfaction?",
    approach: "Worked with a dataset of 129,880 survey records covering travel class, demographics, delays, and service quality. Compared logistic regression with LightGBM after data preparation; the report also evaluated logistic regression with five-fold cross-validation.",
    result: "The project reported 96% accuracy for LightGBM, versus 88% for logistic regression: an 8 percentage-point improvement. Inflight Wi-Fi, online boarding, and travel class emerged as important satisfaction signals.",
    scope: "Graduate team project using passenger survey data. These are reported project results, not production performance or measured business impact.",
    githubUrl: "https://github.com/SURAJ20-k/data-mining-final-proj",
    images: [
      { src: "/images/airline-feature-importance.png", width: 727, height: 439, alt: "LightGBM feature-importance chart showing inflight Wi-Fi service as the largest signal, followed by age and customer type, with online boarding among the leading features.", caption: "Inflight Wi-Fi stands out in the LightGBM feature-importance analysis.", source: "Team project report · page 28, Figure 19" },
      { src: "/images/airline-confusion-matrix.png", width: 544, height: 407, alt: "LightGBM normalized confusion matrix: 98.08 percent of satisfied passengers and 93.99 percent of dissatisfied or neutral passengers correctly classified.", caption: "The confusion matrix shows how performance differs between satisfaction groups.", source: "Team project report · page 28, Figure 20" },
    ],
  },
  {
    id: "cloud-sentiment",
    number: "03",
    category: "NLP · CLOUD SYSTEMS",
    title: "From comments to sentiment, on AWS.",
    description: "An end-to-end workflow that takes YouTube comments from preprocessing to an API-accessible sentiment model.",
    dates: "Sep–Dec 2025",
    tags: ["S3", "Lambda", "SageMaker", "API Gateway"],
    metric: "3",
    metricLabel: "sentiment categories",
    question: "How can unstructured comments become sentiment predictions available through a cloud API?",
    approach: "Helped build an AWS workflow using S3, Lambda, and SageMaker to prepare comments and classify them as positive, neutral, or negative. Connected a SageMaker endpoint to a REST API through API Gateway and Lambda.",
    result: "Delivered a working cloud inference path for new comments, connecting data preparation, model serving, and API access in one project.",
    scope: "Graduate team project. No measured latency, throughput, cost reduction, or production adoption is claimed.",
    githubUrl: null, // No public repository; the case study and figures remain available.
    images: [
      { src: "/images/aws-data-flow.png", width: 2082, height: 842, alt: "Project data-flow diagram: a Kaggle dataset moves through S3 storage, Lambda preprocessing, SageMaker modeling, and API Gateway for access.", caption: "The team’s data-flow diagram connects collection, preprocessing, modeling, and API access.", source: "Cloud computing presentation · page 6" },
      { src: "/images/aws-architecture.jpeg", width: 1536, height: 1024, alt: "Architecture diagram showing Kaggle, S3, SageMaker, API Gateway with Lambda, and a QuickSight dashboard destination.", caption: "Project architecture from the presentation. QuickSight is shown as a dashboard destination; implementation of that dashboard is not claimed here.", source: "Cloud computing presentation · page 5" },
    ],
  },
  {
    id: "bird-flu-egg-prices",
    number: "04",
    category: "DATA VISUALIZATION · SUPPLY-CHAIN INSIGHTS",
    title: "Bird flu outbreaks & the price of eggs.",
    description: "A Tableau investigation of how outbreak frequency, flock losses, and geography relate to changes in U.S. egg prices.",
    dates: "Jan–May 2025",
    tags: ["Tableau", "Data preparation", "Time series", "Geospatial analysis"],
    metric: "1,654",
    metricLabel: "outbreak records",
    question: "How did U.S. poultry outbreaks and egg prices move together between 2022 and early 2025—and where did those patterns diverge?",
    approach: "Contributed to a team analysis combining H5N1 outbreak records across 560 counties with BLS monthly egg prices. Reshaped the price data, aligned year-month fields, and developed Tableau views of seasonality, regional hotspots, outbreak counts, and affected flock sizes.",
    result: "The visual analysis showed that frequent outbreaks did not always mean larger flock losses. Major losses in late 2024 and early 2025 coincided with rising prices, while other price increases occurred during quieter outbreak periods. This made flock size and timing essential to the story.",
    scope: "Graduate team project. The analysis is descriptive: it does not isolate a causal effect of bird flu on prices. The overlapping price series ends in February 2025; early-2025 totals are partial-year observations.",
    githubUrl: null, // No public repository; the case study and figures remain available.
    images: [
      { src: "/images/bird-flu-prices.png", width: 1446, height: 777, alt: "Tableau chart comparing monthly bird flu outbreak counts with average egg prices from February 2022 to February 2025; the patterns sometimes align and sometimes diverge.", caption: "Outbreak counts and egg prices do not move in lockstep—a useful limit on the headline story.", source: "Breaking the Shell team report · page 15, Figure 7" },
      { src: "/images/bird-flu-map.png", width: 1438, height: 754, alt: "Map of continental U.S. poultry outbreaks with markers sized by affected flock size and colored by year from 2022 to 2025.", caption: "Geographic variation reveals concentrations of large affected flocks across poultry-producing regions.", source: "Breaking the Shell team report · page 11, Figure 5" },
      { src: "/images/bird-flu-flock-impact.png", width: 1438, height: 770, alt: "Area chart of affected flock sizes overlaid with egg prices, showing large flock losses in late 2024 and early 2025.", caption: "Looking at affected flock size adds context that a count of outbreaks alone misses.", source: "Breaking the Shell team report · page 17, Figure 8" },
    ],
  },
];

export const skillGroups = [
  { number: "01", title: "Explore & explain", summary: "Build a trustworthy analytical foundation.", skills: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL", "R", "Excel", "Power BI", "Tableau"] },
  { number: "02", title: "Model & evaluate", summary: "Connect model performance to the question.", skills: ["Scikit-learn", "LightGBM", "Regression", "Feature engineering", "Cross-validation", "PyTorch", "NLP", "Computer vision"] },
  { number: "03", title: "Build & deliver", summary: "Carry the work through to a usable system.", skills: ["AWS S3", "Lambda", "SageMaker", "API Gateway", "ETL", "Git", "Streamlit", "Hugging Face", "LLM pipelines"] },
];
