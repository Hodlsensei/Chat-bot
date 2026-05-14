'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, Phone, Clock, CheckCheck, User } from 'lucide-react'

const WhatsAppVisaAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm Lillys Global's Visa Assistant. I'm here to help you with visa information before your consultation. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      status: 'read'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    "🛂 Tourist Visa Requirements",
    "💼 Business Visa Info",
    "📚 Student Visa Process",
    "⏰ Processing Times",
    "📄 Required Documents",
    "💰 Visa Fees",
    "📞 Book Consultation",
    "📍 Office Location"
  ]

  const getVisaResponse = (message) => {
    const lowerMsg = message.toLowerCase()
    
    if (lowerMsg.includes('tourist') || lowerMsg.includes('vacation') || lowerMsg.includes('holiday')) {
      return "🛂 Tourist Visa Information:\n\n• Valid passport (6+ months)\n• Passport photos (2 recent)\n• Completed application form\n• Flight itinerary\n• Hotel reservation\n• Bank statement (3 months)\n• Employment letter\n• Travel insurance\n\nProcessing time: 5-15 business days 📅\nFee varies by destination 💰\n\nWould you like specific country information? 🌍"
    }
    
    if (lowerMsg.includes('business') || lowerMsg.includes('work') || lowerMsg.includes('commercial')) {
      return "💼 Business Visa Requirements:\n\n• Valid passport (6+ months)\n• Business invitation letter\n• Company registration documents\n• Bank statements (6 months)\n• Employment verification\n• Travel itinerary\n• Passport photos\n• Application form\n\nProcessing: 7-21 business days ⏰\nMay require interview 🗣️\n\nNeed help with invitation letters? 📧"
    }
    
    if (lowerMsg.includes('student') || lowerMsg.includes('study') || lowerMsg.includes('education')) {
      return "📚 Student Visa Process:\n\n• School acceptance letter\n• Financial proof/sponsorship\n• Academic transcripts\n• Language proficiency test\n• Medical examination\n• Valid passport\n• Passport photos\n• Statement of purpose\n\nProcessing: 4-8 weeks 📆\nInterview often required 🎤\n\nWhich country are you applying to? 🎓"
    }
    
    if (lowerMsg.includes('processing') || lowerMsg.includes('time') || lowerMsg.includes('how long')) {
      return "⏰ Visa Processing Times:\n\n🇺🇸 USA: 3-5 weeks\n🇬🇧 UK: 3-6 weeks\n🇨🇦 Canada: 2-4 weeks\n🇦🇺 Australia: 2-4 weeks\n🇩🇪 Schengen: 15-30 days\n🇦🇪 UAE: 3-7 days\n🇿🇦 South Africa: 10-15 days\n\nRush processing available for some countries ⚡\n\nWhich destination interests you? 🗺️"
    }
    
    if (lowerMsg.includes('document') || lowerMsg.includes('papers') || lowerMsg.includes('requirements')) {
      return "📄 Common Required Documents:\n\n✅ Valid passport (6+ months)\n✅ Completed application form\n✅ Passport-size photos\n✅ Bank statements\n✅ Travel itinerary\n✅ Accommodation proof\n✅ Employment letter\n✅ Travel insurance\n\nAdditional documents may be required based on:\n• Destination country 🌍\n• Visa type 📝\n• Your nationality 🛂\n\nTell me your destination for specific requirements! 📍"
    }
    
    if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('price') || lowerMsg.includes('money')) {
      return "💰 Visa Fees Overview:\n\n🇺🇸 USA: $160-$265\n🇬🇧 UK: £95-£470\n🇨🇦 Canada: CAD $100-$150\n🇦🇺 Australia: AUD $145-$380\n🇩🇪 Schengen: €80-€160\n🇦🇪 UAE: $100-$200\n\nService fees:\n• Document review: ₦15,000\n• Application assistance: ₦25,000\n• Complete package: ₦40,000\n\nPayment plans available! 💳\nWhich visa are you interested in? 🤔"
    }
    
    if (lowerMsg.includes('consultation') || lowerMsg.includes('appointment') || lowerMsg.includes('meeting') || lowerMsg.includes('book')) {
      return "📞 Book Your Consultation:\n\n📅 Available times:\n• Monday-Friday: 9AM-5PM\n• Saturday: 10AM-2PM\n• Sunday: Closed\n\n💬 Consultation includes:\n• Document review\n• Application guidance\n• Country-specific advice\n• Timeline planning\n\n📲 To book, click 'Chat on WhatsApp' below or call directly!\n\nPreferred date and time? 🗓️"
    }
    
    if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('office') || lowerMsg.includes('visit')) {
      return "📍 Office Location:\n\n🏢 Mrs. Lillian Visa Services\n📮 Room 4, Underground Plaza, Favos Building, Local, New bodija,\n🌆 Ibadan, Nigeria\n\n🚗 Getting here:\n• Parking available\n• Near major landmarks\n• Public transport accessible\n\n⏰ Office Hours:\n• Mon-Fri: 9AM-5PM\n• Sat: 10AM-2PM\n• Sun: Closed\n\n📱 Call before visiting to ensure availability! 📞"
    }
    
    if (lowerMsg.includes('usa') || lowerMsg.includes('america') || lowerMsg.includes('united states')) {
      return "🇺🇸 USA Visa Information:\n\n📋 Types available:\n• B1/B2 (Tourist/Business)\n• F1 (Student)\n• H1B (Work)\n• K1 (Fiancé)\n\n⏰ Processing: 3-5 weeks\n💰 Fee: $160-$265\n🎤 Interview required\n\n📄 Key requirements:\n• DS-160 form\n• Interview appointment\n• Financial proof\n• Strong home ties\n\nNeed help with DS-160 form? 📝"
    }
    
    if (lowerMsg.includes('uk') || lowerMsg.includes('britain') || lowerMsg.includes('united kingdom')) {
      return "🇬🇧 UK Visa Information:\n\n📋 Popular types:\n• Standard Visitor\n• Student Visa\n• Work Visa\n• Family Visa\n\n⏰ Processing: 3-6 weeks\n💰 Fee: £95-£470\n🏥 Biometrics required\n\n📄 Key documents:\n• TB test (if applicable)\n• Financial requirements\n• English language proof\n• Accommodation details\n\nWhich UK visa type interests you? 🏰"
    }
    
    if (lowerMsg.includes('canada')) {
      return "🇨🇦 Canada Visa Information:\n\n📋 Main types:\n• Visitor Visa\n• Study Permit\n• Work Permit\n• Express Entry\n\n⏰ Processing: 2-4 weeks\n💰 Fee: CAD $100-$150\n💻 Online application\n\n📄 Requirements:\n• Biometrics\n• Medical exam (sometimes)\n• Police clearance\n• Financial proof\n\nInterested in Canadian immigration? 🍁"
    }
    
    if (lowerMsg.includes('schengen') || lowerMsg.includes('europe') || lowerMsg.includes('eu')) {
      return "🇪🇺 Schengen Visa Information:\n\n🌍 Access to 26 countries:\n• Germany, France, Italy\n• Spain, Netherlands, etc.\n\n⏰ Processing: 15-30 days\n💰 Fee: €80-€160\n📅 Valid: Up to 90 days\n\n📄 Requirements:\n• Travel insurance (€30,000)\n• Hotel reservations\n• Flight bookings\n• Bank statements\n\nWhich Schengen country? 🗺️"
    }
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('good morning') || lowerMsg.includes('good afternoon')) {
      return "Hello! 😊 Welcome to Mrs. Lillian's Visa Services! \n\nI'm here to help you with:\n• Visa requirements 📋\n• Document checklists ✅\n• Processing times ⏰\n• Application guidance 📝\n\nWhat type of visa are you interested in? 🌍"
    }
    
    if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
      return "You're very welcome! 😊 \n\nIs there anything else I can help you with? \n\n• Different visa type? 🌍\n• Document questions? 📄\n• Processing times? ⏰\n• Book consultation? 📞\n\nI'm here to help! 💪"
    }
    
    // Default response
    return "I'd be happy to help you with visa information! 😊\n\nI can assist with:\n\n🛂 Tourist visas\n💼 Business visas\n📚 Student visas\n⏰ Processing times\n📄 Required documents\n💰 Visa fees\n\nWhat specific information would you like? Or click one of the quick replies below! 👇"
  }

  const simulateTyping = () => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    // setShowQuickReplies(false) // Keep quick replies visible

    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'delivered' } : msg
      ))
    }, 500)

    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'read' } : msg
      ))
    }, 1000)

    simulateTyping()

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getVisaResponse(text),
        sender: 'bot',
        timestamp: new Date(),
        status: 'read'
      }
      setMessages(prev => [...prev, botResponse])
      setShowQuickReplies(true) // Show quick replies after bot response
    }, 1500 + Math.random() * 1000)
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <CheckCheck className="w-4 h-4 text-gray-400" />
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-gray-500" />
      case 'read':
        return <CheckCheck className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello Lillys Global! I got your contact from your visa assistant. I'd like to book a consultation.")
    const whatsappUrl = `https://wa.me/2348035571705?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* WhatsApp Header */}
      <div className="bg-green-600 text-white px-4 py-3 flex items-center shadow-lg">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
          <User className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Lillys Global Visa Services</h1>
          <p className="text-sm text-green-100">🟢 Online </p>
        </div>
        <button 
          onClick={openWhatsApp}
          className="ml-2 p-2 hover:bg-green-700 rounded-full transition-colors"
          title="Call Mrs. Lillian"
        >
          <Phone className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Background Pattern */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-2"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#e5ddd5'
        }}
      >
        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm relative ${
                message.sender === 'user'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
              style={{
                borderRadius: message.sender === 'user' 
                  ? '18px 18px 4px 18px' 
                  : '18px 18px 18px 4px'
              }}
            >
              {/* Chat Bubble Tail */}
              <div
                className={`absolute w-0 h-0 ${
                  message.sender === 'user'
                    ? 'right-0 top-0 -mr-2 border-l-8 border-l-green-500 border-t-8 border-t-transparent'
                    : 'left-0 top-0 -ml-2 border-r-8 border-r-white border-t-8 border-t-transparent'
                }`}
              />
              
              <div className="whitespace-pre-line text-sm leading-relaxed">
                {message.text}
              </div>
              
              <div className={`flex items-center justify-end mt-1 space-x-1 ${
                message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
              }`}>
                <span className="text-xs">
                  {formatTime(message.timestamp)}
                </span>
                {message.sender === 'user' && getStatusIcon(message.status)}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="mb-4 flex justify-start">
            <div className="bg-white px-4 py-3 rounded-lg shadow-sm max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Replies */}
        {showQuickReplies && (
          <div className="mb-4">
            <p className="text-center text-gray-600 text-sm mb-3">Quick options:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-gray-100 px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        {/* WhatsApp Direct Contact Button */}
        <div className="mt-3 flex justify-center">
          <button
            onClick={openWhatsApp}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors shadow-lg flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppVisaAssistant