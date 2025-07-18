# 🤖 MomHive - AI-Powered Parenting Assistant

> A full-stack SaaS application providing AI-powered parenting support with subscription-based monetization and PWA capabilities.

**🌐 Live Demo:** [momhive.org](https://momhive.org)

![MomHive Screenshot](https://sjc.microlink.io/YA__AUcdaeUvlYiJ_RZTFRgx5TasP4uhH2004iFpPUzEJ6ZRsgCL-Z_ywXhv1S9y1-MyO7eRW9dh8HN_M6t3ew.jpeg)

## 🚀 Overview

MomHive is a modern parenting assistant that leverages OpenAI's GPT models to provide personalized, real-time support to mothers. Built with a privacy-first approach, the application offers anonymous consultations without requiring user accounts.

## ✨ Key Features

### 🤖 **AI-Powered Chat System**
- **Personality Matching**: AI adapts communication style to match user's tone and energy
- **Specialized Prompts**: Focused on parenting, nutrition, activities, and child development
- **Real-time Streaming**: Fast, responsive chat experience using AI SDK
- **Medical Disclaimers**: Professional safety warnings for health-related queries

### 💳 **Subscription Management**
- **Freemium Model**: 3 free consultations, then subscription required
- **Stripe Integration**: Professional payment processing with test/live mode support
- **Local Storage Tracking**: Simple user state management without databases
- **Automatic Price Selection**: Environment-based pricing for test/production

### 📱 **Progressive Web App (PWA)**
- **Installable**: Users can add to home screen like native apps
- **Offline Capable**: Works without internet connection
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **App-like Experience**: Full-screen mode with no browser UI

### 🎨 **Modern UI/UX**
- **Futuristic Theme**: Space-inspired design with animated elements
- **Responsive Layout**: Tailwind CSS with custom animations
- **Loading States**: Polished user experience with skeleton screens
- **Error Handling**: Graceful failure management with user-friendly messages

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library

### **Backend**
- **Next.js API Routes** - Serverless functions
- **OpenAI API** - GPT-4o-mini for AI responses
- **Stripe API** - Payment processing and subscriptions
- **AI SDK** - Vercel's AI toolkit for streaming responses

### **Deployment & Infrastructure**
- **Vercel** - Hosting and deployment
- **Custom Domain** - Professional branding
- **Environment Variables** - Secure API key management
- **SSL/HTTPS** - Automatic security certificates

## 🏗️ Architecture

\`\`\`
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Routes     │    │  External APIs  │
│                 │    │                  │    │                 │
│ • React/Next.js │◄──►│ • /api/chat      │◄──►│ • OpenAI GPT    │
│ • TypeScript    │    │ • /api/checkout  │    │ • Stripe        │
│ • Tailwind CSS  │    │ • /api/webhook   │    │                 │
│ • PWA Manifest  │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key
- Stripe account (test/live keys)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/momhive-ai-assistant.git
   cd momhive-ai-assistant
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your API keys:
   \`\`\`env
   OPENAI_API_KEY=your_openai_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_PRICE_ID_TEST=your_test_price_id
   STRIPE_PRICE_ID_LIVE=your_live_price_id
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open [http://localhost:3000](http://localhost:3000)**

## 💼 Business Model

- **Freemium Approach**: 3 free AI consultations per user
- **Subscription Pricing**: $20/month for unlimited access
- **Privacy-First**: No user accounts required, anonymous usage
- **Direct Monetization**: No app store fees, 100% revenue retention

## 🎯 Key Achievements

- ✅ **Full-Stack Development**: Complete product from concept to deployment
- ✅ **AI Integration**: Advanced prompt engineering and response streaming
- ✅ **Payment Processing**: Secure subscription management with Stripe
- ✅ **PWA Implementation**: Native app experience without app stores
- ✅ **Responsive Design**: Optimized for all device types
- ✅ **Production Deployment**: Live application with custom domain

## 📊 Technical Highlights

### **AI Implementation**
- Custom system prompts for parenting-specific responses
- Personality matching algorithm that adapts to user communication style
- Streaming responses for real-time chat experience
- Error handling and fallback mechanisms

### **Payment Integration**
- Stripe Checkout Sessions for secure payment processing
- Webhook handling for subscription lifecycle management
- Environment-based price selection (test/live modes)
- Local storage for subscription state management

### **PWA Features**
- Web App Manifest for installability
- Service worker for offline functionality
- App-like navigation and user experience
- Cross-platform compatibility

## 🔮 Future Enhancements

- [ ] Push notifications for user re-engagement
- [ ] Offline chat history storage
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Integration with parenting resources and tools

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

**Your Name** - [your.email@example.com](mailto:your.email@example.com)

**Project Link:** [https://github.com/yourusername/momhive-ai-assistant](https://github.com/yourusername/momhive-ai-assistant)

**Live Demo:** [https://momhive.org](https://momhive.org)

---

*Built with ❤️ for modern mothers everywhere*
