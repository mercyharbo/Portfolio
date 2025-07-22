'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Branding {
  logo_text: string
  logo_image: string
  primary_color: string
  secondary_color: string
  text_color: string
  user_bubble_color: string
  border_color: string
  border_radius: string
  widget_position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  font_family: string
  custom_css: string
}

interface TenantInfo {
  business_name: string
  chatbot_widget_icon: string
  branding: Branding
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
  ])
  const [inputValue, setInputValue] = useState('')
  const [tenantInfo, setTenantInfo] = useState<TenantInfo>({
    business_name: 'Your Support Bot',
    chatbot_widget_icon: '',
    branding: {
      logo_text: 'SB',
      logo_image: '',
      primary_color: '#007bff',
      secondary_color: '#007bff', // Default blue color
      text_color: '#222222',
      user_bubble_color: '#007bff',
      border_color: '#e0e0e0',
      border_radius: '12px',
      widget_position: 'bottom-right',
      font_family: 'Inter, sans-serif',
      custom_css: '',
    },
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [userId] = useState(() => 'user_1750709036521_yllc4djkdql')

  const formatBotMessage = (content: string) => {
    let formatted = content
      .trim()
      // Lists first - remove the bullet points since we'll style them with CSS
      .replace(/^[•·]\s*(.*$)/gm, (_, text) => `<li>${text.trim()}</li>`)
      .replace(/^\d+\.\s*(.*$)/gm, (_, text) => `<li>${text.trim()}</li>`)

      // Convert single line breaks to <br>, but handle double breaks differently
      .replace(/\n\n+/g, '|||PARAGRAPH|||') // Temporary marker for paragraphs
      .replace(/\n/g, '<br>')
      .replace(/\|\|\|PARAGRAPH\|\|\|/g, '</p><p>') // Convert back to paragraphs

    // Find consecutive list items and wrap them in <ul>
    formatted = formatted.replace(
      /(?:<li>.*?<\/li>(?:\s*<br>?\s*<li>.*?<\/li>)*)/g,
      (match) => `<ul>${match.replace(/<br>?\s*/g, '')}</ul>`
    )

    // Wrap in paragraph if no block elements
    if (!formatted.includes('<p>') && !formatted.includes('<ul>')) {
      formatted = `<p>${formatted}</p>`
    }

    return formatted
  }

  useEffect(() => {
    const loadBranding = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/chatbot/tenant-info`,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          }
        )
        if (response.ok) {
          const data = await response.json()
          if (data.branding) {
            setTenantInfo((prev) => ({
              ...prev,
              ...data,
              branding: { ...prev.branding, ...data.branding },
            }))
          }
        }
      } catch (error) {
        console.warn('Failed to fetch branding', error)
      }
    }
    loadBranding()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const { branding } = tenantInfo
    // Only set the secondary color, use it as the primary design color
    // root.style.setProperty('--chatbot-secondary', branding.secondary_color)
    // root.style.setProperty('--chatbot-text', branding.text_color)
    // root.style.setProperty('--chatbot-border', branding.border_color)
    // root.style.setProperty('--chatbot-radius', branding.border_radius)
    // root.style.setProperty('--chatbot-font', branding.font_family)
    root.style.setProperty('--chatbot-secondary', branding.user_bubble_color)
    root.style.setProperty('--chatbot-shadow', '0 8px 30px rgba(0,0,0,0.12)')

    if (branding.custom_css) {
      let styleEl = document.getElementById(
        'chatbot-custom-styles'
      ) as HTMLStyleElement
      if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = 'chatbot-custom-styles'
        document.head.appendChild(styleEl)
      }
      styleEl.textContent = branding.custom_css
    }
  }, [tenantInfo])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const capitalizeWords = (str: string) => {
    return str.replace(/\b\w/g, (c) => c.toUpperCase())
  }

  const createLogo = (size = 32) => {
    const { branding } = tenantInfo
    if (branding.logo_image) {
      return (
        <img
          src={branding.logo_image || '/placeholder.svg'}
          alt='Logo'
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )
    }
    return createTextLogo(size)
  }

  const createCompanyLogo = (size = 32) => {
    const { chatbot_widget_icon } = tenantInfo
    if (chatbot_widget_icon) {
      return (
        <img
          src={chatbot_widget_icon || '/placeholder.svg'}
          alt='Logo'
          style={{
            width: size,
            height: size,
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )
    }
    return createTextLogo(size)
  }

  const createTextLogo = (size: number) => {
    const { branding } = tenantInfo
    const text =
      branding.logo_text ||
      capitalizeWords(tenantInfo.business_name.substring(0, 2)).toUpperCase()
    const fontSize = Math.max(12, size * 0.3)
    return (
      <span
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--chatbot-primary)',
          color: 'var(--chatbot-background)',
          borderRadius: '50%',
          fontSize,
          fontFamily: 'var(--chatbot-font)',
          fontWeight: 600,
          textAlign: 'center',
          textTransform: 'capitalize',
          lineHeight: 1,
        }}
      >
        {text}
      </span>
    )
  }

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const newMessage: Message = { role: 'user', content: inputValue.trim() }
    setMessages((prev) => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/chatbot/chat/smart`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
          },
          body: JSON.stringify({
            message: newMessage.content,
            user_identifier: userId,
            max_context: 200,
          }),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error('Response body is not readable')
      }

      const decoder = new TextDecoder()
      let currentMessage = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })

        const lines = (currentMessage + chunk).split('\n')
        currentMessage = lines.pop() || ''

        for (const line of lines) {
          if (!line.trim()) continue

          try {
            const data = JSON.parse(line)
            console.log('Parsed message data:', data) // Log parsed data

            switch (data.type) {
              case 'main_response':
                // Process and format the content
                let formattedContent = data.content

                // Preserve line breaks from backend
                if (typeof formattedContent === 'string') {
                  // Replace \n with <br /> for HTML rendering
                  formattedContent = formattedContent
                    .split('\n')
                    .map((line) => line.trim())
                    .filter((line) => line.length > 0)
                    .join('\n')
                }

                // Immediately update the UI with the formatted content
                setMessages((prev) => {
                  const lastMessage = prev[prev.length - 1]
                  if (
                    lastMessage?.role === 'assistant' &&
                    lastMessage.content === ''
                  ) {
                    // Update existing empty assistant message
                    return prev.map((msg, i) =>
                      i === prev.length - 1
                        ? { ...msg, content: formattedContent }
                        : msg
                    )
                  } else {
                    // Add new assistant message
                    return [
                      ...prev,
                      { role: 'assistant', content: formattedContent },
                    ]
                  }
                })
                break

              case 'followup':
                // Handle followup suggestions
                if (data.content) {
                  console.log('Followup suggestion:', data.content)
                  // You can implement followup UI here
                }
                break

              case 'complete':
                setIsTyping(false)
                break

              case 'error':
                console.error('Chat error:', data.error)
                setMessages((prev) => [
                  ...prev,
                  {
                    role: 'assistant',
                    content: 'Error responding, please try again.',
                  },
                ])
                setIsTyping(false)
                break

              default:
                console.warn('Unknown message type:', data.type)
            }
          } catch (error) {
            console.error('Failed to parse JSON:', error, 'Line:', line)
          }
        }
      }

      // Ensure typing indicator is removed when stream ends
      setIsTyping(false)
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Error responding, please try again.',
        },
      ])
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const getPositionClass = () => {
    return `chatbot-${tenantInfo.branding.widget_position}`
  }

  const TypingIndicator = () => (
    <div className='chatbot-typing'>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
    </div>
  )

  return (
    <>
      {/* Enhanced floating particles background */}
      <div className='chatbot-particles'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <button
        className={`chatbot-open-btn ${getPositionClass()}`}
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        {createCompanyLogo(24)}
        <div className='chatbot-pulse-ring'></div>
        <div className='chatbot-pulse-ring-2'></div>
      </button>

      <div
        className={`chatbot-widget ${getPositionClass()} ${
          isOpen ? 'chatbot-widget-open' : ''
        }`}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {/* Enhanced header with gradient */}
        <div className='chatbot-header'>
          <div className='chatbot-header-left'>
            <div className='chatbot-logo-container'>{createLogo(32)}</div>
            <div className='chatbot-header-info'>
              <span className='chatbot-title'>
                {capitalizeWords(tenantInfo.business_name)}
              </span>
            </div>
          </div>
          <button
            className='chatbot-close-btn'
            onClick={() => setIsOpen(false)}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
        </div>

        <div className='chatbot-body'>
          {/* Enhanced brand section */}
          <div className='chatbot-brand-section'>
            <div className='chatbot-brand-logo-wrapper'>
              {createLogo(56)}
              <div className='chatbot-brand-glow'></div>
            </div>
            <div className='chatbot-brand-name'>
              {capitalizeWords(tenantInfo.business_name)}
            </div>
            <div className='chatbot-brand-subtitle'>
              We&apos;re here to help! Ask us anything.
            </div>
          </div>

          {/* Enhanced messages with animations */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chatbot-message ${
                message.role === 'assistant' ? 'assistant' : 'user'
              } chatbot-message-animate`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`chatbot-bubble ${message.role} chatbot-bubble-enhanced`}
              >
                {message.role === 'assistant' ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatBotMessage(message.content),
                    }}
                  />
                ) : (
                  message.content.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.content.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))
                )}
                <div className='chatbot-bubble-tail'></div>
              </div>
            </div>
          ))}

          {/* Enhanced typing indicator */}
          {isTyping && (
            <div className='chatbot-message assistant chatbot-message-animate'>
              <div className='chatbot-avatar chatbot-avatar-bounce'>
                {createLogo(32)}
              </div>
              <div className='chatbot-bubble assistant typing-bubble chatbot-bubble-enhanced'>
                <TypingIndicator />
                <div className='chatbot-bubble-tail'></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced input area */}
        <div className='chatbot-input-area'>
          <div className='chatbot-input-wrapper'>
            <input
              ref={inputRef}
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Type your message...'
              className='chatbot-input'
            />
            <button
              onClick={sendMessage}
              className='chatbot-send-btn'
              disabled={!inputValue.trim()}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='chatbot-send-icon'
              >
                <line x1='22' y1='2' x2='11' y2='13'></line>
                <polygon points='22,2 15,22 11,13 2,9 22,2'></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatbotWidget
