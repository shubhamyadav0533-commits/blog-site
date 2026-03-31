import { apiRequest } from "./api";

const WEBSITE_LEAD_API_URL =
  "https://crm.anquest.in/api/website-lead/leads/5ed8237d-1305-4555-9b24-10123d777a7b";

export interface CreateWebsiteLeadInput {
  fullName: string;
  email: string;
  mobile: string;
  message: string;
}

interface WebsiteLeadPayload {
  full_name: string;
  email: string;
  message: string;
  mobile: string;
  lead_source: "Website";
  website: string;
  web_page: string;
  subsource: "Contact Us";
}

export async function createWebsiteLead(input: CreateWebsiteLeadInput) {
  const payload: WebsiteLeadPayload = {
    full_name: input.fullName,
    email: input.email,
    message: input.message,
    mobile: input.mobile,
    lead_source: "Website",
    website: window.location.origin,
    web_page: `${window.location.pathname}${window.location.search}`,
    subsource: "Contact Us",
  };

  return apiRequest<unknown>(WEBSITE_LEAD_API_URL, {
    method: "POST",
    body: payload,
  });
}
