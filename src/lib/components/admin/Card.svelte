<script></script>

<div class="flex flex-col divide-y rounded bg-white p-3 shadow">
	<div class="flex items-center justify-between">
		<div class="text-2xl text-gray-700"><slot name="title" /></div>
		<slot name="actions" />
	</div>
	<div class="pt-3">
		<slot name="content" />
	</div>
</div>
