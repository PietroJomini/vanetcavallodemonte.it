<div class="flex w-full flex-col p-5 pt-0 lg:h-screen">
	<div class="flex flex-grow flex-col lg:flex-row">
		<div class="flex w-full flex-col justify-center py-10 lg:w-2/3 lg:p-20 lg:pb-40">
			<div class="font-cabin pt-10 text-5xl text-gray-800"><slot name="title" /></div>
			<div class="font-cabin mt-4 max-w-2xl text-gray-700"><slot name="description" /></div>
		</div>
		<div class="h-80 w-full lg:h-full lg:w-1/2"><slot name="image" /></div>
	</div>
</div>
