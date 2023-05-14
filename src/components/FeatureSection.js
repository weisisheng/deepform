import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Training',
    description:
      'Answer a simple question: What do you want to learn about your user? The A.I. handles the rest.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Deployment',
    description:
      'Deploy in a few clicks. Copy the Deepform link and send it to your users. No login required.',
    icon: LockClosedIcon,
  },
  {
    name: 'Automated Interviews',
    description:
      'The A.I. will automatically interview your users, asking deep, probing questions to get your desired insights.',
    icon: ArrowPathIcon,
  },
  {
    name: 'A.I. Summary and Insights',
    description:
      'The A.I. will summarize the interview and provide you with the insights you need to build better products.',
    icon: FingerPrintIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="bg-transparent py-4 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Accelerate Research</h2>
          <p className="font-satoshi mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to deploy A.I. user researchers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Automate the majority of your customer research and get the insights you need to build better products.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
