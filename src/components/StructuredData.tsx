import { Helmet } from "react-helmet-async";

const baseUrl = "https://www.aigurusgroup.com";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  foundingDate?: string;
  numberOfEmployees?: string;
  areaServed?: string;
}

export const OrganizationSchema = ({
  name = "AI Gurus Group",
  url = baseUrl,
  logo = `${baseUrl}/logo.png`,
  description = "UK-based acquisition and transformation partner specializing in acquiring established SMEs and strengthening them with AI, automation, and modern operating systems.",
  foundingDate = "2020",
  numberOfEmployees = "17+ Successful Deals",
  areaServed = "United Kingdom",
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    foundingDate,
    numberOfEmployees,
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    sameAs: [
      "https://www.linkedin.com/company/ai-gurus-group",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@aigurusgroup.com",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface FAQPageSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQPageSchema = ({ faqs }: FAQPageSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    position: number;
  }>;
}

export const HowToSchema = ({ name, description, steps }: HowToSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.position,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  email?: string;
  url?: string;
  sameAs?: string[];
}

export const PersonSchema = ({
  name,
  jobTitle,
  description,
  image,
  email,
  url,
  sameAs = [],
}: PersonSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    ...(description && { description }),
    ...(image && { image }),
    ...(email && { email }),
    ...(url && { url }),
    ...(sameAs.length > 0 && { sameAs }),
    worksFor: {
      "@type": "Organization",
      name: "AI Gurus Group",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}

export const ServiceSchema = ({
  name,
  description,
  provider = "AI Gurus Group",
  areaServed = "United Kingdom",
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

