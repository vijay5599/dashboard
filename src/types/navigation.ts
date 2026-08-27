export interface NavItem {
  name: string;
  href?: string;
  icon?: string;
  badge?: string;
  badgeType?: "new" | "pro" | "count";
  subItems?: {
    name: string;
    href: string;
    badge?: string;
    badgeType?: "new" | "pro";
  }[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationConfig: NavSection[] = [
  {
    title: "MENU",
    items: [
      {
        name: "Dashboard",
        icon: "LayoutDashboard",
        subItems: [
          { name: "Ecommerce", href: "/" },
          { name: "Analytics", href: "/analytics" },
          { name: "Marketing", href: "/marketing" },
          { name: "CRM", href: "/crm" },
          { name: "Stocks", href: "/stocks" },
          { name: "SaaS", href: "/saas" },
          { name: "Logistics", href: "/logistics" },
          { name: "AI", href: "/ai", badge: "new", badgeType: "new" },
          { name: "Sales", href: "/sales", badge: "new", badgeType: "new" },
          { name: "Finance", href: "/finance", badge: "new", badgeType: "new" },
        ],
      },
      {
        name: "AI Assistant",
        icon: "Bot",
        badge: "new",
        badgeType: "new",
        subItems: [
          { name: "Text Generator", href: "/text-generator" },
          { name: "Image Generator", href: "/image-generator" },
          { name: "Code Generator", href: "/code-generator" },
          { name: "Video Generator", href: "/video-generator" },
          { name: "AI Settings", href: "/ai-settings" },
        ],
      },
      {
        name: "E-commerce",
        icon: "ShoppingCart",
        subItems: [
          { name: "Products", href: "/products-list" },
          { name: "Add Product", href: "/add-product" },
          { name: "Billing", href: "/billing" },
          { name: "Invoices", href: "/invoices" },
          { name: "Single Invoice", href: "/single-invoice" },
          { name: "Create Invoice", href: "/create-invoice" },
          { name: "Transactions", href: "/transactions" },
          { name: "Single Transaction", href: "/single-transaction" },
        ],
      },
      {
        name: "Calendar",
        href: "/calendar",
        icon: "Calendar",
      },
      {
        name: "User Profile",
        href: "/profile",
        icon: "User",
      },
      {
        name: "Task",
        icon: "CheckSquare",
        subItems: [
          { name: "List", href: "/task-list" },
          { name: "Kanban", href: "/task-kanban" },
        ],
      },
      {
        name: "Forms",
        icon: "FileText",
        subItems: [
          { name: "Form Elements", href: "/form-elements" },
          { name: "Form Layout", href: "/form-layout" },
        ],
      },
      {
        name: "Tables",
        icon: "Table",
        subItems: [
          { name: "Basic Tables", href: "/basic-tables" },
          { name: "Data Tables", href: "/data-tables" },
        ],
      },
      {
        name: "Pages",
        icon: "Layers",
        subItems: [
          { name: "File Manager", href: "/file-manager" },
          { name: "Pricing Tables", href: "/pricing-tables" },
          { name: "FAQ", href: "/faq" },
          { name: "API Keys", href: "/api-keys", badge: "new", badgeType: "new" },
          { name: "Integrations", href: "/integrations", badge: "new", badgeType: "new" },
          { name: "Blank Page", href: "/blank" },
          { name: "404 Error", href: "/error-404" },
          { name: "500 Error", href: "/error-500" },
          { name: "503 Error", href: "/error-503" },
          { name: "Coming Soon", href: "/coming-soon" },
          { name: "Maintenance", href: "/maintenance" },
          { name: "Success", href: "/success" },
        ],
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        name: "Chat",
        href: "/chat",
        icon: "MessageSquare",
      },
      {
        name: "Support",
        icon: "Headphones",
        badge: "new",
        badgeType: "new",
        subItems: [
          { name: "Support List", href: "/support-tickets" },
          { name: "Support Reply", href: "/support-ticket-reply" },
        ],
      },
      {
        name: "Email",
        icon: "Mail",
        subItems: [
          { name: "Inbox", href: "/inbox" },
          { name: "Details", href: "/inbox-details" },
        ],
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        name: "Charts",
        icon: "PieChart",
        subItems: [
          { name: "Line Chart", href: "/line-chart" },
          { name: "Bar Chart", href: "/bar-chart" },
          { name: "Pie Chart", href: "/pie-chart" },
          { name: "Radar Chart", href: "/radar-chart" },
          { name: "Radial Chart", href: "/radial-chart" },
        ],
      },
      {
        name: "Maps",
        icon: "MapPin",
        subItems: [
          { name: "Maps", href: "/maps" },
          { name: "Vector Map", href: "/vector-map" },
        ],
      },
      {
        name: "UI Elements",
        icon: "Component",
        subItems: [
          { name: "Alerts", href: "/alerts" },
          { name: "Avatar", href: "/avatars" },
          { name: "Badge", href: "/badge" },
          { name: "Breadcrumb", href: "/breadcrumb" },
          { name: "Buttons", href: "/buttons" },
          { name: "Buttons Group", href: "/buttons-group" },
          { name: "Cards", href: "/cards" },
          { name: "Carousel", href: "/carousel" },
          { name: "Dropdowns", href: "/dropdowns" },
          { name: "Images", href: "/images" },
          { name: "Links", href: "/links" },
          { name: "List", href: "/list" },
          { name: "Modals", href: "/modals" },
          { name: "Notification", href: "/notifications" },
          { name: "Pagination", href: "/pagination" },
          { name: "Popovers", href: "/popovers" },
          { name: "Progressbar", href: "/progress-bar" },
          { name: "Ribbons", href: "/ribbons" },
          { name: "Spinners", href: "/spinners" },
          { name: "Tabs", href: "/tabs" },
          { name: "Tooltips", href: "/tooltips" },
          { name: "Videos", href: "/videos" },
        ],
      },
      {
        name: "Authentication",
        icon: "Lock",
        subItems: [
          { name: "Sign In", href: "/signin" },
          { name: "Sign Up", href: "/signup" },
          { name: "Reset Password", href: "/reset-password" },
          { name: "Two Step Verification", href: "/two-step-verification" },
        ],
      },
    ],
  },
];
