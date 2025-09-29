'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Send, Clock, FileText, Briefcase } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    contact_for: 'quote',
    message: ''
  })

  const handleSubmit = (e) => {