

const Simple = () => {
  return (
    <section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
      <p class="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      
      <div class="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Starter</h3>
        <p class="text-gray-500 text-sm mb-6">Perfect for getting started</p>
        <div class="mb-8">
          <span class="text-4xl font-bold text-gray-900">$0</span>
          <span class="text-gray-500">/Month</span>
        </div>
        <ul class="space-y-4 mb-10 flex-grow text-gray-600 text-sm">
          <li class="flex items-center gap-2">✅ Access to 10 free tools</li>
          <li class="flex items-center gap-2">✅ Basic templates</li>
          <li class="flex items-center gap-2 text-gray-400">❌ Community support</li>
          <li class="flex items-center gap-2 text-gray-400">❌ 1 project per month</li>
        </ul>
        <button class="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition shadow-md">
          Get Started Free
        </button>
      </div>

      <div class="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl flex flex-col h-full transform md:scale-105 z-10">
        <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          Most Popular
        </span>
        
        <h3 class="text-xl font-bold mb-2">Pro</h3>
        <p class="text-indigo-100 text-sm mb-6">Best for professionals</p>
        <div class="mb-8">
          <span class="text-4xl font-bold">$29</span>
          <span class="text-indigo-100">/Month</span>
        </div>
        <ul class="space-y-4 mb-10 flex-grow text-sm">
          <li class="flex items-center gap-2">✅ Access to all premium tools</li>
          <li class="flex items-center gap-2">✅ Unlimited templates</li>
          <li class="flex items-center gap-2">✅ Priority support</li>
          <li class="flex items-center gap-2">✅ Unlimited projects</li>
        </ul>
        <button class="w-full py-3 px-6 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition shadow-lg">
          Start Pro Trial
        </button>
      </div>

      <div class="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Enterprise</h3>
        <p class="text-gray-500 text-sm mb-6">For teams and businesses</p>
        <div class="mb-8">
          <span class="text-4xl font-bold text-gray-900">$99</span>
          <span class="text-gray-500">/Month</span>
        </div>
        <ul class="space-y-4 mb-10 flex-grow text-gray-600 text-sm">
          <li class="flex items-center gap-2">✅ Everything in Pro</li>
          <li class="flex items-center gap-2">✅ Team collaboration</li>
          <li class="flex items-center gap-2">✅ Custom integrations</li>
          <li class="flex items-center gap-2">✅ Dedicated support</li>
        </ul>
        <button class="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition shadow-md">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>
  )
}

export default Simple
