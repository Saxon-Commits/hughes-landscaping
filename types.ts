
import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

// Add missing interface for chat messages
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
