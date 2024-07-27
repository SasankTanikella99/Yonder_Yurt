import  { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TranslateIcon from '@mui/icons-material/Translate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { TranslateCard, CurrencyCard } from './Language_and_Currency'
import SignOutButton from './SignOutButton';

const Header = () => {
  const [showLanguageCard, setShowLanguageCard] = useState(false);
  const [showCurrencyCard, setShowCurrencyCard] = useState(false);
  const { isLoggedIn } = useAppContext()

  const toggleLanguageCard = () => {
    setShowLanguageCard(!showLanguageCard);
    setShowCurrencyCard(false);
  };

  const toggleCurrencyCard = () => {
    setShowCurrencyCard(!showCurrencyCard);
    setShowLanguageCard(false);
  };

  return (
    <div className='bg-yellow-400 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <span className='text-3xl text-black font-bold tracking-tight'>
          <Link to="/">Younder Yurt</Link>
        </span>
        <div className='flex items-center space-x-6'>
          <span className='flex space-x-4'>
            <button onClick={toggleLanguageCard} className="flex items-center hover:bg-amber-500">
              <TranslateIcon /> <span className="ml-1">EN</span>
            </button>
            <button onClick={toggleCurrencyCard} className="flex items-center hover:bg-amber-500">
              <AttachMoneyIcon /> <span className="ml-1">USD</span>
            </button>
            <Link className="flex items-center hover:bg-amber-500" to="/contact-us"><SupportAgentIcon /></Link>
          </span>
          <span className='flex space-x-4'>
            {isLoggedIn ? (
              <>
                <Link className='flex items-center text-black px-3 font-bold hover:bg-amber-800' to="/my-bookings">My Bookings</Link>
                <Link className='flex items-center text-black px-3 font-bold hover:bg-amber-800' to="/my-hotels">My Hotels</Link>
                <SignOutButton />
              </>
            ) : (
              <Link to="/signin" className="group relative flex items-center h-11 w-18 px-3 overflow-hidden rounded-lg bg-yellow-900 font-bold hover:bg-yellow-600 text-slate-200 text-black">
                <div className="absolute inset-0 w-0 transition-all bg-yellow-400 duration-[700ms] group-hover:w-full text-black"></div>
                <span className="relative z-10">Sign In</span>
              </Link>
            )}
          </span>
        </div>
      </div>
      {showLanguageCard && <TranslateCard />}
      {showCurrencyCard && <CurrencyCard />}
    </div>
  )
}

export default Header