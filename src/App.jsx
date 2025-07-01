import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import HomePage from './components/HomePage/HomePage';
import AppLayout from './components/AppLayout/AppLayout';
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ContactPage from './components/ContactPage/ContactPage';
import ContractualStaffingServices from './components/ServicesPage/ContractualStaffingServices/ContractualStaffingServices';
import PermanentStaffingSolutions from './components/ServicesPage/PermanentStaffingSolutions/PermanentStaffingSolutions';
import LeadershipHiringServices from './components/ServicesPage/LeadershipHiringServices/LeadershipHiringServices';
import OutsourcingCompaniesInDubai from './components/ServicesPage/OutsourcingCompaniesInDubai/OutsourcingCompaniesInDubai';
import ExecutiveSearchServices from './components/ServicesPage/ExecutiveSearchServices/ExecutiveSearchServices';
import BlueCollarStaffing from './components/ServicesPage/BlueCollarStaffing/BlueCollarStaffing';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicyPage';
import JobConsultancyInDubai from './components/ServicesPage/JobConsultancyInDubai/JobConsultancyInDubai';
import RecruitmentAgenciesInDubai from './components/ServicesPage/RecruitmentAgenciesInDubai/RecruitmentAgenciesInDubai';
import ITRecruitmentAgenciesInDubai from './components/ServicesPage/ITRecruitmentAgenciesInDubai/ITRecruitmentAgenciesInDubai';
import SubmitYourCV from './components/HomePage/SubmitYourCV/SubmitYourCV';
import RequestACallBack from './components/HomePage/RequestACallBack/RequestACallBack';
import DownloadBrochure from './components/HomePage/brochure/DownloadBrochure';
import Career from './components/Career/career';

const App = () => {
  const rout = [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/contact-us',
          element: <ContactPage />,
        },
        {
          path: '/privacy-Policy',
          element: <PrivacyPolicyPage />,
        },
        {
          path: '/services',
          element: <ServicesPage />,
        },
        {
          path: '/services/Contractual-Staffing-Services',
          element: <ContractualStaffingServices />,
        },
        {
          path: '/services/Executive-Search',
          element: <ExecutiveSearchServices />,
        },
        {
          path: '/services/Permanent-Staffing-solution',
          element: <PermanentStaffingSolutions />,
        },
        {
          path: '/services/Blue-Collar-Staffing',
          element: <BlueCollarStaffing />,
        },
        {
          path: '/services/Leadership-Hiring',
          element: <LeadershipHiringServices />,
        },
        {
          path: '/services/Staff-Outsourcing',
          element: <OutsourcingCompaniesInDubai />,
        },
        {
          path: '/job-consultancy-in-dubai',
          element: <JobConsultancyInDubai />,
        },
        {
          path: '/recruitment-agencies-in-dubai',
          element: <RecruitmentAgenciesInDubai />,
        },
        {
          path: '/outsourcing-companies-in-dubai',
          element: <OutsourcingCompaniesInDubai />,
        },
        {
          path: '/it-recruitment-agencies-in-dubai',
          element: <ITRecruitmentAgenciesInDubai />,
        },
        {
          path: '/request-a-call-back',
          element: <RequestACallBack />,
        },
        {
          path: '/submit-your-cv',
          element: <SubmitYourCV />,
        },
        {
          path: '/download-brochure',
          element: <DownloadBrochure />,
        },
        {
          path: '/career', 
          element: <Career />,
          
        },
      ],
    },
  ];

  const router = createBrowserRouter(rout);
  return <RouterProvider router={router} />;
};

export default App;
