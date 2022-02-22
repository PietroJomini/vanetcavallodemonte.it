<script>
	export let flip = false;
</script>

<div class="group mx-auto flex w-full flex-col p-4 py-10 xl:max-w-7xl xl:flex-row">
	<div class="h-80 xl:h-96 xl:w-1/2" class:xl:order-last={flip}><slot name="image" /></div>
	<div class="group flex flex-col items-center justify-center py-10 text-center xl:h-96 xl:w-1/2">
		<div class="font-cabin w-full pb-3 text-3xl text-gray-800 transition-all">
			<slot name="title" />
		</div>
		<div class="p-2 text-gray-700 xl:w-2/3">
			<slot name="content" />
		</div>
	</div>
</div>
