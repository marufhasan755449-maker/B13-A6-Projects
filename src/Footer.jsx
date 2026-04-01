import React from 'react'

const Footer = () => {
  return (
   <div>

<footer class="bg-[#0b1120] text-white pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
      
      <div class="md:col-span-2">
        <h2 class="text-3xl font-bold mb-4">DigiTools</h2>
        <p class="text-gray-400 max-w-sm leading-relaxed">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-6">Product</h3>
        <ul class="space-y-4 text-gray-400">
          <li><a href="#" class="hover:text-white transition">Features</a></li>
          <li><a href="#" class="hover:text-white transition">Pricing</a></li>
          <li><a href="#" class="hover:text-white transition">Templates</a></li>
          <li><a href="#" class="hover:text-white transition">Integrations</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-6">Company</h3>
        <ul class="space-y-4 text-gray-400">
          <li><a href="#" class="hover:text-white transition">About</a></li>
          <li><a href="#" class="hover:text-white transition">Blog</a></li>
          <li><a href="#" class="hover:text-white transition">Careers</a></li>
          <li><a href="#" class="hover:text-white transition">Press</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-6">Resources</h3>
        <ul class="space-y-4 text-gray-400 mb-8">
          <li><a href="#" class="hover:text-white transition">Documentation</a></li>
          <li><a href="#" class="hover:text-white transition">Help Center</a></li>
          <li><a href="#" class="hover:text-white transition">Community</a></li>
        </ul>
        
        <h3 class="font-bold text-lg mb-4">Social Links</h3>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition">f</a>
          <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition">𝕏</a>
          <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition">in</a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
      <p>© 2026 Digitools. All rights reserved.</p>
      <div class="flex gap-8">
        <a href="#" class="hover:text-white transition">Privacy Policy</a>
        <a href="#" class="hover:text-white transition">Terms of Service</a>
        <a href="#" class="hover:text-white transition">Cookies</a>
      </div>
    </div>
  </div>
</footer>
   </div>
  )
}

export default Footer
