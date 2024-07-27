export const TranslateCard = () => {
    const languages = [
        { code: 'EN', name: 'English (US)', flag: '🇺🇸' },
        { code: 'ES', name: 'Español', flag: '🇪🇸' },
        { code: 'FR', name: 'Français', flag: '🇫🇷' },
        { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
        { code: 'PT', name: 'Português', flag: '🇵🇹' },
        { code: 'RU', name: 'Русский', flag: '🇷🇺' },
        { code: 'ZH', name: '中文', flag: '🇨🇳' },
        { code: 'JA', name: '日本語', flag: '🇯🇵' },
        { code: 'KO', name: '한국어', flag: '🇰🇷' },
        { code: 'AR', name: 'العربية', flag: '🇸🇦' },
        { code: 'HI', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'NL', name: 'Nederlands', flag: '🇳🇱' },
        { code: 'PL', name: 'Polski', flag: '🇵🇱' },
        { code: 'SV', name: 'Svenska', flag: '🇸🇪' },
        { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'DA', name: 'Dansk', flag: '🇩🇰' },
        { code: 'FI', name: 'Suomi', flag: '🇫🇮' },
        { code: 'NO', name: 'Norsk', flag: '🇳🇴' },
        { code: 'CS', name: 'Čeština', flag: '🇨🇿' },
        { code: 'HU', name: 'Magyar', flag: '🇭🇺' },
        { code: 'UK', name: 'Українська', flag: '🇺🇦' },
        { code: 'EL', name: 'Ελληνικά', flag: '🇬🇷' },
        { code: 'RO', name: 'Română', flag: '🇷🇴' },
        { code: 'VI', name: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'TH', name: 'ไทย', flag: '🇹🇭' },
        { code: 'ID', name: 'Bahasa Indonesia', flag: '🇮🇩' },
        { code: 'MS', name: 'Bahasa Melayu', flag: '🇲🇾' },
        { code: 'FA', name: 'فارسی', flag: '🇮🇷' },
        { code: 'HE', name: 'עברית', flag: '🇮🇱' },
        { code: 'BG', name: 'Български', flag: '🇧🇬' },
        { code: 'HR', name: 'Hrvatski', flag: '🇭🇷' },
        { code: 'SR', name: 'Српски', flag: '🇷🇸' },
        { code: 'SK', name: 'Slovenčina', flag: '🇸🇰' },
        { code: 'SL', name: 'Slovenščina', flag: '🇸🇮' },
        { code: 'ET', name: 'Eesti', flag: '🇪🇪' },
        { code: 'LV', name: 'Latviešu', flag: '🇱🇻' },
        { code: 'LT', name: 'Lietuvių', flag: '🇱🇹' },
        { code: 'IS', name: 'Íslenska', flag: '🇮🇸' },
        { code: 'GA', name: 'Gaeilge', flag: '🇮🇪' },
        { code: 'MT', name: 'Malti', flag: '🇲🇹' },
        { code: 'SQ', name: 'Shqip', flag: '🇦🇱' },
        { code: 'MK', name: 'Македонски', flag: '🇲🇰' },
        { code: 'HY', name: 'Հայերեն', flag: '🇦🇲' },
        { code: 'KA', name: 'ქართული', flag: '🇬🇪' },
        { code: 'EU', name: 'Euskara', flag: '🏴󠁥󠁳󠁰󠁶󠁿' },
        { code: 'CA', name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
        { code: 'GL', name: 'Galego', flag: '🏴󠁥󠁳󠁧󠁡󠁿' },
        { code: 'SW', name: 'Kiswahili', flag: '🇰🇪' },
        { code: 'UR', name: 'اردو', flag: '🇵🇰' },
      ];
    return (
      <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4">
        <h3 className="font-bold mb-2">Select your language</h3>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <button key={lang.code} className="flex items-center p-2 hover:bg-gray-100 rounded">
              <span className="mr-2">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };
  
export const CurrencyCard = () => {
    const currencies = [
        { code: 'USD', name: 'US Dollar', symbol: '$' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
        { code: 'GBP', name: 'British Pound', symbol: '£' },
        { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
        { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
        { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
        { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
        { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
        { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
        { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
        { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
        { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
        { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
        { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
        { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
        { code: 'PLN', name: 'Polish Złoty', symbol: 'zł' },
        { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$' },
        { code: 'THB', name: 'Thai Baht', symbol: '฿' },
        { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
        { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
        { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
        { code: 'ILS', name: 'Israeli New Shekel', symbol: '₪' },
        { code: 'CLP', name: 'Chilean Peso', symbol: '$' },
        { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
        { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
        { code: 'COP', name: 'Colombian Peso', symbol: '$' },
        { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
        { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
        { code: 'ARS', name: 'Argentine Peso', symbol: '$' },
        { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
        { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
        { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼' },
        { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
        { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك' },
        { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/' },
        { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
        { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
        { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
        { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
        { code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م.' },
        { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب' },
        { code: 'OMR', name: 'Omani Rial', symbol: '﷼' },
        { code: 'CRC', name: 'Costa Rican Colón', symbol: '₡' },
        { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا' },
      ];
  
    return (
      <div className="absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4">
        <h3 className="font-bold mb-2">Select your currency</h3>
        <div className="grid grid-cols-2 gap-2">
          {currencies.map((currency) => (
            <button key={currency.code} className="flex items-center p-2 hover:bg-gray-100 rounded">
              <span className="mr-2">{currency.symbol}</span>
              <span>{currency.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };