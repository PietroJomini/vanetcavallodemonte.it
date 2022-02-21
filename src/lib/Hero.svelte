<div class="w-full p-5 pt-0 flex flex-col lg:h-screen">
	<div class="flex-grow flex lg:flex-row flex-col">
		<div class="lg:w-2/3 w-full lg:p-20 flex flex-col justify-center py-10 lg:pb-40">
			<div class="text-5xl font-cabin pt-10 text-gray-800"><slot name="title" /></div>
			<div class="max-w-2xl mt-4 font-cabin text-gray-700"><slot name="description" /></div>
		</div>
		<div class="lg:w-1/2 w-full lg:h-full h-80"><slot name="image" /></div>
	</div>
</div>
