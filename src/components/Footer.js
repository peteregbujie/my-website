
import cx from 'clsx';
import { FOCUS_VISIBLE_OUTLINE, FOOTER_LINK_STYLES } from '../lib/constants';

function footer() {
  return (
   <footer className='text-gray-400 body-font flex md:flex-row justify-center items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto'>
    <div className='mt-8 text-gray-600 align-baseline'>
     Built with{' '}
     <a
      href='https://nextjs.org'
      className={cx(FOOTER_LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
     >
      Next.js
     </a>
     , and{' '}
     <a
      href='https://tailwindcss.com'
      className={cx(FOOTER_LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
     >
      Tailwind.
     </a>{' '}
     <span className='text-gray-800 font-bold ml-4'>Find me on</span>{' '}
     <a
      href='https://twitter.com/peteregbujie'
      className={cx(FOOTER_LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
     >
      Twitter
     </a>{' '}
     and{' '}
     <a
      href='https://github.com/peteregbujie'
      className={cx(FOOTER_LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
     >
      GitHub
     </a>
    </div>
   </footer>
  );
}

export default footer