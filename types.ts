import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  tags?: string[];
}

export interface WorkItem {
  year: string;
  client: string;
  description: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}