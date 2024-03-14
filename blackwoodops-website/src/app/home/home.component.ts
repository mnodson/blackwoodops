import { Component } from '@angular/core';

export interface Session {
  heading: string;
  subheading?: string;
  copy?: string;
  keySellingPoints?: KeySellingPoints;
  guestSpeaker?: GuestSpeaker;
}

export interface KeySellingPoints {
  points: Array<KeySellingPoint>;
}

export interface KeySellingPoint {
  heading: string;
  ksp?: string;
}

export interface GuestSpeaker {
  name: string;
  org: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public sessions: Array<Session> = [
    {
      heading: 'Transform your business vision into a roadmap for success with a tailored business plan',
      subheading: 'Get the clarity, strategy, and funding support you need to achieve your goals',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Tailored Strategy',
            ksp: 'We don\'t do cookie-cutter plans. We\'ll uncover your unique strengths, market opportunities, and create a plan that\'s built for your specific business'
          },
          {
            heading: 'Actionable Insights',
            ksp: 'Get more than just theory - our plans provide clear steps, measurable targets, and realistic projections'
          },
          {
            heading: 'Funding-Ready',
            ksp: 'Attract investors or secure loans with a professional, comprehensive business plan that demonstrates your potential'
          },
          {
            heading: 'Experience That Counts',
            ksp: 'Leverage our decades of consulting success, helping businesses like yours navigate growth and achieve their objectives'
          },
          {
            heading: 'Collaborative process: We work as partners, involving you at every stage'
          }
        ]
      }
    },
    {
      heading: 'Secure the funding you deserve with a high-impact pitch deck',
      subheading: 'We design visually stunning, persuasive pitch decks that get investors excited',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Investor-Focused Design',
            ksp: 'Our decks are crafted to address the critical questions investors care about, highlighting your potential and minimizing risk.'
          },
          {
            heading: 'Compelling Narrative',
            ksp: 'We\'ll transform your data and ideas into a clear, engaging story that resonates with your target audience'
          },
          {
            heading: 'Visually Persuasive',
            ksp: 'More than just slides, we use compelling visuals, infographics, and design to make your key points unforgettable'
          },
          {
            heading: 'Proven Track Record',
            ksp: 'We\'ve helped clients raise millions in funding, utilizing successful pitch deck strategies'
          },
          {
            heading: 'Partner, not just provider: We\'ll collaborate with you to ensure your pitch deck authentically reflects your business.'
          }
        ]
      }
    },
    {
      heading: 'Gain financial clarity and confidence with expert forecasting',
      subheading: 'Make informed decisions, optimize cash flow, and unlock growth potential with accurate projections',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Data-Driven Insights',
            ksp: 'We go beyond spreadsheets, analyzing your financials to uncover trends, opportunities, and potential risks'
          },
          {
            heading: 'Scenario Planning',
            ksp: 'Prepare for anything. We\'ll model different "what-if" scenarios to help you make proactive, strategic choices'
          },
          {
            heading: 'Strategic Guidance',
            ksp: 'Forecasts are tools, not just reports. We\'ll help you interpret the numbers and translate them into actionable growth plans'
          },
          {
            heading: 'Expertise on Your Side',
            ksp: 'Tap into our decades of financial forecasting experience, providing tailored solutions for businesses like yours'
          },
          {
            heading: 'Clear, understandable reports: Forecasts presented in a way that\'s easy to grasp and utilize for decision-making'
          }
        ]
      }
    },
    {
      heading: 'Protect your business and achieve your goals with proactive risk management.',
      subheading: 'Identify potential threats, minimize vulnerabilities, and build a more resilient organization',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Comprehensive Approach',
            ksp: 'We look beyond financials, assessing risks across operations, technology, reputation, compliance, and more'
          },
          {
            heading: 'Tailored Solutions',
            ksp: 'No one-size-fits all. We develop risk mitigation strategies aligned with your unique business needs and risk tolerance'
          },
          {
            heading: 'Actionable, Not Abstract',
            ksp: 'We deliver clear risk management plans with practical steps to reduce exposure and protect your bottom line'
          },
          {
            heading: 'Expertise You Can Trust',
            ksp: 'Lean on our decades of risk management experience, helping businesses of all sizes navigate uncertainty'
          },
          {
            heading: 'Partnership for resilience: We work collaboratively to embed risk awareness throughout your organization'
          }
        ]
      }
    },
    {
      heading: 'Unlock the funding you need to fuel your growth',
      subheading: 'Expert guidance to navigate funding options, secure investment, and achieve your business ambitions',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Strategic Matchmaking',
            ksp: 'We\'ll go beyond generic advice and match you with the funding sources best suited to your business stage, goals, and financial profile'
          },
          {
            heading: 'Investor-Ready Preparation',
            ksp: 'We\'ll help you refine your pitch, financial projections, and documentation to maximize your chances of securing funding'
          },
          {
            heading: 'Negotiation Support',
            ksp: 'Gain greater leverage with our guidance on terms, valuations, and funding agreements'
          },
          {
            heading: 'Beyond Just Money',
            ksp: 'Tap into our network of potential investors, mentors, and strategic partners'
          },
          {
            heading: 'Actionable next steps: With clear milestones to keep your funding efforts on track'
          }
        ]
      },
      guestSpeaker: {
        name: 'Reagan Rodriguez',
        org: '5th Ave Capital'
      }
    },
    {
      heading: 'Scale efficiently and sustainably with optimized operations ramp-up',
      subheading: 'Maximize growth potential while minimizing risk through strategic planning and prioritization',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Prioritization Power',
            ksp: 'We\'ll help you identify the critical investments that will drive immediate growth and those that can be phased in strategically'
          },
          {
            heading: 'Bottleneck Buster',
            ksp: 'We\'ll pinpoint potential roadblocks in your operations, developing solutions to prevent costly delays'
          },
          {
            heading: 'Capacity & Capability',
            ksp: 'We\'ll assess your current capacity and analyze the skills and resources needed to support your expansion goals'
          },
          {
            heading: 'Data-Driven Decisions',
            ksp: 'We base recommendations on a thorough analysis of your operational metrics and market projections'
          },
          {
            heading: 'Risk mitigation built-in: Our approach anticipates potential challenges, minimizing operational disruption during expansion'
          }
        ]
      }
    },
    {
      heading: 'Unlock your potential: Identify your strengths, address weaknesses, and fuel personal/team development',
      subheading: 'Gain the self-awareness and tools to achieve your goals and maximize performance',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Individualized or Team Focus',
            ksp: 'We tailor our approach, offering one-on-one coaching or dynamic team workshops to address specific needs'
          },
          {
            heading: 'Beyond Buzzwords',
            ksp: 'We go deeper than generic "strengths" and "weaknesses," uncovering the underlying skills and habits that drive success or create obstacles'
          },
          {
            heading: 'Action-Oriented',
            ksp: 'This isn\t just about self-discovery; we\'ll develop actionable strategies to leverage strengths and overcome weaknesses'
          },
          {
            heading: 'Proven Techniques',
            ksp: 'We utilize a range of assessment tools, frameworks, and exercises backed by research and best practices'
          },
          {
            heading: '"Aha!" Moments Guaranteed: We facilitate honest self-reflection and provide fresh perspectives on strengths and drawbacks'
          }
        ]
      }
    },
    {
      heading: 'Make the right leadership choices for your startup\'s success',
      subheading: 'Expert guidance on navigating part-time vs. full-time founder roles, structuring ownership, and designing compensation strategies that attract talent and align incentives',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Strategic Alignment',
            ksp: 'We\'ll help you determine the optimal level of founder involvement and ownership structure to match your startup\'s stage and goals'
          },
          {
            heading: 'Competitive Advantage',
            ksp: 'We\'ll design compensation packages that help you attract and retain top talent in a competitive early-stage market'
          },
          {
            heading: 'Founder-Investor Harmony',
            ksp: 'We\'ll ensure your ownership and compensation plans are transparent and align with investor expectations'
          },
          {
            heading: 'Experience at the Early Stage',
            ksp: 'We\'ve guided numerous startups through these critical leadership decisions, understanding the unique challenges involved'
          },
          {
            heading: 'Data-backed Decision-Making: We\'ll provide benchmarking data and insights on early-stage leadership models'
          }
        ]
      }
    },
    {
      heading: 'Take control of your finances and achieve your financial goals',
      subheading: 'Get the tools, strategies, and support you need to build a solid financial foundation',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Budgeting Basics & Beyond',
            ksp: 'We\'ll teach you proven budgeting techniques and how to customize them for your unique needs'
          },
          {
            heading: 'Smarter Debt Management',
            ksp: 'Whether it\'s paying down debt or using credit strategically, we\'ll guide you towards financial freedom'
          },
          {
            heading: 'Grow Your Money Mindset',
            ksp: 'We help you break down negative money beliefs and build habits that foster wealth'
          },
          {
            heading: 'Tailored for You',
            ksp: 'One-on-one coaching or workshops designed specifically for you'
          },
          {
            heading: 'Financial Confidence: "Understand your numbers, make informed decisions, and feel less stressed about money."'
          }
        ]
      }
    },
    {
      heading: 'Start your business on solid ground: Choose the right business structure',
      subheading: 'Expert guidance on selecting the legal entity that aligns with your goals, protects your assets, and sets you up for success',
      keySellingPoints:
      {
        points: [
          {
            heading: 'Beyond the Basics',
            ksp: 'We\'ll explain the pros, cons, and tax implications of different business structures (sole proprietorship, LLC, corporation, etc.)'
          },
          {
            heading: 'Minimize Risk, Maximize Potential',
            ksp: 'We\'ll help you choose a structure that protects personal assets, optimizes tax benefits, and supports growth'
          },
          {
            heading: 'The Legal Side Made Simple',
            ksp: 'We\'ll guide you through the formation process, including necessary filings and paperwork'
          },
          {
            heading: 'Your Business, Your Choice',
            ksp: 'We empower you with the knowledge to make an informed decision about your business entity'
          },
          {
            heading: 'Resources & Support: We\'ll connect you with resources for business registration, tax guidance, and ongoing legal support'
          }
        ]
      }
    }
  ];
}
