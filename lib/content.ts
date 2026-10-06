export const profile = {
  name: "Suraj Kapare",
  fullName: "Suraj Ravindra Kapare",
  role: "Data Scientist",
  location: "Washington, DC",
  email: "kaparesuraj4@gmail.com",
  linkedin: "https://www.linkedin.com/in/surajkapare/",
  resume: "/resume/Suraj_Kapare_Data_Scientist.pdf",
  analystResume: "/resume/Suraj_Kapare_Data_Analyst.pdf",
  description: "Data scientist with an engineering foundation. Explore Suraj Kapare’s work in predictive modeling, interpretable computer vision, customer analytics, and cloud NLP.",
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
    result: "Identified limited score variation in the initial NIMA approach: a standard deviation of 0.246, compared with 1.598 in human ratings. The project moved to Claude-based scoring and interpretable property analysis.",
    scope: "Graduate team capstone. The work examines associations with human ratings; it does not establish causal effects or a universal measure of beauty.",
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
    approach: "Analyzed more than 129,000 survey records covering travel class, demographics, delays, and service quality. Compared logistic regression and LightGBM using five-fold cross-validation.",
    result: "The project reported 96% accuracy for LightGBM, versus 88% for logistic regression: an 8 percentage-point improvement. Inflight Wi-Fi, online boarding, and travel class emerged as important satisfaction signals.",
    scope: "Graduate team project using passenger survey data. These are reported project results, not production performance or measured business impact.",
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
  },
];

export const skillGroups = [
  { number: "01", title: "Explore & explain", summary: "Build a trustworthy analytical foundation.", skills: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL", "R", "Excel", "Power BI", "Tableau"] },
  { number: "02", title: "Model & evaluate", summary: "Connect model performance to the question.", skills: ["Scikit-learn", "LightGBM", "Regression", "Feature engineering", "Cross-validation", "PyTorch", "NLP", "Computer vision"] },
  { number: "03", title: "Build & deliver", summary: "Carry the work through to a usable system.", skills: ["AWS S3", "Lambda", "SageMaker", "API Gateway", "ETL", "Git", "Streamlit", "Hugging Face", "LLM pipelines"] },
];
