<script>
	export let flip = false;
</script>

<div class="flex xl:flex-row flex-col p-4 w-full xl:max-w-7xl mx-auto group py-10">
	<div class="xl:w-1/2 h-96" class:xl:order-last={flip}><slot name="image" /></div>
	<div class="group xl:w-1/2 xl:h-96 py-10 flex items-center justify-center text-center flex-col">
		<div class="transition-all pb-3 text-3xl w-full font-cabin text-gray-800">
			<slot name="title" />
		</div>
		<div class="p-2 xl:w-2/3 text-gray-700">
			<slot name="content" />
		</div>
	</div>
</div>
