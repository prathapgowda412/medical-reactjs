import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Cardiology',
    description:
      'Experts who assist with the care of your heart and blood vessels. Cardiovascular problems can be treated or prevented by them. They may also focus on certain conditions, such as those involving irregular cardiac rhythms, heart failure, or inherited heart conditions.',
    icon: GlobeAltIcon,
  },
  {
    name: 'General Physicians',
    description:
      'These doctors are highly skilled professionals that offer a variety of non-surgical medical services to adult patients. They treat patients with challenging, serious, or uncommon medical conditions and keep seeing them until the conditions are resolved or stabilized.',
    icon: ScaleIcon,
  },
  {
    name: 'Gastroenterologists',
    description:
      'Diagnosing, treating, and acting to prevent gastrointestinal problems (stomach and intestines) and hepatological (liver, pancreas, and more) illnesses are the responsibilities of gastroenterologists.',
    icon: BoltIcon,
  },
  {
    name: 'Psychologists',
    description:
      "Experts who work to comprehend and explain people's feelings, thoughts, and actions. They create hypotheses about the thoughts and emotions that affect people using methods including observation, evaluation, and experimentation.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function FeaturedSection() {
  return (
    <div className='bg-gray-100 py-24 sm:py-32 lg:py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='sm:text-center'>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Top-searched specialties
          </h2>

          {/* <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>

        <div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
          <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0'>
                  <feature.icon className='h-8 w-8' aria-hidden='true' />
                </div>
                <div className='sm:min-w-0 sm:flex-1'>
                  <p className='text-lg font-semibold leading-8 text-gray-900'>
                    {feature.name}
                  </p>
                  <p className='mt-2 text-base leading-7 text-gray-600'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
