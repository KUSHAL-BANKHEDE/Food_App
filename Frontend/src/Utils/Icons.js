import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronDown, faChevronUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export const CartIcon = () => <FontAwesomeIcon icon={faShoppingCart} />;

export const DownArrow = () => <FontAwesomeIcon className='mx-6 font-bold' icon={faChevronDown} />

export const UpArrow = () => <FontAwesomeIcon className='mx-6 font-bold' icon={faChevronUp} />

export const ArrowLeft = () => <FontAwesomeIcon icon={faArrowLeft} />

export const ArrowRight = () => <FontAwesomeIcon icon={faArrowRight} />