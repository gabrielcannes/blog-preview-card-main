import avatarImg from '../assets/images/image-avatar.webp';

export default function BottomHalf() {
  return (
      <div className="flex flex-col">
          <h1 className='text-2xl font-bold mt-6 hover:text-yellow-300 cursor-pointer'>HTML & CSS foundations</h1>
          <p className='text-gray-400 my-4'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className='flex mt-2'>
              <img src={avatarImg} alt="avatar" className='rounded-full w-8 h-8' />
              <span className='ml-4 text-sm font-bold my-auto'>Greg Hooper</span>
          </div>
    </div>
  );
}
