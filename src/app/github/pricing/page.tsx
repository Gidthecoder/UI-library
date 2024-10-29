import React from 'react';

const PricingCard = ({ 
  tier, 
  description, 
  price, 
  period = "per user/month", 
  buttonText, 
  buttonVariant = "default",
  features,
  recommended = false,
  secondaryButton = null
}:any) => (
  <div className={`p-6 rounded-lg ${recommended ? 'border-2 border-blue-500 bg-white' : 'border border-gray-200 bg-white'} relative`}>
    {recommended && (
      <div className="absolute -top-3 right-4">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
          RECOMMENDED
        </span>
      </div>
    )}
    
    <h2 className="text-2xl font-bold mb-2">{tier}</h2>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    
    <div className="mb-6">
      <span className="text-gray-500 text-sm">$</span>
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-gray-500 ml-1">USD</span>
      <span className="text-gray-500 text-sm block">{period}</span>
    </div>

    <button 
      className={`w-full py-2 px-4 rounded-md mb-4 ${
        buttonVariant === "primary" 
          ? "bg-gray-900 text-white hover:bg-gray-800" 
          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
      }`}
    >
      {buttonText}
    </button>
    
    {secondaryButton && (
      <button className="w-full py-2 px-4 rounded-md mb-4 border border-gray-300 hover:bg-gray-50">
        {secondaryButton}
      </button>
    )}

    <ul className="space-y-3">
      {features.map((feature:any, index:any) => (
        <li key={index} className="flex items-start gap-2">
          <svg 
            className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
          <span className="text-gray-600 text-sm">
            {typeof feature === 'string' ? feature : (
              <>
                {feature.text}
                {feature.subtext && (
                  <span className="block text-xs text-gray-500">{feature.subtext}</span>
                )}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Home (){
  const pricingData = {
    free: {
      tier: "Free",
      description: "The basics for individuals and organizations",
      price: "0",
      buttonText: "Join for free",
      features: [
        "Unlimited public/private repositories",
        "Automatic security and version updates",
        {
          text: "2,000 CI/CD minutes/month",
          subtext: "Free for public repositories"
        },
        {
          text: "500MB of Packages storage",
          subtext: "Free for public repositories"
        },
        "Issues & Projects",
        "Community support"
      ]
    },
    team: {
      tier: "Team",
      description: "Advanced collaboration for individuals and organizations",
      price: "4",
      buttonText: "Continue with Team",
      features: [
        "Everything included in Free, plus...",
        "Access to GitHub Codespaces",
        "Protected branches",
        "Multiple reviewers in pull requests",
        "Draft pull requests",
        "Code owners",
        "Required reviewers",
        "Pages and Wikis",
        "Environment deployment branches and secrets",
        {
          text: "3,000 CI/CD minutes/month",
          subtext: "Free for public repositories"
        },
        {
          text: "2GB of Packages storage",
          subtext: "Free for public repositories"
        },
        "Web-based support"
      ]
    },
    enterprise: {
      tier: "Enterprise",
      description: "Security, compliance, and flexible deployment",
      price: "21",
      period: "per user/month",
      buttonText: "Start a free trial",
      buttonVariant: "primary",
      secondaryButton: "Contact Sales",
      features: [
        "Everything included in Team, plus...",
        "Data residency",
        "Enterprise Managed Users",
        "User provisioning through SCIM",
        "Enterprise Account to centrally manage multiple organizations",
        "Environment protection rules",
        "Repository rules",
        "Audit Log API",
        "SOC1, SOC2, type 2 reports annually",
        "FedRAMP Tailored Authority to Operate (ATO)",
        "SAML single sign-on",
        "Advanced auditing",
        "GitHub Connect",
        {
          text: "50,000 CI/CD minutes/month",
          subtext: "Free for public repositories"
        },
        {
          text: "50GB of Packages storage",
          subtext: "Free for public repositories"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Get the complete developer platform.
          </h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard {...pricingData.free} />
          <PricingCard {...pricingData.team} />
          <PricingCard {...pricingData.enterprise} recommended={true} />
        </div>
      </div>
    </div>
  );
};
