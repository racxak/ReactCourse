import image from '../assets/no-projects.png'
import Button from './Button';

export default function EmptyProjects({ onStartAddProject}){
  return(<div className=' w-2/3 text-center mt-24' > 
  <img className='w-16 h-16 object-contain mx-auto' src={image} alt="notepad" />
  <h2 className='my-4 text-stone-500 text-xl font-bold'> No Project Selected </h2> 
  <p className='text-stone-400 mb-4'> Select a project or get started with new one</p>
  <p className='mt-8'>
  <Button onClick={onStartAddProject}> Create new project</Button>
  </p>
  </div>);
};