    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'orange-primary': '#FF6B35',
            'orange-secondary': '#FF8C42',
            'coffee-dark': '#2D1B1B',
            'coffee-medium': '#5D4037',
            'fruity': '#FFF8E7'
          },
          fontFamily: {
            'display': ['Georgia', 'serif']
          },
          animation: {
            'float': 'float 3s ease-in-out infinite',
            'bounce-slow': 'bounce 2s infinite',
            'pulse-slow': 'pulse 3s infinite',
            'fadeInUp': 'fadeInUp 0.8s ease-out',
            'slideInLeft': 'slideInLeft 0.8s ease-out',
            'slideInRight': 'slideInRight 0.8s ease-out'
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            },
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            },
            slideInLeft: {
              '0%': { opacity: '0', transform: 'translateX(-50px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            },
            slideInRight: {
              '0%': { opacity: '0', transform: 'translateX(50px)' },
              '100%': { opacity: '1', transform: 'translateX(0)' }
            }
          }
        }
      }
    }