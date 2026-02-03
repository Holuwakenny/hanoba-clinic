
import React from 'react';
import { Activity, Heart, ShieldAlert, Baby, Clock, Microscope } from 'lucide-react';
import { Service, NavItem } from './types.ts';

export const BUSINESS_INFO = {
  name: "Hanoba Medical Centre",
  address: "Phase 1, 10 Udi St, Ikoyi, Lagos 106104, Lagos",
  hours: "Open 24 hours",
  phone: "0808 758 6598",
  plusCode: "FC7G+G6 Lagos",
  email: "info@hanobamedical.com"
};

export const IMAGES = {
  entrance: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoAmgZX3Zre8oiEuRPoCTlNm40etEZUjSAgF24Awy1jKAErRMTfoLc096C7BZOFs4PyCLjioGyvtmoFHdmJ8W-QQMi2My_q3qzgmypofZ44TCEd1HuHpjr--OJSGXPBR1DOSSxZkw=w1200-h800-k-no",
  reception: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepe0Ikn2LlAOkRnUzZBrOBR75qfykFJg0kbriG4vtpTHRceVQnpeXmeEGBn110N6kfwY8_ii3nsYsHy45Sz3y8AcJMTNp8iC9zMtdKh-SvPZAomsbEiICWUR40aYc9pWAYZ2Xd9=w1200-h800-k-no",
  equipment: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerfAzpcSDhYL-jXu-orT9ddvH0ZFPVNZmZseQkoGuB9m2iIf4T5f6ukpEg3IZlA_fCkPOq2BBmJxQA_fNhNZCZh1q7bUaqAFVf30CHRnGo3gJlcWhPSmXMI2bFsj2jlFStSQuT4HA=w1200-h800-k-no",
  ward: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcu2-6qBJEhJLLtGhF7fsGCV-WUPMXKmyBdSj2ZS1TFdwwM6rAThZxh8-FPQ-df30-x8euvHf1nzslECJiH7CEJQzrLyvxfZLbmJST9OTrWF8VD8MJ8vMgdc1vZZXq__EvfvN6=w1200-h800-k-no",
  signage: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqrhPZFPcyk8hWLeZ3_Tu0oC_iLFQlak9enjfRniO82aGJlMHPI2BbAjEyz4uswhM1-dJaRsMOH-1cgQ7yYtXRWVYS6E1Ji6s0X8tSN-IGCe4rWQ2sRHxhrcPe_EJkWlpy18wIN=w1200-h800-k-no"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'General Practice',
    description: 'Comprehensive family medicine and diagnostic services for patients of all ages.',
    icon: <Activity className="w-8 h-8 text-blue-600" />
  },
  {
    id: '2',
    title: 'Pediatric Care',
    description: 'Specialized healthcare for infants, children, and adolescents in a kid-friendly environment.',
    icon: <Baby className="w-8 h-8 text-pink-500" />
  },
  {
    id: '3',
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency medical response and critical care services.',
    icon: <ShieldAlert className="w-8 h-8 text-red-600" />
  },
  {
    id: '4',
    title: 'Maternity Services',
    description: 'Expert antenatal and postnatal care ensuring the well-being of mother and child.',
    icon: <Heart className="w-8 h-8 text-red-400" />
  },
  {
    id: '5',
    title: 'Diagnostic Lab',
    description: 'Fully equipped laboratory for accurate and rapid medical testing.',
    icon: <Microscope className="w-8 h-8 text-indigo-600" />
  },
  {
    id: '6',
    title: 'Preventative Health',
    description: 'Regular check-ups, vaccinations, and wellness programs to keep you healthy.',
    icon: <Clock className="w-8 h-8 text-green-600" />
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];
